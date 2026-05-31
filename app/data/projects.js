import arionysMain from '~/assets/arionysaimain.jpg';
import arionysSecond from '~/assets/arionysaisecond.jpg';
import biolimbTexture from '~/assets/biolimb.png';
import wheelchairTexture from '~/assets/wheelchairmain.png';

import roadlinkTexture from '~/assets/roadlinkmain.jpg';

export const projectsData = [
  {
    id: 'project-1',
    title: 'Road Link — Road Safety & Driver Assistance System',
    description: 'An intelligent road safety ecosystem designed to reduce traffic accidents and improve driver awareness through real-time monitoring and predictive alerts.',
    buttonText: 'View project',
    buttonLink: '/projects/roadlink',
    model: {
      type: 'laptop',
      alt: 'Road Link real-time accident prevention dashboard',
      textures: [
        {
          srcSet: `${roadlinkTexture} 1280w`,
          placeholder: roadlinkTexture,
        },
      ],
    },
    highlighted: true,
  },
  {
    id: 'project-2',
    title: 'Saliva Bio Medical Robot',
    description: 'Autonomous Saliva Collection System using AI and Robotics to minimize infection risks.',
    buttonText: 'View project',
    buttonLink: '/projects/saliva-robot',
    model: {
      type: 'laptop',
      alt: 'Saliva Bio Medical Robot system interface',
      textures: [
        {
          srcSet: `${biolimbTexture} 800w`,
          placeholder: biolimbTexture,
        },
      ],
    },
    highlighted: true,
  },
  {
    id: 'project-3',
    title: 'Arionys AI',
    description: 'A platform that offers intelligent assistants for coding, content creation, and productivity tasks using advanced language models.',
    buttonText: 'View website',
    buttonLink: 'https://ai.arionys.software/',
    model: {
      type: 'phone',
      alt: 'Arionys AI mobile interface',
      textures: [
        {
          srcSet: `${arionysMain} 800w`,
          placeholder: arionysMain,
        },
        {
          srcSet: `${arionysSecond} 800w`,
          placeholder: arionysSecond,
        },
      ],
    },
    highlighted: true,
  },
  {
    id: 'project-4',
    title: 'Smart ML-Powered Wheelchair',
    description: 'Multi-Modal Assistive Mobility System controlled via hand gestures and wireless remote.',
    buttonText: 'View project',
    buttonLink: '/projects/wheelchair',
    model: {
      type: 'laptop',
      alt: 'Smart ML-Powered Wheelchair',
      textures: [
        {
          srcSet: `${wheelchairTexture} 800w`,
          placeholder: wheelchairTexture,
        },
      ],
    },
    highlighted: false,
  }
];
