import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type * as ArticleFileInfo from "../models/ArticleFileInfo"
import * as BlogDate from "../models/Date"

const postsDirectory = path.join(process.cwd(), "posts")

export const createIndexPageData = (): readonly ArticleFileInfo.Model[] => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "")
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const matterResult = matter(fileContents)
    const data = matterResult.data
    return {
      id,
      fileName,
      title: data.title as string,
      slug: data.slug as string,
      date: data.date as string,
    }
  })
  allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return allPostsData.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    fileName: item.fileName,
    date: BlogDate.Model(item.date),
  }))
}
