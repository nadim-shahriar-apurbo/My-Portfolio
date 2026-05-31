import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Section } from '~/components/section';
import { DecoderText } from '~/components/decoder-text';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment } from 'react';
import { cssProps } from '~/utils/style';
import styles from './resume.module.css';

const TimelineItem = ({ title, subtitle, description, visible, index }) => {
  return (
    <div 
      className={styles.timelineItem} 
      data-visible={visible}
      style={cssProps({ delay: `${index * 150}ms` })}
    >
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <Heading level={4} as="h4" className={styles.cardTitle}>{title}</Heading>
            <Text size="s" className={styles.cardSubtitle}>{subtitle}</Text>
          </div>
          <div className={styles.cardIcon}>
            <Icon icon="link" />
          </div>
        </div>
        {description && (
          <Fragment>
            <div className={styles.divider} />
            <Text size="s" className={styles.cardDescription} as="p">{description}</Text>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export const Resume = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.resume}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.container} ref={nodeRef}>
            <div className={styles.header}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Resume
                </div>
              </div>
              <Heading
                className={styles.sectionTitle}
                data-visible={visible}
                level={2}
                id={titleId}
              >
                <DecoderText text="Experience & Education" start={visible} delay={300} />
              </Heading>
            </div>

            <div className={styles.content}>
              <div className={styles.column}>
                <Heading className={styles.columnTitle} data-visible={visible} level={3}>
                  Education Qualification
                </Heading>
                <div className={styles.timeline}>
                  <TimelineItem
                    title="Bachelor"
                    subtitle="Upcoming..."
                    visible={visible}
                    index={0}
                  />
                  <TimelineItem
                    title="Higher Secondary Certificate (HSC - 2026)"
                    subtitle="Rajshahi Cantonment Public School & College (2024 - Present)"
                    visible={visible}
                    index={1}
                  />
                  <TimelineItem
                    title="Secondary School Certificate (SSC - 2024)"
                    subtitle="Nazipur Govt. Model High School (2019 - 2024)"
                    visible={visible}
                    index={2}
                  />
                  <TimelineItem
                    title="Primary Education Certificate (PEC - 2018)"
                    subtitle="Al Hera Islami Academy (2014 - 2018)"
                    visible={visible}
                    index={3}
                  />
                </div>
              </div>

              <div className={styles.column}>
                <Heading className={styles.columnTitle} data-visible={visible} level={3}>
                  Experience
                </Heading>
                <div className={styles.timeline}>
                  <TimelineItem
                    title="Arionys Ltd."
                    subtitle="Co-Founder & CEO (Nov 2025 - Present)"
                    description="Arionys Ltd. is a Bangladesh-based tech company offering software, AI, and digital solutions for businesses."
                    visible={visible}
                    index={4}
                  />
                  <TimelineItem
                    title="RoboSuperior"
                    subtitle="Founder (Jan 2023 - Present)"
                    description="Team RoboSuperior is a robotics team that is dedicated to creating socially intelligent machines that enrich the quality of our lives and educationally enriching the students."
                    visible={visible}
                    index={4}
                  />
                  {/* <TimelineItem
                    title="Offcoded"
                    subtitle="CTO (2025 - Present)"
                    description="Offcoded.com is a platform that builds intelligent technologies to solve real-world problems. Focused on AI, robotics, and software innovation, it empowers creators and developers to turn complex ideas into practical, impactful solutions."
                    visible={visible}
                    index={5}
                  /> */}
                  <TimelineItem
                    title="Team EXO MAX | NASA Conrad Challenge"
                    subtitle="Founder (June 2023 - June 2024)"
                    description="Team Exo Max competed in the NASA Conrad Challenge, creating accident prevention technology to improve safety and sustainability. Their innovation inspired future explorers."
                    visible={visible}
                    index={6}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
