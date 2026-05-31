import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { DecoderText } from '~/components/decoder-text';
import { ProjectSummary } from '~/routes/home/project-summary';
import { projectsData } from '~/data/projects';
import { useEffect, useRef, useState } from 'react';
import styles from './projects.module.css';

export function Projects() {
  const [visibleSections, setVisibleSections] = useState([]);
  const projectRefs = useRef([]);

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

    projectRefs.current.forEach(section => {
      if (section) {
        sectionObserver.observe(section);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <article className={styles.projects}>
      <Section className={styles.content}>
        <header className={styles.header}>
          <Heading className={styles.heading} level={5} as="h1">
            <DecoderText text="All Projects" />
          </Heading>
        </header>
        <div className={styles.list}>
          {projectsData.map((project, index) => (
            <ProjectSummary
              key={project.id}
              id={project.id}
              sectionRef={el => {
                if (el) projectRefs.current[index] = el;
              }}
              visible={visibleSections.includes(projectRefs.current[index])}
              index={index + 1}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              buttonLink={project.buttonLink}
              model={project.model}
              alternate={index % 2 === 1}
            />
          ))}
        </div>
      </Section>
      <Footer />
    </article>
  );
}
