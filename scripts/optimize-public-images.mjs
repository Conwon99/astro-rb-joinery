/**
 * Convert JPG/PNG under /public to WebP and resize; re-encode existing WebP.
 * Reads each file into memory first so Windows can release locks before overwrite.
 * Run: node scripts/optimize-public-images.mjs
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const RASTER = new Set([".jpg", ".jpeg", ".png"]);

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function getMaxWidth(relPosix) {
  const lower = relPosix.toLowerCase();
  if (lower.includes("rblogo")) return 320;
  if (lower.includes("rb joinery back")) return 1920;
  if (lower.includes("/services/")) return 1200;
  if (lower.includes("/imgs/")) return 1200;
  if (lower.includes("/gallery/")) return 1600;
  if (lower.includes("lovable-uploads")) return 1600;
  return 1920;
}

/**
 * @param {Buffer|string} input
 * @param {string} relPosix
 */
async function pipelineToWebpBuffer(input, relPosix) {
  const maxW = getMaxWidth(relPosix);
  const meta = await sharp(input).metadata();
  let pipeline = sharp(input);
  if (meta.width && meta.width > maxW) {
    pipeline = sharp(input).resize({
      width: maxW,
      withoutEnlargement: true,
      fit: "inside",
    });
  }
  return pipeline.webp({ quality: 82, effort: 4, smartSubsample: true }).toBuffer();
}

async function main() {
  if (!fs.existsSync(publicDir)) {
    console.error("Missing public/", publicDir);
    process.exit(1);
  }

  const all = walk(publicDir);

  const rasters = all.filter((f) => RASTER.has(path.extname(f).toLowerCase()));
  for (const absIn of rasters) {
    const relPosix = path.relative(publicDir, absIn).replace(/\\/g, "/");
    const dir = path.dirname(absIn);
    const base = path.basename(absIn, path.extname(absIn));
    const absOut = path.join(dir, `${base}.webp`);
    const raw = fs.readFileSync(absIn);
    fs.unlinkSync(absIn);
    const buf = await pipelineToWebpBuffer(raw, relPosix);
    fs.writeFileSync(absOut, buf);
    console.log(
      `Converted ${relPosix} → ${path.relative(publicDir, absOut).replace(/\\/g, "/")} (${(buf.length / 1024).toFixed(1)} KiB)`
    );
  }

  const webps = walk(publicDir).filter((f) => path.extname(f).toLowerCase() === ".webp");
  for (const absW of webps) {
    const relPosix = path.relative(publicDir, absW).replace(/\\/g, "/");
    const raw = fs.readFileSync(absW);
    fs.rmSync(absW, { force: true });
    const buf = await pipelineToWebpBuffer(raw, relPosix);
    fs.writeFileSync(absW, buf);
    console.log(`Re-encoded ${relPosix} (${(buf.length / 1024).toFixed(1)} KiB)`);
  }

  console.log("\nDone.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
