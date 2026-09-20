#!/usr/bin/env node
// Generates the width variants and WebP copies that utils/responsiveImages.ts
// builds srcsets from. Source files already live in static/ at <=1920px (see
// optimize-images.js), so this only downsamples.
//
// Usage: node scripts/generate-image-variants.js

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const STATIC_DIR = path.join(__dirname, '..', 'static')
const WIDTHS = [400, 640, 960, 1440]
// Logos never render above ~90px, so the photo tiers are all far too large.
const LOGO_WIDTHS = [120, 240]
const JPEG_QUALITY = 78
const WEBP_QUALITY = 74

const IMAGES = [
  'action.jpg',
  'headshot.jpg',
  'perf2.jpg',
  'perf3.jpg',
  'perf4.jpg',
  'perf5.jpg',
  'promo-reaching.jpg',
  'reception-card-trick.jpg',
  'reception-guest-laughing.jpg',
  'shuffle-cropped1.jpg',
  'skill.jpg',
  'vr.jpg',
  'wedding-astonished-reaction.jpg',
  'wedding-card-reveal.jpg',
  'square/corporate.jpg',
  'square/wedding-card-reveal.jpg',
]

const LOGOS = [
  'Age-UK.jpg',
  'Arqiva.jpg',
  'BBC.jpg',
  'Barclays.png',
  'Btg.jpg',
  'CAM.jpg',
  'Disney.png',
  'GLive.jpg',
  'Independent.png',
  'Lloyds.png',
  'Marriott.png',
  'Raddison.png',
  'the-magic-circle.png',
]

async function writeIfChanged(pipeline, outputPath) {
  const tmp = `${outputPath}.tmp`
  await pipeline.toFile(tmp)
  fs.renameSync(tmp, outputPath)
  return fs.statSync(outputPath).size
}

async function generate(file, tiers = WIDTHS) {
  const inputPath = path.join(STATIC_DIR, file)
  const ext = path.extname(file)
  const base = file.slice(0, -ext.length)
  const { width: sourceWidth } = await sharp(inputPath).metadata()

  const widths = tiers.filter((w) => w < sourceWidth)
  for (const width of widths) {
    const resized = () => sharp(inputPath).resize({ width })
    const sameFormat =
      ext === '.png'
        ? resized().png({ compressionLevel: 9, palette: true })
        : resized().jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    await writeIfChanged(
      sameFormat,
      path.join(STATIC_DIR, `${base}-${width}w${ext}`)
    )
    await writeIfChanged(
      resized().webp({ quality: WEBP_QUALITY }),
      path.join(STATIC_DIR, `${base}-${width}w.webp`)
    )
  }

  await writeIfChanged(
    sharp(inputPath).webp({ quality: WEBP_QUALITY }),
    path.join(STATIC_DIR, `${base}.webp`)
  )

  console.log(`${file}: ${sourceWidth}px source, variants ${widths.join('/')}`)
}

async function main() {
  for (const file of IMAGES) {
    await generate(file)
  }
  for (const file of LOGOS) {
    await generate(file, LOGO_WIDTHS)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
