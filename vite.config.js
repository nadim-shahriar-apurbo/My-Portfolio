import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

export default defineConfig({
  base: '/My-Portfolio/',
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl', '**/*.JPG'],
  build: {
    assetsInlineLimit: 1024,
  },
  server: {
    port: 7777,
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    remix({
      ssr: false,
      basename: '/My-Portfolio',
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
          route('/achievements/conrad-challenge', 'routes/achievements/conrad-challenge/route.js');
          route('/achievements/robotech-olympiad', 'routes/achievements/robotech-olympiad/route.js');
          route('/achievements/aiub-cs-fest', 'routes/achievements/aiub-cs-fest/route.js');
          route('/achievements/aiub-cs-fest-junior', 'routes/achievements/aiub-cs-fest-junior/route.js');
          route('/achievements/robo-soccer', 'routes/achievements/robo-soccer/route.js');
          route('/achievements/isif-2024', 'routes/achievements/isif-2024/route.js');
          route('/achievements/robotronics-fest-2025', 'routes/achievements/robotronics-fest-2025/route.js');
          route('/achievements/khude-biggyani-2022', 'routes/achievements/khude-biggyani-2022/route.js');
        });
      },
    }),
    jsconfigPaths(),
  ],
});

