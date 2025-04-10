import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Web Development and Technology Blog | Rafael Gomez |',
    description: 'Welcome to my blog, where I share my passion for frontend development, web design, and the latest technology trends.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}