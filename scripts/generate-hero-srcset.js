#!/usr/bin/env node
// Generates responsive width variants (640w/960w/1440w) for hero images used
// above the fold (page-hero component + homepage parallax), so the browser
// can request a smaller file on narrow viewports instead of the full 1920px
// original. Source files already live in static/ at <=1920px (see
// optimize-images.js), so this just downsamples further.
//
// Usage: node scripts/generate-hero-srcset.js

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const STATIC_DIR = path.join(__dirname, '..', 'static')
const WIDTHS = [640, 960, 1440]
const JPEG_QUALITY = 78

const HERO_IMAGES = [
  'action.jpg',
  'headshot.jpg',
  'perf2.jpg',
  'perf4.jpg',
  'perf5.jpg',
  'reception-card-trick.jpg',
  'reception-guest-laughing.jpg',
  'skill.jpg',
  'wedding-astonished-reaction.jpg',
  'wedding-card-reveal.jpg',
  'shuffle-cropped1.jpg',
]

async function generate(file) {
  const inputPath = path.join(STATIC_DIR, file)
  const ext = path.extname(file)
  const base = file.slice(0, -ext.length)
  const meta = await sharp(inputPath).metadata()

  for (const width of WIDTHS) {
    if (width >= meta.width) continue
    const outputPath = path.join(STATIC_DIR, `${base}-${width}w${ext}`)
    await sharp(inputPath)
      .resize({ width })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(outputPath + '.tmp')
    fs.renameSync(outputPath + '.tmp', outputPath)
    const size = fs.statSync(outputPath).size
    console.log(`${base}-${width}w${ext}: ${(size / 1024).toFixed(0)}KB`)
  }
}

async function main() {
  for (const file of HERO_IMAGES) {
    await generate(file)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
