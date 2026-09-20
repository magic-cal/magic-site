const { execFileSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const PAGES_DIR = path.join(__dirname, '..', 'pages')

function git(args) {
  try {
    return execFileSync('git', args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
  } catch (e) {
    return ''
  }
}

// A shallow clone reports the same commit for every file. Google discounts a
// lastmod it finds unreliable, so no date is better than one identical
// everywhere - see fetch-depth in the Pages workflow.
const isShallow = git(['rev-parse', '--is-shallow-repository']) !== 'false'

function pageFileFor(url) {
  const slug = url === '/' ? 'index' : url.replace(/^\/+|\/+$/g, '')
  const candidates = [`${slug}.vue`, path.join(slug, 'index.vue')]
  const found = candidates
    .map((candidate) => path.join(PAGES_DIR, candidate))
    .find((file) => fs.existsSync(file))
  return found || null
}

function pageLastmod(url) {
  if (isShallow) return null
  const file = pageFileFor(url)
  return file ? git(['log', '-1', '--format=%cI', '--', file]) || null : null
}

module.exports = { pageLastmod }
