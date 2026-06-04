import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Divider } from '~/components/divider';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { Resume } from './resume';
import { Skills } from './skills';
import { Achievements } from './achievements';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import { projectsData } from '~/data/projects';

// Prefetch draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: `${import.meta.env.BASE_URL}draco/draco_wasm_wrapper.js`,
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: `${import.meta.env.BASE_URL}draco/draco_decoder.wasm`,
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Tech Enthusiast',
    description: `Portfolio of ${config.name} — a tech enthusiast and developer specializing in web development, robotics, AI, and UAV technology.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const details = useRef();
  const achievements = useRef();
  const resume = useRef();
  const skills = useRef();
  const projectsHeader = useRef();
  const projectRefs = useRef([]);

  useEffect(() => {
    const sections = [
      intro,
      details,
      projectsHeader,
      ...projectRefs.current.map(ref => ({ current: ref })),
      achievements,
      resume,
      skills
    ];

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

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Resume
        sectionRef={resume}
        visible={visibleSections.includes(resume.current)}
        id="resume"
      />
      <Skills
        sectionRef={skills}
        visible={visibleSections.includes(skills.current)}
        id="skills"
      />
      <div className={styles.projectsHeader} ref={projectsHeader}>
        <div className={styles.tag} aria-hidden>
          <Divider
            notchWidth="64px"
            notchHeight="8px"
            collapsed={!visibleSections.includes(projectsHeader.current)}
            collapseDelay={1000}
          />
          <div className={styles.tagText} data-visible={visibleSections.includes(projectsHeader.current)}>
            Projects
          </div>
        </div>
        <Heading
          className={styles.sectionTitle}
          data-visible={visibleSections.includes(projectsHeader.current)}
          level={2}
        >
          <DecoderText
            text="Featured Work"
            start={visibleSections.includes(projectsHeader.current)}
            delay={300}
          />
        </Heading>
      </div>
      {projectsData.filter(p => p.highlighted).map((project, index) => (
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
      <div className={styles.seeMoreContainer} data-visible={visibleSections.includes(projectRefs.current[projectRefs.current.length - 1]) || true}>
        <Button href="/projects" iconHoverShift iconEnd="arrow-right">
          See More Projects
        </Button>
      </div>
      <Achievements
        sectionRef={achievements}
        visible={visibleSections.includes(achievements.current)}
        id="achievements"
      />
      <Footer />
    </div>
  );
};
