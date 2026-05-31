import achievement1Placeholder from '~/assets/conrad.jpg';
import achievement1 from '~/assets/conrad.jpg';
import achievement1Large from '~/assets/conrad.jpg';

import achievement2Placeholder from '~/assets/robotech.png';
import achievement2 from '~/assets/robotech.png';
import achievement2Large from '~/assets/robotech.png';

import achievement3Placeholder from '~/assets/aiubcsfest.png';
import achievement3 from '~/assets/aiubcsfest.png';
import achievement3Large from '~/assets/aiubcsfest.png';

import achievement4Placeholder from '~/assets/aiubcsfest.png';
import achievement4 from '~/assets/aiubcsfest.png';
import achievement4Large from '~/assets/aiubcsfest.png';

import achievement5Placeholder from '~/assets/aiubcsfest.png';
import achievement5 from '~/assets/aiubcsfest.png';
import achievement5Large from '~/assets/aiubcsfest.png';

import achievement6Placeholder from '~/assets/isif.JPG';
import achievement6 from '~/assets/isif.JPG';
import achievement6Large from '~/assets/isif.JPG';

import achievement7Placeholder from '~/assets/robotronics.JPG';
import achievement7 from '~/assets/robotronics.JPG';
import achievement7Large from '~/assets/robotronics.JPG';

import achievement8Placeholder from '~/assets/khude biggani.png';
import achievement8 from '~/assets/khude biggani.png';
import achievement8Large from '~/assets/khude biggani.png';

export const achievementsData = [
  {
    year: '2024',
    title: 'Team EXO MAX | Global 2nd Place, Nasa Conrad Challenge',
    description: 'Represented Bangladesh as a member of Team EXO MAX, earning Global Runner-Up at the Conrad Challenge 2024.',
    category: 'Competition',
    image: {
      srcSet: `${achievement1} 800w, ${achievement1Large} 1920w`,
      placeholder: achievement1Placeholder,
    },
    alt: 'Conrad Challenge 2024 Global Runner-Up',
    buttonText: 'View details',
    buttonLink: '/achievements/conrad-challenge',
    highlighted: true,
  },
  {
    year: '2024',
    title: 'Team Robo Superior | Winner, RoboTech Olympiad 2024',
    description: 'Developed Road Link, an innovative project focused on improving road safety and transportation efficiency, winning 1st Place at RoboTech Olympiad 2024.',
    category: 'Competition',
    image: {
      srcSet: `${achievement2} 800w, ${achievement2Large} 1920w`,
      placeholder: achievement2Placeholder,
    },
    alt: 'RoboTech Olympiad 2024 1st Place Winner',
    buttonText: 'View details',
    buttonLink: '/achievements/robotech-olympiad',
    highlighted: true,
  },
  {
    year: '2024',
    title: 'Team Robo Superior | AIUB CS Fest Project Showcase - Senior',
    description: 'Presented Road Link at the AIUB CS Fest Project Showcase, winning Senior Champion (1st Place).',
    category: 'Competition',
    image: {
      srcSet: `${achievement3} 800w, ${achievement3Large} 1920w`,
      placeholder: achievement3Placeholder,
    },
    alt: 'AIUB CS Fest Project Showcase Senior Champion trophy',
    buttonText: 'View details',
    buttonLink: '/achievements/aiub-cs-fest',
    highlighted: false,
  },
  {
    year: '2024',
    title: 'Team Noob-01 | AIUB CS Fest Project Showcase - Junior',
    description: 'Presented BioLimb at the AIUB CS Fest Project Showcase, winning Junior Runner-Up (2nd Place).',
    category: 'Competition',
    image: {
      srcSet: `${achievement4} 800w, ${achievement4Large} 1920w`,
      placeholder: achievement4Placeholder,
    },
    alt: 'BioLimb Project Showcase Junior Runner-Up award',
    buttonText: 'View details',
    buttonLink: '/achievements/aiub-cs-fest-junior',
    highlighted: false,
  },
  {
    year: '2024',
    title: 'Team Robo Superior | AIUB CS Fest Robo Soccer',
    description: 'Participated in competitive Robo Soccer at the AIUB CS Fest, designing and programming an autonomous/remote-controlled robot, earning 2nd Runner-Up.',
    category: 'Competition',
    image: {
      srcSet: `${achievement5} 800w, ${achievement5Large} 1920w`,
      placeholder: achievement5Placeholder,
    },
    alt: 'AIUB CS Fest Robo Soccer 2nd Runner-Up award',
    buttonText: 'View details',
    buttonLink: '/achievements/robo-soccer',
    highlighted: false,
  },
  {
    year: '2024',
    title: 'Team Robo Superior | Runner-Up, International Skill Innovation Fest (ISIF) 2024',
    description: 'Presented BioLimb at the International Skill Innovation Fest (ISIF) 2024, winning Runner-Up.',
    category: 'Competition',
    image: {
      srcSet: `${achievement6} 800w, ${achievement6Large} 1920w`,
      placeholder: achievement6Placeholder,
    },
    alt: 'Team Robo Superior | ISIF 2024 Runner-Up award',
    buttonText: 'View details',
    buttonLink: '/achievements/isif-2024',
    highlighted: false,
  },
  {
    year: '2025',
    title: 'Team Robo Superior | Winner, Robotronics Fest 2025 – University of Dhaka',
    description: 'Presented Road Link at the Robotronics Fest 2025 organized by the University of Dhaka, winning 1st Place (Winner).',
    category: 'Competition',
    image: {
      srcSet: `${achievement7} 800w, ${achievement7Large} 1920w`,
      placeholder: achievement7Placeholder,
    },
    alt: 'Road Link Robotronics Fest 2025 Winner trophy',
    buttonText: 'View details',
    buttonLink: '/achievements/robotronics-fest-2025',
    highlighted: true,
  },
  {
    year: '2022',
    title: 'Khude Biggyani Award 2022',
    description: 'Recognized as a participant and award recipient in the SMC MoniMix Plus Khude Biggyani Award 2022 organized by Deepto TV.',
    category: 'Competition',
    image: {
      srcSet: `${achievement8} 800w, ${achievement8Large} 1920w`,
      placeholder: achievement8Placeholder,
    },
    alt: 'Khude Biggyani Award 2022 trophy',
    buttonText: 'View details',
    buttonLink: '/achievements/khude-biggyani-2022',
    highlighted: false,
  }
];
