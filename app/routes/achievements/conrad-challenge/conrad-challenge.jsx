import { motion } from 'framer-motion';
import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
  ProjectImage,
  ProjectSectionColumns,
} from '~/layouts/project';
import styles from './conrad-challenge.module.css';

import achievementPlaceholder from '~/assets/conrad.jpg';
import achievementImage from '~/assets/conrad.jpg';
import achievementImageLarge from '~/assets/conrad.jpg';
import achievementBg from '~/assets/conrad bg.jpg';

const title = 'Team EXO MAX | Global 2nd Place, Conrad Challenge 2024';
const description = 'Represented Bangladesh and earned the title of Global Runner-Up at the Conrad Challenge 2024.';
const year = '2024';
const category = 'Competition';

const skills = [
  'Hardware Integration',
  'Research & Analysis',
  'Software Development',
  'Problem Solving',
  'Innovation',
  'Design Thinking',
  'Team Collaboration',
  'Technical Documentation',
  'Project Development',
  'Public Presentation'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Achievements' });
};

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

export function ConradChallenge() {
  return (
    <ProjectContainer className={styles.achievement}>
      <ProjectBackground
        src={achievementBg}
        srcSet={`${achievementBg} 800w, ${achievementBg} 1920w`}
        placeholder={achievementBg}
        opacity={0.8}
      />
      <ProjectHeader
        title={title}
        description={description}
        url="https://www.conradchallenge.org"
        roles={[category, year]}
      />
      <ProjectSection>
        <ProjectSectionContent>
          <motion.div 
            className={styles.framedContainer}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <ProjectImage
              className={styles.framedImage}
              src={achievementImage}
              srcSet={`${achievementImage} 800w, ${achievementImageLarge} 1920w`}
              placeholder={achievementPlaceholder}
              width={800}
              height={500}
              cover
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
              alt="Conrad Challenge 2024 Global Runner-Up"
            />
          </motion.div>
        </ProjectSectionContent>
      </ProjectSection>
      
      <ProjectSection>
        <ProjectSectionContent>
          <ProjectTextRow>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <ProjectSectionHeading>Project Overview</ProjectSectionHeading>
              <ProjectSectionText>
                Represented Bangladesh as a member of Team EXO MAX in the Conrad Challenge 2024, a globally recognized innovation and entrepreneurship competition. Collaborated with a multidisciplinary team to develop an innovative solution addressing a real-world challenge, competing against teams from across the globe and earning the title of Global Runner-Up (2nd Place Worldwide).
              </ProjectSectionText>
            </motion.div>
          </ProjectTextRow>
        </ProjectSectionContent>
      </ProjectSection>
      
      <ProjectSection>
        <ProjectSectionContent>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ProjectTextRow>
              <motion.div variants={fadeIn}>
                <ProjectSectionHeading>Key Achievements</ProjectSectionHeading>
              </motion.div>
            </ProjectTextRow>
            <ProjectSectionColumns className={styles.achievementsColumns}>
              <div className={styles.listColumn}>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <motion.li variants={fadeIn} className={styles.listItem}>Secured Global 2nd Place (Runner-Up) at the Conrad Challenge 2024.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Represented Bangladesh on an international innovation and entrepreneurship platform.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Developed a solution with strong real-world impact and implementation potential.</motion.li>
                  </ul>
                </div>
              </div>
              <div className={styles.listColumn}>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <motion.li variants={fadeIn} className={styles.listItem}>Successfully presented the project to international judges, industry experts, and mentors.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Demonstrated excellence in innovation, teamwork, and problem-solving throughout the competition.</motion.li>
                  </ul>
                </div>
              </div>
            </ProjectSectionColumns>
          </motion.div>
        </ProjectSectionContent>
      </ProjectSection>

      <ProjectSection>
        <ProjectSectionContent>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ProjectTextRow>
              <motion.div variants={fadeIn}>
                <ProjectSectionHeading>My Contributions</ProjectSectionHeading>
              </motion.div>
            </ProjectTextRow>
            <ProjectSectionColumns className={styles.achievementsColumns}>
              <div className={styles.listColumn}>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <motion.li variants={fadeIn} className={styles.listItem}>Led and supported the hardware setup and system integration required for the project.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Conducted extensive research and analysis to validate the problem, explore existing solutions, and improve project feasibility.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Assisted in preparing technical documentation and presentation materials for competition evaluations.</motion.li>
                  </ul>
                </div>
              </div>
              <div className={styles.listColumn}>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <motion.li variants={fadeIn} className={styles.listItem}>Contributed to the software development process, assisting with implementation, testing, and optimization of key features.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Collaborated with team members to refine technical components and enhance overall project performance.</motion.li>
                  </ul>
                </div>
              </div>
            </ProjectSectionColumns>
          </motion.div>
        </ProjectSectionContent>
      </ProjectSection>
      
      <ProjectSection>
        <ProjectSectionContent>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ProjectTextRow>
              <motion.div variants={fadeIn}>
                <ProjectSectionHeading>Skills Demonstrated</ProjectSectionHeading>
              </motion.div>
              <div className={styles.skillsContainer}>
                {skills.map(skill => (
                  <motion.div key={skill} variants={scaleIn} className={styles.skillTag}>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </ProjectTextRow>
          </motion.div>
        </ProjectSectionContent>
      </ProjectSection>
      
      <ProjectSection>
        <ProjectSectionContent className={styles.contentWrapper}>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Divider className={styles.divider} />
            
            <div className={styles.navigation}>
              <Button secondary iconHoverShift href="/" icon="arrow-left">
                Back to Home
              </Button>
            </div>
          </motion.div>
        </ProjectSectionContent>
      </ProjectSection>
    </ProjectContainer>
  );
}