import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const IMAGES_DIR = path.resolve('public/images')

/** @type {{ file: string; maxWidth: number; png?: boolean }[]} */
const TARGETS = [
  { file: 'team-sables.png', maxWidth: 1600 },
  { file: 'slot-racing.png', maxWidth: 1920 },
  { file: 'pins.png', maxWidth: 1400 },
  { file: 'llavero.png', maxWidth: 1400 },
  { file: 'logo-no-background.png', maxWidth: 800, png: true },
]

async function optimizeOne({ file, maxWidth, png }) {
  const inputPath = path.join(IMAGES_DIR, file)
  const before = (await fs.stat(inputPath)).size

  const image = sharp(inputPath)
  const meta = await image.metadata()
  const width = meta.width ?? maxWidth
  const pipeline =
    width > maxWidth ? image.resize({ width: maxWidth, withoutEnlargement: true }) : image

  const buffer = png
    ? await pipeline
        .png({ compressionLevel: 9, palette: true, quality: 80, effort: 10 })
        .toBuffer()
    : await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer()

  const outputPath = png ? inputPath : inputPath.replace(/\.png$/i, '.jpg')
  await fs.writeFile(outputPath, buffer)

  if (!png && outputPath !== inputPath) {
    await fs.unlink(inputPath)
  }

  const after = (await fs.stat(outputPath)).size
  console.log(
    `${file}: ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024).toFixed(0)} KB (${path.basename(outputPath)})`,
  )
  return { from: file, to: path.basename(outputPath), png }
}

const results = await Promise.all(TARGETS.map(optimizeOne))
console.log('\nRenamed assets:', JSON.stringify(results, null, 2))
