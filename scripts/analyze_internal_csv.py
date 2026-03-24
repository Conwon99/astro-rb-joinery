"""One-off analysis of Screaming Frog internal_all.csv — run: python scripts/analyze_internal_csv.py"""
import csv
import collections
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / "internal_all.csv"


def to_int(x: str) -> int:
    try:
        return int(float(x))
    except (TypeError, ValueError):
        return 0


def main() -> None:
    with open(CSV_PATH, encoding="utf-8-sig", newline="") as f:
        rows = list(csv.DictReader(f))

    # Normalise column access (BOM-safe)
    def col(name: str) -> str:
        for k in rows[0]:
            if k.replace("\ufeff", "").strip('"') == name:
                return k
        raise KeyError(name)

    A = lambda r, n: r[col(n)]

    print("=== internal_all.csv ===")
    print("Path:", CSV_PATH)
    print("Rows:", len(rows))
    print()

    by_ct = collections.Counter(A(r, "Content Type").split(";")[0].strip() for r in rows)
    print("By Content Type (prefix):")
    for k, v in by_ct.most_common(20):
        print(f"  {k}: {v}")
    print()

    by_idx = collections.Counter(A(r, "Indexability") for r in rows)
    print("Indexability:")
    for k, v in by_idx.most_common():
        print(f"  {k}: {v}")
    print()

    by_istat = collections.Counter((A(r, "Indexability Status") or "(empty)").strip() for r in rows)
    print("Indexability Status (top):")
    for k, v in by_istat.most_common(15):
        print(f"  {k}: {v}")
    print()

    by_code = collections.Counter(A(r, "Status Code") for r in rows)
    print("HTTP status codes:")
    for k, v in sorted(by_code.items(), key=lambda x: int(x[0]) if x[0].isdigit() else 0):
        print(f"  {k}: {v}")
    print()

    html = [r for r in rows if A(r, "Content Type").startswith("text/html")]
    print("text/html rows:", len(html))

    idx_html = [r for r in html if A(r, "Indexability") == "Indexable"]
    non_idx_html = [r for r in html if A(r, "Indexability") != "Indexable"]
    print("  Indexable HTML:", len(idx_html))
    print("  Non-indexable HTML:", len(non_idx_html))
    print()

    # Redirects
    reds = [r for r in rows if (A(r, "Redirect URL") or "").strip()]
    print("Rows with redirect:", len(reds))
    for r in reds[:12]:
        print(" ", A(r, "Status Code"), A(r, "Address")[:85])
        print("    ->", (A(r, "Redirect URL") or "")[:85], A(r, "Redirect Type") or "")
    print()

    # Canonical: staging URL should self-canonicalise; flag rbjoinery.com in canonical on staging
    canon_mismatch = []
    for r in html:
        addr = A(r, "Address")
        can = (A(r, "Canonical Link Element 1") or "").strip()
        if "rbjoinerystaging.netlify.app" in addr and "rbjoinery.com" in can:
            canon_mismatch.append((addr, can))
        if not can and A(r, "Status Code") == "200":
            canon_mismatch.append((addr, "(missing)"))
    print("Canonical checks (staging HTML): issues", len(canon_mismatch))
    for pair in canon_mismatch[:15]:
        print(" ", pair[0][:90])
        print("    canonical:", pair[1][:100] if pair[1] else "")
    print()

    # Duplicate titles — indexable HTML
    ctr = collections.Counter((A(r, "Title 1") or "").strip() for r in idx_html)
    dup_titles = [(t, n) for t, n in ctr.items() if n > 1 and t]
    print("Duplicate titles (indexable HTML):", len(dup_titles))
    for t, n in sorted(dup_titles, key=lambda x: -x[1])[:10]:
        print(f"  ({n}x) {t[:80]}...")

    # Thin pages
    thin = [r for r in idx_html if to_int(A(r, "Word Count")) < 300]
    print()
    print("Indexable HTML with word count under 300:", len(thin))
    for r in sorted(thin, key=lambda x: to_int(A(x, "Word Count")))[:12]:
        print(f"  {to_int(A(r, 'Word Count')):4d}  {A(r, 'Address')[:88]}")
    print()

    # Indexable non-HTML (bloat)
    idx_non_html = [r for r in rows if A(r, "Indexability") == "Indexable" and not A(r, "Content Type").startswith("text/html")]
    print("Indexable NON-HTML (potential bloat):", len(idx_non_html))
    by_kind = collections.Counter(A(r, "Content Type").split(";")[0].strip() for r in idx_non_html)
    for k, v in by_kind.most_common(15):
        print(f"  {k}: {v}")

    # Largest transferred assets
    assets = [r for r in rows if not A(r, "Content Type").startswith("text/html")]
    assets.sort(key=lambda r: to_int(A(r, "Transferred (bytes)")), reverse=True)
    print()
    print("Top 8 non-HTML by transferred bytes:")
    for r in assets[:8]:
        tb = to_int(A(r, "Transferred (bytes)"))
        print(f"  {tb/1024/1024:6.2f} MB  {A(r, 'Address')[:95]}")

    # Non-indexable reasons breakdown for HTML
    print()
    print("Non-indexable HTML by status label:")
    for r in non_idx_html:
        pass
    ni_reason = collections.Counter((A(r, "Indexability Status") or "?").strip() for r in non_idx_html)
    for k, v in ni_reason.most_common(20):
        print(f"  {k}: {v}")


if __name__ == "__main__":
    main()
