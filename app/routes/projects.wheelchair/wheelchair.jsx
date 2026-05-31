import wheelchairBackground from '~/assets/wheelchairbg.avif';
import wheelchairMain from '~/assets/wheelchairmain.png';
import wheelchairSecond from '~/assets/diagram-image-672x422.png';
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
import styles from './wheelchair.module.css';

const title = 'Smart ML-Powered Wheelchair — Multi-Modal Assistive Mobility System';
const description =
  'An intelligent assistive mobility solution designed to empower individuals with physical disabilities by integrating machine learning-based gesture recognition, gyroscope-based motion control, and remote-control operation.';
const roles = [
  'Artificial Intelligence (AI)',
  'Embedded Systems',
  'Robotics & Automation',
  'Human-Computer Interaction',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Wheelchair = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.wheelchair}>
        <ProjectBackground
          src={wheelchairBackground}
          srcSet={`${wheelchairBackground} 1280w`}
          width={1280}
          height={800}
          placeholder={wheelchairBackground}
          opacity={0.75}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />

        {/* Hero — Main Image */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <div className={styles.framedContainer}>
              <ProjectImage
                srcSet={`${wheelchairMain} 800w`}
                width={800}
                height={500}
                placeholder={wheelchairMain}
                alt="The Smart ML-Powered Wheelchair system."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                className={styles.framedImage}
              />
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Problem & Solution */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Problem Statement</ProjectSectionHeading>
              <ProjectSectionText>
                Millions of individuals worldwide rely on wheelchairs for daily mobility. However, conventional wheelchairs present challenges for users who have limited hand/arm movement, experience paralysis, or require navigation assistance.
              </ProjectSectionText>
              <ProjectSectionText>
                These limitations can reduce independence, restrict social participation, and negatively impact quality of life. Existing solutions are often expensive, difficult to customize, or designed for only a specific category of users.
              </ProjectSectionText>
            </ProjectTextRow>
            
            <ProjectTextRow>
              <ProjectSectionHeading>Solution</ProjectSectionHeading>
              <ProjectSectionText>
                The Smart AI-Powered Wheelchair introduces a multi-modal control system that allows users to choose the most comfortable and accessible control method based on their abilities.
              </ProjectSectionText>
              <ProjectSectionText>
                Through machine learning-powered gesture recognition, gyroscope-based tilt navigation, and wireless remote control functionality, users can safely and independently navigate their surroundings with built-in obstacle detection.
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
                The wheelchair integrates computer vision for hand tracking, embedded control systems (Arduino / UNIHIKER Pi), gyroscope sensors for tilt detection, and ultrasonic sensors for obstacle avoidance.
              </ProjectSectionText>
              <ProjectSectionText>
                Machine learning algorithms interpret these diverse sensor inputs, converting them into precise motor control commands while ensuring user safety through intelligent movement optimization and emergency stop mechanisms.
              </ProjectSectionText>
            </div>
            <div className={styles.analyticsContainer}>
              <Image
                className={styles.analyticsImage}
                srcSet={`${wheelchairSecond} 800w`}
                width={800}
                height={600}
                placeholder={wheelchairSecond}
                alt="System diagram and components."
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
                A flexible and safe assistive mobility platform.
              </ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>AI-Based Gesture Recognition</h3>
                  <p className={styles.featureText}>
                    Real-time touchless wheelchair control using machine learning to detect and adapt to different users' hand gestures.
                  </p>
                </div>
              </div>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>Gyroscope-Controlled Navigation</h3>
                  <p className={styles.featureText}>
                    Intuitive directional control requiring minimal physical effort, perfect for users with limited finger mobility using wrist or hand tilts.
                  </p>
                </div>
              </div>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>Wireless Remote Control</h3>
                  <p className={styles.featureText}>
                    A simple and accessible interface featuring large tactile buttons for forward, backward, left, right, and stop functions.
                  </p>
                </div>
              </div>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>Smart Obstacle Detection</h3>
                  <p className={styles.featureText}>
                    Real-time obstacle monitoring using ultrasonic sensors to preemptively prevent collisions and enhance user safety.
                  </p>
                </div>
              </div>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>Emergency Safety System</h3>
                  <p className={styles.featureText}>
                    A dedicated emergency stop button capable of immediately halting motion, accessible from both the wheelchair and the remote control.
                  </p>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Impact & Vision */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Innovation &amp; Impact</ProjectSectionHeading>
              <ProjectSectionText>
                The uniqueness of this project lies in its multi-modal accessibility. Unlike traditional smart wheelchairs that rely on a single control mechanism, this solution allows users with varying levels of mobility to choose the method that best matches their physical capabilities.
              </ProjectSectionText>
              <ProjectSectionText>
                By enhancing independence and removing physical barriers, this project demonstrates how artificial intelligence and human-centered design can fundamentally transform mobility assistance and elevate the quality of life for people with disabilities.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
