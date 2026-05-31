import { baseMeta } from '~/utils/meta';

export function meta() {
  return baseMeta({
    title: 'Achievements',
    description: 'Milestones and recognition throughout my career journey.',
  });
}

export { AchievementsRoute as default } from './achievements.jsx';
