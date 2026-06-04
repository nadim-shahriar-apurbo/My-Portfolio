import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';

const modules = import.meta.glob('../articles.*.mdx', { eager: true });
const rawModules = import.meta.glob('../articles.*.mdx', { eager: true, query: '?raw' });

export async function clientLoader({ request }) {
  const slug = request.url.split('/').at(-1);
  const module = modules[`../articles.${slug}.mdx`];
  
  if (!module) {
    throw new Response('Not Found', { status: 404 });
  }

  const rawModuleKey = `../articles.${slug}.mdx`;
  const text = rawModules[rawModuleKey] || rawModules[`${rawModuleKey}?raw`];
  const textContent = typeof text === 'string' ? text : text?.default || '';

  const readTime = readingTime(textContent);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;

  return {
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime),
  };
}

export function meta({ data }) {
  const { title, abstract } = data.frontmatter;
  return baseMeta({ title, description: abstract, prefix: '', ogImage: data.ogImage });
}

export default function Articles() {
  const { frontmatter, timecode } = useLoaderData();

  return (
    <MDXProvider components={postMarkdown}>
      <Post {...frontmatter} timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
