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
import styles from './robotronics-fest-2025.module.css';

import achievementPlaceholder from '~/assets/robotronics.JPG';
import achievementImage from '~/assets/robotronics.JPG';
import achievementImageLarge from '~/assets/robotronics.JPG';
import achievementBg from '~/assets/roadlinkbg.webp';

const title = 'Road Link | Winner, Robotronics Fest 2025 – University of Dhaka';
const description = 'Presented Road Link at Robotronics Fest 2025, organized by the Department of Robotics and Mechatronics Engineering at the University of Dhaka, winning 1st Place (Winner).';
const year = '2025';
const category = 'Competition';

const skills = [
  'Hardware Integration',
  'Embedded Systems',
  'Software Development',
  'Research & Analysis',
  'System Design',
  'Prototyping',
  'Innovation',
  'Technical Presentation',
  'Problem Solving',
  'Project Development',
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

export default function RobotronicsFest2025() {
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
              alt="Road Link Robotronics Fest 2025 Winner"
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
                Presented <Link href="/projects/roadlink">Road Link</Link> at <strong>Robotronics Fest 2025</strong>, organized by the Department of Robotics and Mechatronics Engineering at the <strong>University of Dhaka</strong>. Road Link is an innovation-driven project focused on addressing transportation and road-related challenges through technology, engineering, and intelligent system design. Competing against talented teams from institutions across the country, the project was recognized for its technical excellence, practical implementation, and real-world impact, earning the title of <strong>Winner</strong>.
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
                    <motion.li variants={fadeIn} className={styles.listItem}>Secured <strong>Winner</strong> position at Robotronics Fest 2025.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Successfully showcased Road Link in the Project Showcase segment.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Demonstrated an innovative solution with strong real-world applicability and scalability.</motion.li>
                  </ul>
                </div>
              </div>
              <div className={styles.listColumn}>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <motion.li variants={fadeIn} className={styles.listItem}>Presented the project before judges, academics, industry professionals, and technology enthusiasts.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Earned recognition for innovation, engineering design, technical implementation, and problem-solving.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Competed among participants from numerous schools, colleges, and universities across Bangladesh.</motion.li>
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
                    <motion.li variants={fadeIn} className={styles.listItem}>Conducted research and analysis to identify transportation challenges and potential technological solutions.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Led hardware setup, integration, and system testing for the project.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Contributed to software development, functionality enhancement, and system optimization.</motion.li>
                  </ul>
                </div>
              </div>
              <div className={styles.listColumn}>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <motion.li variants={fadeIn} className={styles.listItem}>Assisted in project design, prototyping, and technical problem-solving.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Prepared technical documentation, demonstrations, and presentation materials.</motion.li>
                    <motion.li variants={fadeIn} className={styles.listItem}>Presented the project and communicated its impact, functionality, and future potential to judges and visitors.</motion.li>
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
