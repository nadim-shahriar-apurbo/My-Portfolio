import { formatTimecode, readingTime } from '~/utils/timecode';

export async function getPosts() {
  const modules = import.meta.glob('../articles.*.mdx', { eager: true });
  const rawModules = import.meta.glob('../articles.*.mdx', { eager: true, query: '?raw' });

  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post]) => {
      let slug = file.replace('../articles.', '/articles/').replace(/\.mdx$/, '');

      const text = rawModules[file] || rawModules[`${file}?raw`];
      const textContent = typeof text === 'string' ? text : text?.default || '';
      const readTime = readingTime(textContent);
      const timecode = formatTimecode(readTime);

      return {
        slug,
        timecode,
        frontmatter: post.frontmatter,
      };
    })
  );

  return sortBy(posts, post => post.frontmatter.date, 'desc');
}

function sortBy(arr, key, dir = 'asc') {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === 'asc' ? res : -res;
  });
}

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
