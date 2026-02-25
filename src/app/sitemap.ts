import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.buchhalt.de', lastModified: new Date() },
    { url: 'https://www.buchhalt.de/about', lastModified: new Date() },
    { url: 'https://www.buchhalt.de/services', lastModified: new Date() },
    { url: 'https://www.buchhalt.de/contact', lastModified: new Date() },
  ]
}