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
import styles from './aiub-cs-fest-junior.module.css';

import achievementPlaceholder from '~/assets/aiubcsfest.png';
import achievementImage from '~/assets/aiubcsfest.png';
import achievementImageLarge from '~/assets/aiubcsfest.png';
import achievementBg from '~/assets/biolimbbg.jpg';

const title = 'BioLimb | AIUB CS Fest Project Showcase - Junior';
const description = 'Presented BioLimb at the AIUB CS Fest Project Showcase, winning Junior Runner-Up (2nd Place).';
const year = '2024';
const category = 'Competition';

const skills = [
  'Research & Analysis',
  'Hardware Integration',
  'Embedded Systems',
  'Software Development',
  'Assistive Technology',
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

export default function AiubCsFestJunior() {
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
              alt="BioLimb Project Showcase Junior Runner-Up"
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
                Presented <strong>BioLimb</strong> at the AIUB CS Fest Project Showcase, competing in the Junior Category. BioLimb was developed as an innovative assistive technology project aimed at enhancing accessibility and improving quality of life through engineering and technology. The project combined research, hardware development, and software integration to create a practical solution with meaningful real-world impact, earning the title of <strong>Junior Runner-Up</strong>.
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
                    <motion.li variants={fadeIn} className={styles.listItem}>Junior Runner-Up, AIUB CS Fest Project Showcase.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Successfully demonstrated an innovative assistive technology solution.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Showcased the project to university faculty, industry professionals, and technology enthusiasts.</motion.li>
                  </ul>
                </div>
              </div>
              <div className={styles.listColumn}>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <motion.li variants={fadeIn} className={styles.listItem}>Received recognition for technical innovation, creativity, and potential social impact.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Competed against numerous projects in the Junior Category and secured a top position.</motion.li>
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
                    <motion.li variants={fadeIn} className={styles.listItem}>Conducted research to understand user needs and existing assistive technology solutions.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Contributed to the design and development of the BioLimb system.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Assisted with hardware integration, testing, and system optimization.</motion.li>
                  </ul>
                </div>
              </div>
              <div className={styles.listColumn}>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <motion.li variants={fadeIn} className={styles.listItem}>Participated in software implementation and functionality improvements.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Prepared technical documentation, demonstrations, and presentation materials.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Collaborated with team members to refine the project and enhance its overall effectiveness.</motion.li>
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
