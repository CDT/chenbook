import fs from 'node:fs'
import path from 'node:path'
import type { DefaultTheme } from 'vitepress'

const DOCS_ROOT = path.resolve(process.cwd())
const SECTION_DIRS = ['music', 'coding', 'history', 'science', 'literature', 'miscellaneous']

export function createSidebar(): DefaultTheme.Sidebar {
  const sidebar: DefaultTheme.Sidebar = {}

  for (const section of SECTION_DIRS) {
    const absDir = path.join(DOCS_ROOT, section)
    if (!fs.existsSync(absDir)) continue

    const base = `/${section}/`
    sidebar[base] = buildItems(absDir, base)
  }

  return sidebar
}

function buildItems(dir: string, baseUrl: string, depth = 0): DefaultTheme.SidebarItem[] {
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('.') && entry.name !== 'node_modules')

  const items: DefaultTheme.SidebarItem[] = []
  const indexEntry = entries.find((entry) => entry.isFile() && isIndex(entry.name))

  if (indexEntry) {
    const title =
      getMarkdownTitle(path.join(dir, indexEntry.name)) ?? (depth === 0 ? 'Overview' : formatLabel(path.basename(dir)))
    items.push({ text: title, link: baseUrl })
  }

  const directories = entries.filter((entry) => entry.isDirectory()).sort(compareNames)
  const files = entries
    .filter((entry) => entry.isFile() && isMarkdown(entry.name) && !isIndex(entry.name))
    .sort(compareNames)

  for (const file of files) {
    const filePath = path.join(dir, file.name)
    const slug = file.name.replace(/\.md$/i, '')
    const link = baseUrl + slug
    const title = getMarkdownTitle(filePath) ?? formatLabel(slug)
    items.push({ text: title, link })
  }

  for (const sub of directories) {
    const subDir = path.join(dir, sub.name)
    const subBase = `${baseUrl}${sub.name}/`
    const subItems = buildItems(subDir, subBase, depth + 1)
    if (!subItems.length) continue

    const indexName = getExistingIndex(subDir)
    const groupTitle = (indexName && getMarkdownTitle(path.join(subDir, indexName))) ?? formatLabel(sub.name)

    const group: DefaultTheme.SidebarItem = {
      text: groupTitle,
      collapsed: depth >= 1,
      items: subItems
    }

    if (indexName) {
      group.link = subBase
    }

    items.push(group)
  }

  return items
}

function compareNames(a: fs.Dirent, b: fs.Dirent) {
  return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
}

function isMarkdown(filename: string) {
  return filename.toLowerCase().endsWith('.md')
}

function isIndex(filename: string) {
  const lower = filename.toLowerCase()
  return lower === 'index.md' || lower === 'readme.md'
}

function getExistingIndex(dir: string) {
  const indexPath = path.join(dir, 'index.md')
  if (fs.existsSync(indexPath)) return 'index.md'
  const readmePath = path.join(dir, 'README.md')
  if (fs.existsSync(readmePath)) return 'README.md'
  return undefined
}

function formatLabel(name: string) {
  return name
    .replace(/[-_]+/g, ' ')
    .split(' ')
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ')
}

function getMarkdownTitle(filePath: string): string | undefined {
  if (!fs.existsSync(filePath)) return undefined
  const raw = fs.readFileSync(filePath, 'utf-8')
  const lines = raw.split(/\r?\n/)

  let inFrontMatter = false
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed === '---') {
      inFrontMatter = !inFrontMatter
      continue
    }
    if (inFrontMatter || !trimmed) continue

    const headingMatch = /^#\s+(.+)$/.exec(trimmed)
    if (headingMatch) {
      return headingMatch[1].trim()
    }
  }

  return undefined
}
