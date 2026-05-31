import roadlinkBackground from '~/assets/roadlinkbg.webp';
import roadlinkMain from '~/assets/roadlinkmain.jpg';
import roadlinkSecond from '~/assets/roadlinksecond.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './roadlink.module.css';

const title = 'Road Link — Road Safety & Driver Assistance System';
const description =
  'Road Link is an intelligent road safety ecosystem designed to reduce traffic accidents and improve driver awareness through real-time monitoring, predictive alerts, and advanced driver assistance technologies.';
const roles = [
  'Artificial Intelligence (AI)',
  'Computer Vision',
  'IoT & Embedded Systems',
  'Mobile Application Development',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const RoadLink = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.roadlink}>
        <ProjectBackground
          src={roadlinkBackground}
          srcSet={`${roadlinkBackground} 1280w`}
          width={1280}
          height={800}
          placeholder={roadlinkBackground}
          opacity={0.75}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />

        {/* Hero — Dashboard Overview */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <div className={styles.framedContainer}>
              <ProjectImage
                srcSet={`${roadlinkMain} 800w`}
                width={800}
                height={500}
                placeholder={roadlinkMain}
                alt="The Road Link system displaying driver assistance and real-time monitoring."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                className={styles.framedImage}
              />
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* The Problem & Solution */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The Problem</ProjectSectionHeading>
              <ProjectSectionText>
                Road accidents remain one of the world's leading causes of death and economic loss. Key contributing factors include driver drowsiness and fatigue, distracted driving and phone usage, over-speeding, intoxicated driving, poor visibility conditions, lack of awareness of nearby obstacles, and delayed emergency response after accidents.
              </ProjectSectionText>
              <ProjectSectionText>
                These issues result in loss of life, economic damage, environmental impact, and significant energy waste.
              </ProjectSectionText>
            </ProjectTextRow>
            
            <ProjectTextRow>
              <ProjectSectionHeading>Solution</ProjectSectionHeading>
              <ProjectSectionText>
                Road Link combines AI-powered monitoring, smart sensors, computer vision, and mobile connectivity to create a proactive vehicle safety system. Instead of reacting after an accident occurs, the platform continuously analyzes driver behavior and surrounding road conditions to identify risks and prevent incidents before they happen.
              </ProjectSectionText>
              <ProjectSectionText>
                The system can be installed in virtually any vehicle, making advanced safety technology accessible to millions of drivers who do not have access to expensive ADAS-equipped vehicles.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Technical Architecture */}
        <ProjectSection light>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.textBlock}>
              <ProjectSectionHeading>Technical Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                The hardware ecosystem integrates a camera-based monitoring system, radar sensors for obstacle detection, tachometer integration, accident detection modules, a central processing unit, driver alert vibration systems, and a vehicle display interface.
              </ProjectSectionText>
              <ProjectSectionText>
                The software layer processes sensor data in real time, generates intelligent alerts, records behavioral analytics, and synchronizes information with the Road Link mobile application.
              </ProjectSectionText>
            </div>
            <div className={styles.analyticsContainer}>
              <Image
                className={styles.analyticsImage}
                srcSet={`${roadlinkSecond} 800w`}
                width={800}
                height={600}
                placeholder={roadlinkSecond}
                alt="Road Link's mobile application ecosystem and tracking interface."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 55vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* Key Features */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText>
                A comprehensive approach to driver and vehicle safety.
              </ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>Driver Safety &amp; Monitoring</h3>
                  <p className={styles.featureText}>
                    Continuous monitoring of driver state through advanced drowsiness and fatigue detection algorithms. The system evaluates driver fitness, detects potential intoxication, prevents device distraction, and delivers critical voice-assisted notifications.
                  </p>
                </div>
              </div>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>Environmental &amp; Vehicle Awareness</h3>
                  <p className={styles.featureText}>
                    Proactive assistance in challenging conditions, featuring real-time overspeed monitoring, low-visibility enhancement, adaptive beam light control, and robust obstacle detection to preemptively identify collision risks.
                  </p>
                </div>
              </div>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>Access Control &amp; Security</h3>
                  <p className={styles.featureText}>
                    Comprehensive vehicle protection utilizing Unique Driver Identification (UID) protocols, integrated mobile application control, and precise real-time telematics for continuous location tracking and monitoring.
                  </p>
                </div>
              </div>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>Analytics &amp; Mobile Ecosystem</h3>
                  <p className={styles.featureText}>
                    A comprehensive digital ecosystem providing detailed driver behavior analytics, historical performance tracking, and actionable safety recommendations to foster continuous improvement and safer driving habits.
                  </p>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Outcomes */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Innovation & Business Impact</ProjectSectionHeading>
              <ProjectSectionText>
                Road Link stands out because it delivers advanced driver assistance functionality at a significantly lower cost compared to traditional ADAS systems. Key differentiators include universal compatibility, plug-and-play installation, and real-time data-driven driver insights without requiring vehicle redesign.
              </ProjectSectionText>
              <ProjectSectionText>
                Targeting developing countries, fleet operators, and insurance companies, the project demonstrates how intelligent transportation technology can save lives, reduce accident-related costs, and accelerate the adoption of smart mobility solutions globally.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
