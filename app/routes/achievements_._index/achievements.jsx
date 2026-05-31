import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { DecoderText } from '~/components/decoder-text';
import { AchievementSummary } from '~/routes/home/achievement-summary';
import { achievementsData } from '~/data/achievements';
import { useEffect, useRef, useState } from 'react';
import styles from './achievements.module.css';

export function AchievementsRoute() {
  const [visibleSections, setVisibleSections] = useState([]);
  const achievementRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    achievementRefs.current.forEach(section => {
      if (section) {
        sectionObserver.observe(section);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <article className={styles.achievements}>
      <Section className={styles.content}>
        <header className={styles.header}>
          <Heading className={styles.heading} level={5} as="h1">
            <DecoderText text="All Achievements" />
          </Heading>
        </header>
        <div className={styles.list}>
          {achievementsData.map((achievement, index) => (
            <AchievementSummary
              key={`${achievement.title}-${index}`}
              id={`achievement-${index + 1}`}
              sectionRef={el => {
                if (el) achievementRefs.current[index] = el;
              }}
              visible={visibleSections.includes(achievementRefs.current[index])}
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
      </Section>
      <Footer />
    </article>
  );
}
