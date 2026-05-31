import config from '~/config.json';

export const navLinks = [
  {
    label: 'About',
    pathname: '/#details',
  },
   {
    label: 'Skills',
    pathname: '/#skills',
  },
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
 
  {
    label: 'Achievements',
    pathname: '/#achievements',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Profile',
    url: config.profile,
    icon: 'user',
  },
  {
    label: 'LinkedIn',
    url: config.linkedin,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
