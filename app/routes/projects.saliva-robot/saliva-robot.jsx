import biolimbBackground from '~/assets/biolimbbg.jpg';
import biolimbMain from '~/assets/biolimb.png';
import biolimbSecond from '~/assets/biolombsecond.jpg';
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
import styles from './saliva-robot.module.css';

const title = 'Saliva Bio Medical Robot — Autonomous Saliva Collection System';
const description =
  'An autonomous healthcare device designed to safely collect saliva samples for infectious disease testing while minimizing human contact and reducing the risk of disease transmission.';
const roles = [
  'Artificial Intelligence (AI)',
  'Robotics Engineering',
  'Biomedical Device Design',
  'Computer Vision',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SalivaRobot = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.salivaRobot}>
        <ProjectBackground
          src={biolimbBackground}
          srcSet={`${biolimbBackground} 1280w`}
          width={1280}
          height={800}
          placeholder={biolimbBackground}
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
                srcSet={`${biolimbMain} 800w`}
                width={800}
                height={500}
                placeholder={biolimbMain}
                alt="The Saliva Bio Medical Robot system."
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
                Saliva-based testing plays an important role in diagnosing infectious diseases. However, traditional sample collection methods present several challenges: risk of infection for healthcare workers, direct human-to-human contact, inconsistent collection techniques, and patient discomfort.
              </ProjectSectionText>
              <ProjectSectionText>
                Furthermore, mass screening programs are limited by operational costs, scalability, and difficulties in remote or unattended testing environments. These limitations became particularly evident during global pandemics.
              </ProjectSectionText>
            </ProjectTextRow>
            
            <ProjectTextRow>
              <ProjectSectionHeading>Solution</ProjectSectionHeading>
              <ProjectSectionText>
                The Saliva Bio Medical Robot introduces a fully autonomous workflow that reduces physical interaction between healthcare professionals and patients. Using AI-powered human detection, facial recognition, biometric verification, robotic sample collection, and automated sterilization, the system ensures a safe, standardized, and contact-minimized testing experience.
              </ProjectSectionText>
              <ProjectSectionText>
                The device enables rapid, reliable, and hygienic saliva collection while improving testing accessibility across hospitals, diagnostic centers, research facilities, and remote environments.
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
                The hardware ecosystem consists of an AI processing unit, computer vision camera, robotic collection arm, pulse/oximeter sensors, LCD display interface, and an automated pump/sanitization sprayer system.
              </ProjectSectionText>
              <ProjectSectionText>
                The software layer manages machine learning models, face detection algorithms, health monitoring logic, robotic motion control, and the sample collection management system to provide a seamless workflow.
              </ProjectSectionText>
            </div>
            <div className={styles.analyticsContainer}>
              <Image
                className={styles.analyticsImage}
                srcSet={`${biolimbSecond} 800w`}
                width={800}
                height={600}
                placeholder={biolimbSecond}
                alt="Second view of the Saliva Bio Medical Robot."
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
                A comprehensive approach to autonomous medical sample collection.
              </ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>AI-Powered Detection</h3>
                  <p className={styles.featureText}>
                    Automatically detects patient presence and initiates the collection workflow without manual intervention, significantly enhancing usability and automation.
                  </p>
                </div>
              </div>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>Face &amp; Mask Recognition</h3>
                  <p className={styles.featureText}>
                    Computer vision system verifies user positioning, detects facial alignment and mask status, and ensures collection readiness before sample acquisition.
                  </p>
                </div>
              </div>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>Biometric Health Screening</h3>
                  <p className={styles.featureText}>
                    Monitors pulse rate and oxygen saturation to perform a basic patient health assessment before sample collection begins.
                  </p>
                </div>
              </div>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>Robotic Saliva Collection</h3>
                  <p className={styles.featureText}>
                    An automated robotic arm guides the mouth-opening process, safely collects the sample using sterile cotton swabs, and securely transfers it for laboratory analysis.
                  </p>
                </div>
              </div>
              <div className={styles.featureCardWrap}>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>Self-Sanitization System</h3>
                  <p className={styles.featureText}>
                    Automatic sterilization occurs after every use to reduce contamination risks and strictly maintain patient safety and hygiene standards.
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
                The uniqueness of this project lies in the integration of autonomous robotic sample collection, AI-driven patient interaction, and contact-minimized healthcare delivery. Unlike conventional methods, the system enables safer, faster, and more standardized sample acquisition while reducing workload on healthcare professionals.
              </ProjectSectionText>
              <ProjectSectionText>
                By automating one of the most critical stages of disease detection, the project demonstrates how robotics and artificial intelligence can transform healthcare diagnostics, contributing to stronger public health infrastructure and better preparedness for future challenges.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
