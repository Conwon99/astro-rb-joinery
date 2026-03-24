import { ArrowUpRight, Star } from "lucide-react";
import { trackQuoteRequest } from "@/utils/analytics";

function splitHeroTitle(heroH1: string): { line1: string; line2: string } {
  const m = heroH1.match(/^(.+?)\s+in\s+(.+)$/i);
  if (!m) return { line1: heroH1, line2: "" };
  return { line1: m[1].trim(), line2: m[2].trim() };
}

const HOME_HERO_REGION = "Ayrshire & Glasgow";

/** Same horizontal shell as `Navigation` (`container mx-auto max-w-7xl px-4`). */
const heroPageGutterClass = "container relative z-10 mx-auto w-full max-w-7xl px-4";

function splitHomeHeroTitle(
  heroH1: string,
  /** When set (e.g. location hub), `heroH1` must end with this exact suffix for the green highlight. */
  homeTitleRegion?: string
): { main: string; region: string | null } {
  const suffix = homeTitleRegion ?? HOME_HERO_REGION;
  if (!heroH1.endsWith(suffix)) {
    return { main: heroH1, region: null };
  }
  const main = heroH1.slice(0, heroH1.length - suffix.length).trimEnd();
  return { main, region: suffix };
}

function GoogleGMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export type ServicePageHeroProps = {
  backgroundImage: string;
  heroH1: string;
  heroLead: string;
  reviewCount: number;
  reviewLink: string;
  /** Section element id (e.g. `hero` on the homepage for `#hero` links). */
  sectionId?: string;
  /** When set, `trackQuoteRequest` runs before navigating to `/contact`. */
  quoteTrackingSource?: string;
  /** `home` = white title + green “Ayrshire & Glasgow” suffix when `heroH1` ends with that phrase. */
  titleStyle?: "service" | "home";
  /**
   * With `titleStyle="home"`, green suffix to strip from the end of `heroH1` (e.g. location name).
   * Omit to use the default “Ayrshire & Glasgow” behaviour.
   */
  homeTitleRegion?: string;
  /** With `titleStyle="home"`, render the full heading in green (used by location hubs). */
  homeTitleAllGreen?: boolean;
};

const ServicePageHero = ({
  backgroundImage,
  heroH1,
  heroLead,
  reviewCount,
  reviewLink,
  sectionId = "service-hero",
  quoteTrackingSource,
  titleStyle = "service",
  homeTitleRegion: homeTitleRegionProp,
  homeTitleAllGreen = false,
}: ServicePageHeroProps) => {
  const { line1, line2 } = splitHeroTitle(heroH1);
  const { main: homeTitleMain, region: homeTitleRegion } =
    titleStyle === "home"
      ? splitHomeHeroTitle(heroH1, homeTitleRegionProp)
      : { main: "", region: null };
  const headingId = `${sectionId}-heading`;
  const sectionClassName =
    titleStyle === "home"
      ? "relative flex min-h-screen min-h-[100dvh] items-end px-0 pb-12 pt-32 md:pb-16 md:pt-36 lg:pb-20 lg:pt-40"
      : "relative flex min-h-[calc(100dvh-6.5rem)] items-end px-0 pb-12 pt-24 md:min-h-[calc(100dvh-7rem)] md:pb-16 md:pt-28 lg:min-h-[calc(100dvh-8rem)] lg:pb-20 lg:pt-32";

  const titleBlock =
    titleStyle === "home" ? (
      <h1
        id={headingId}
        className={`font-display break-words px-2 text-3xl font-bold leading-tight tracking-tight drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl ${
          homeTitleAllGreen ? "bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent" : "text-white"
        }`}
      >
        <span className="block">
          {homeTitleRegion ? (
            <>
              {homeTitleMain}{" "}
              <span className={homeTitleAllGreen ? "" : "bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"}>
                {homeTitleRegion}
              </span>
            </>
          ) : (
            homeTitleMain
          )}
        </span>{" "}
        <span className="mt-5 block max-w-2xl break-words !font-figtree text-base font-medium leading-relaxed text-white/95 drop-shadow-md sm:mt-6 sm:text-lg md:text-xl">
          {heroLead}
        </span>
      </h1>
    ) : (
      <h1
        id={headingId}
        className="font-display break-words px-2 text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-md md:text-5xl lg:text-6xl"
      >
        <span className="block">{line1}</span>
        {line2 ? (
          <span className="mt-1 block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent md:mt-2">
            {line2}
          </span>
        ) : null}
      </h1>
    );

  return (
    <section
      id={sectionId}
      className={sectionClassName}
      aria-labelledby={headingId}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${JSON.stringify(backgroundImage)})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/55 md:from-black/70 md:via-black/35" />
      </div>
      <div className={heroPageGutterClass}>
        <div className="max-w-2xl text-left">
          {titleBlock}
          {titleStyle === "home" ? null : (
            <p className="mt-5 break-words px-2 !font-figtree text-lg leading-relaxed text-white/95 md:mt-6 md:text-xl">
              {heroLead}
            </p>
          )}
        </div>

        {/* CTAs + review badge share one row on md+ so the badge lines up with the quote button */}
        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex max-w-2xl flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="/contact/"
              onClick={() => {
                if (quoteTrackingSource) {
                  trackQuoteRequest(quoteTrackingSource, []);
                }
              }}
              className="group inline-flex w-fit items-center gap-1 rounded-full bg-green-600 py-2 pl-8 pr-2 text-left font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-green-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
            >
              <span className="pr-2">Get a free quote</span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-800/90 transition-transform group-hover:scale-105">
                <ArrowUpRight className="h-6 w-6" aria-hidden />
              </span>
            </a>
            {titleStyle === "home" ? (
              <a
                href="/services/"
                className="inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-sky-200"
              >
                View services
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            ) : (
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 text-base font-semibold text-white underline-offset-4 transition-colors hover:text-sky-200 hover:underline"
              >
                Contact us
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            )}
          </div>

          <div className="flex shrink-0 justify-start md:justify-end">
            <a
              href={reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[280px] rounded-2xl border border-white/10 bg-[#3d2d26]/95 px-5 py-4 shadow-xl backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-[#45332b]/95 sm:w-auto"
            >
              <div className="flex items-center gap-2">
                <GoogleGMark className="h-7 w-7 shrink-0" />
                <span className="text-lg font-bold text-white">5.0</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#FBBC04] text-[#FBBC04]"
                      aria-hidden
                    />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-white/85">
                Based on{" "}
                <span className="font-semibold text-white">{reviewCount} reviews</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePageHero;
