import { baseMeta } from '~/utils/meta';

export function meta() {
  return baseMeta({
    title: 'Projects',
    description: 'A collection of featured design and development projects.',
  });
}

export { Projects as default } from './projects.jsx';
