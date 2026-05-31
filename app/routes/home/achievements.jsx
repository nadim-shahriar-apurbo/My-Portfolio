import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { DecoderText } from '~/components/decoder-text';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { AchievementSummary } from './achievement-summary';
import styles from './achievements.module.css';
import { achievementsData } from '~/data/achievements';
import homeStyles from './home.module.css';

export const Achievements = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.achievements}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
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
                  Achievements
                </div>
              </div>
              <Heading
                className={styles.sectionTitle}
                data-visible={visible}
                level={2}
                id={titleId}
              >
                <DecoderText text="Milestones & Recognition" start={visible} delay={300} />
              </Heading>
              <Text className={styles.sectionDescription} data-visible={visible} size="l" as="p">
                Key accomplishments and milestones throughout my career journey
              </Text>
            </div>
            <div className={styles.achievementsList}>
              {achievementsData.filter(a => a.highlighted).map((achievement, index) => (
                <AchievementSummary
                  key={`${achievement.title}-${index}`}
                  id={`${id}-${index + 1}`}
                  sectionRef={null}
                  visible={visible}
                  index={index + 1}
                  title={achievement.title}
                  description={achievement.description}
                  year={achievement.year}
                  category={achievement.category}
                  image={achievement.image}
                  buttonText={achievement.buttonText}
                  buttonLink={achievement.buttonLink}
                  alternate={index % 2 === 1}
                />
              ))}
            </div>
            <div className={homeStyles.seeMoreContainer} data-visible={visible}>
              <Button href="/achievements" iconHoverShift iconEnd="arrow-right">
                See More Achievements
              </Button>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
