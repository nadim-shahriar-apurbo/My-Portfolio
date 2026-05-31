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
import styles from './khude-biggyani-2022.module.css';

import achievementPlaceholder from '~/assets/khude biggani.png';
import achievementImage from '~/assets/khude biggani.png';
import achievementImageLarge from '~/assets/khude biggani.png';
import achievementBg from '~/assets/khude biggani bg.webp';

const title = 'Khude Biggyani Award 2022';
const description = 'Recognized as a participant and award recipient in the SMC MoniMix Plus Khude Biggyani Award 2022, organized by Deepto TV.';
const year = '2022';
const category = 'Competition';

const skills = [
  'Scientific Research',
  'Innovation',
  'Engineering Design',
  'Hardware Development',
  'Problem Solving',
  'Critical Thinking',
  'Technical Presentation',
  'Project Development',
  'Creativity',
  'Team Collaboration'
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

export default function KhudeBiggyani2022() {
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
              alt="Khude Biggyani Award 2022"
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
              <ProjectSectionHeading>Achievement Overview</ProjectSectionHeading>
              <ProjectSectionText>
                Recognized as a participant and award recipient in the <strong>SMC MoniMix Plus Khude Biggyani Award 2022</strong>, organized by <strong>Deepto TV</strong> in collaboration with SMC. The competition was created to encourage young innovators and science enthusiasts across Bangladesh to develop creative, technology-driven solutions addressing real-world challenges. The event brought together hundreds of student innovators from different regions of the country, providing a national platform to showcase scientific creativity, engineering skills, and innovation.
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
                    <motion.li variants={fadeIn} className={styles.listItem}>Recognized at the <strong>Khude Biggyani Award 2022</strong>, a nationwide science and innovation competition.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Showcased an innovative science and technology project before a distinguished jury panel.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Competed among hundreds of young innovators from schools and institutions across Bangladesh.</motion.li>
                  </ul>
                </div>
              </div>
              <div className={styles.listColumn}>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <motion.li variants={fadeIn} className={styles.listItem}>Demonstrated strong problem-solving, research, and engineering capabilities.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Received recognition for creativity, innovation, and practical application of technology.</motion.li>
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
                    <motion.li variants={fadeIn} className={styles.listItem}>Conducted research and analysis to identify real-world challenges and develop innovative solutions.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Designed and developed technical components of the project.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Participated in hardware setup, testing, and project optimization.</motion.li>
                  </ul>
                </div>
              </div>
              <div className={styles.listColumn}>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <motion.li variants={fadeIn} className={styles.listItem}>Assisted in software implementation and functionality improvement.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Prepared project documentation, demonstrations, and presentation materials.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Presented the project and communicated its impact and technical approach to judges and audiences.</motion.li>
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
