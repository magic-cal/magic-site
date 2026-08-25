#!/usr/bin/env node
// Resizes/compresses camera-original photos for web use.
// Full-res originals live in photo-originals/ (not shipped to static/, so they
// never get published by `nuxt generate`); this writes web-sized copies to static/.
//
// Usage: node scripts/optimize-images.js

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const SOURCE_DIR = path.join(__dirname, '..', 'photo-originals')
const OUTPUT_DIR = path.join(__dirname, '..', 'static')
const MAX_WIDTH = 1920
const JPEG_QUALITY = 78

async function optimize(file) {
  const inputPath = path.join(SOURCE_DIR, file)
  const outputPath = path.join(OUTPUT_DIR, file)

  const before = fs.statSync(inputPath).size
  await sharp(inputPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(outputPath + '.tmp')
  fs.renameSync(outputPath + '.tmp', outputPath)
  const after = fs.statSync(outputPath).size

  console.log(
    `${file}: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024).toFixed(0)}KB`
  )
}

async function main() {
  const files = fs.readdirSync(SOURCE_DIR).filter((f) => /\.jpe?g$/i.test(f))
  for (const file of files) {
    await optimize(file)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
