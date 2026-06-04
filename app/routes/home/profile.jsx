import profileImgLarge from '~/assets/profile-large.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState, useCallback } from 'react';
import { Link as RouterLink } from '@remix-run/react';
import { Icon } from '~/components/icon';
import { media } from '~/utils/style';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId, expanded, onToggle }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="About Me" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I am Md. Nadim Shahriar Apurbo, a passionate tech enthusiast driven by innovation, creativity, and problem-solving. I enjoy exploring modern technologies and turning ideas into practical solutions that create real-world impact. With a strong curiosity for learning, I continuously strive to improve my skills and stay updated with the latest advancements in the tech industry.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      <strong>Passion for Web Development</strong><br />
      Web development is one of my greatest interests, as it allows me to combine creativity with technology to build meaningful digital experiences. I enjoy designing and developing responsive, user-friendly, and efficient web applications that solve problems and enhance user interaction. From front-end design to back-end functionality, I am passionate about creating modern web solutions that are both functional and visually engaging.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      <strong>Vision &amp; Goals</strong><br />
      I strongly believe that technology has the power to shape a smarter and better future.{' '}
      {!expanded && (
        <button
          className={styles.showMoreBtn}
          data-visible={visible}
          onClick={onToggle}
          aria-expanded={expanded}
        >
          Show more
        </button>
      )}
    </Text>
    <div className={styles.expandable} data-expanded={expanded}>
      <Text className={styles.descriptionExpanded} data-visible={visible} size="l" as="p">
        My goal is to continue learning, innovating, and contributing to impactful projects that make a difference. I am always eager to take on new challenges, collaborate with like-minded individuals, and grow both personally and professionally in the ever-evolving world of technology.{' '}
        {expanded && (
          <button
            className={styles.showMoreBtn}
            data-visible={visible}
            onClick={onToggle}
            aria-expanded={expanded}
          >
            Show less
          </button>
        )}
      </Text>
    </div>
  </Fragment>
);



export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const titleId = `${id}-title`;
  const handleToggle = useCallback(() => setExpanded(prev => !prev), []);

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} expanded={expanded} onToggle={handleToggle} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Portrait of Md. Nadim Shahriar Apurbo"
                />
              </div>
            </div>
            <div className={styles.stats} data-visible={visible}>
              <RouterLink to="/projects" className={styles.statCard}>
                 <div className={styles.statContent}>
                   <span className={styles.statNumber}>10+</span>
                   <span className={styles.statLabel}>Total Projects</span>
                 </div>
                 <Icon icon="chevron-right" className={styles.statIcon} />
              </RouterLink>
              <RouterLink to="/achievements" className={styles.statCard}>
                 <div className={styles.statContent}>
                   <span className={styles.statNumber}>5</span>
                   <span className={styles.statLabel}>National Awards</span>
                 </div>
                 <Icon icon="chevron-right" className={styles.statIcon} />
              </RouterLink>
              <RouterLink to="/achievements" className={styles.statCard}>
                 <div className={styles.statContent}>
                   <span className={styles.statNumber}>2</span>
                   <span className={styles.statLabel}>International Awards</span>
                 </div>
                 <Icon icon="chevron-right" className={styles.statIcon} />
              </RouterLink>
              <RouterLink to="/articles" className={styles.statCard}>
                 <div className={styles.statContent}>
                   <span className={styles.statNumber}>15+</span>
                   <span className={styles.statLabel}>Total Articles</span>
                 </div>
                 <Icon icon="chevron-right" className={styles.statIcon} />
              </RouterLink>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
