import { motion } from 'framer-motion';
import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import { Link } from '~/components/link';
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
import styles from './isif-2024.module.css';

import achievementPlaceholder from '~/assets/isif.JPG';
import achievementImage from '~/assets/isif.JPG';
import achievementImageLarge from '~/assets/isif.JPG';
import achievementBg from '~/assets/biolimbbg.jpg';

const title = 'BioLimb | Runner-Up, International Skill Innovation Fest (ISIF) 2024';
const description = 'Presented BioLimb at the International Skill Innovation Fest (ISIF) 2024, hosted by IUT, winning Runner-Up.';
const year = '2024';
const category = 'Competition';

const skills = [
  'Assistive Technology',
  'Hardware Integration',
  'Embedded Systems',
  'Software Development',
  'Research & Analysis',
  'Prototyping',
  'Innovation',
  'Technical Presentation',
  'Problem Solving',
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

export default function Isif2024() {
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
              alt="BioLimb Project ISIF 2024 Runner-Up"
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
                Presented <Link href="/projects/saliva-robot">BioLimb</Link> at the International Skill Innovation Fest (ISIF) 2024, hosted by the Islamic University of Technology (IUT). BioLimb is an innovative assistive technology project designed to improve accessibility and enhance the quality of life for individuals requiring advanced mobility and support solutions. The project combined research, engineering, hardware integration, and software development to create a practical and impactful solution, earning the <strong>Runner-Up</strong> position.
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
                    <motion.li variants={fadeIn} className={styles.listItem}>Secured <strong>Runner-Up</strong> position at ISIF 2024.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Successfully showcased BioLimb on an international innovation platform.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Demonstrated a technology-driven solution with significant social impact potential.</motion.li>
                  </ul>
                </div>
              </div>
              <div className={styles.listColumn}>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <motion.li variants={fadeIn} className={styles.listItem}>Presented the project to judges, academics, industry professionals, and fellow innovators.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Earned recognition for innovation, technical implementation, and real-world applicability.</motion.li>
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
                    <motion.li variants={fadeIn} className={styles.listItem}>Conducted extensive research on assistive technologies, user needs, and existing solutions.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Contributed to the design and development of the BioLimb system.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Assisted with hardware integration, testing, and performance optimization.</motion.li>
                  </ul>
                </div>
              </div>
              <div className={styles.listColumn}>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <motion.li variants={fadeIn} className={styles.listItem}>Participated in software development and system functionality improvements.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Prepared technical documentation, demonstrations, and presentation materials.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Collaborated with team members to refine the project and improve its effectiveness and usability.</motion.li>
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
