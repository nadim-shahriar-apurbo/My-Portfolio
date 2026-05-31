import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { DecoderText } from '~/components/decoder-text';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { cssProps } from '~/utils/style';
import styles from './skills.module.css';

const techSkills = [
  {
    name: 'Web Development',
    percentage: 90,
    icon: (
      <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="none">
        <circle cx="230" cy="230" r="150" stroke="currentColor" strokeWidth="18"/>
        <path d="M230 80 C170 120 170 340 230 380" stroke="currentColor" strokeWidth="18" strokeLinecap="round"/>
        <path d="M230 80 C290 120 290 340 230 380" stroke="currentColor" strokeWidth="18" strokeLinecap="round"/>
        <line x1="80" y1="230" x2="380" y2="230" stroke="currentColor" strokeWidth="18" strokeLinecap="round"/>
        <path d="M120 150 C180 190 280 190 340 150" stroke="currentColor" strokeWidth="18" strokeLinecap="round"/>
        <path d="M120 310 C180 270 280 270 340 310" stroke="currentColor" strokeWidth="18" strokeLinecap="round"/>
        <line x1="230" y1="80" x2="230" y2="380" stroke="currentColor" strokeWidth="18" strokeLinecap="round"/>
        <path d="M320 270 L420 305 L385 330 L425 380 L395 405 L355 355 L330 390 Z" fill="var(--background)" stroke="currentColor" strokeWidth="18" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Arduino',
    percentage: 85,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
        <linearGradient id="arduino-grad" x1="21.175" x2="25.872" y1="10.027" y2="33.258" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00b3ba"></stop>
          <stop offset=".998" stopColor="#00979c"></stop>
        </linearGradient>
        <path fill="url(#arduino-grad)" d="M36,36c-5.018,0-9.425-3.859-12-7.714C21.425,32.141,17.018,36,12,36C5.383,36,0,30.617,0,24 s5.383-12,12-12c5.935,0,9.884,4.448,12,7.755C26.116,16.448,30.065,12,36,12c6.617,0,12,5.383,12,12S42.617,36,36,36z M26.181,24.037C27.828,27.614,32,32,36,32c4.411,0,8-3.589,8-8s-3.589-8-8-8C30.584,16,27.199,21.954,26.181,24.037z M12,16 c-4.411,0-8,3.589-8,8s3.589,8,8,8c4.017,0,8.206-4.422,9.823-7.963C20.837,22.018,17.445,16,12,16z M16,24.5v-1 c0-0.276-0.224-0.5-0.5-0.5h-7C8.224,23,8,23.224,8,23.5v1C8,24.776,8.224,25,8.5,25h7C15.776,25,16,24.776,16,24.5z M39.5,23H37 v-2.5c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276,0-0.5,0.224-0.5,0.5V23h-2.5c-0.276,0-0.5,0.224-0.5,0.5v1c0,0.276,0.224,0.5,0.5,0.5H35 v2.5c0,0.276,0.224,0.5,0.5,0.5h1c0.276,0,0.5-0.224,0.5-0.5V25h2.5c0.276,0,0.5-0.224,0.5-0.5v-1C40,23.224,39.776,23,39.5,23z"></path>
      </svg>
    ),
  },
  {
    name: 'C',
    percentage: 80,
    icon: (
      <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C084FC"/>
            <stop offset="100%" stopColor="#7C3AED"/>
          </linearGradient>

          <linearGradient id="gradBottom" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4C1D95"/>
            <stop offset="100%" stopColor="#2E026D"/>
          </linearGradient>
        </defs>
        <polygon points="256,40 430,140 430,372 256,472 82,372 82,140" fill="url(#gradTop)"/>
        <polygon points="82,372 256,472 430,372 256,256" fill="url(#gradBottom)"/>
        <path d="M256 110 A146 146 0 1 0 256 402 L256 330 A74 74 0 1 1 256 182 Z" fill="white"/>
        <path d="M256 182 A74 74 0 0 0 256 330 L360 256 Z" fill="#7C3AED" opacity="0.7"/>
        <g fill="white">
          <rect x="330" y="200" width="12" height="90" rx="3"/>
          <rect x="365" y="200" width="12" height="90" rx="3"/>
          <rect x="310" y="220" width="90" height="12" rx="3"/>
          <rect x="300" y="255" width="90" height="12" rx="3"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Python',
    percentage: 75,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
        <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path>
        <path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
      </svg>
    ),
  },
  {
    name: 'AI and ML',
    percentage: 80,
    icon: (
      <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path d="M256 90 C270 130 286 146 326 160 C286 174 270 190 256 230 C242 190 226 174 186 160 C226 146 242 130 256 90Z" fill="currentColor"/>
        <path d="M370 120 C378 142 388 152 410 160 C388 168 378 178 370 200 C362 178 352 168 330 160 C352 152 362 142 370 120Z" fill="currentColor"/>
        <path d="M405 205 C417 235 430 248 460 260 C430 272 417 285 405 315 C393 285 380 272 350 260 C380 248 393 235 405 205Z" fill="currentColor"/>
        <path d="M140 420 L210 250 H270 L340 420 H285 L268 375 H210 L193 420 Z M225 330 H253 L239 292 Z" fill="currentColor"/>
        <rect x="360" y="250" width="40" height="170" rx="6" fill="currentColor"/>
      </svg>
    ),
  },
];

const profSkills = [
  { name: 'Creativity', percentage: 80 },
  { name: 'Communication', percentage: 90 },
  { name: 'Problem Solving', percentage: 95 },
  { name: 'Team Work', percentage: 85 },
];

export const Skills = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.skills}
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
                  Skills
                </div>
              </div>
              <Heading
                className={styles.sectionTitle}
                data-visible={visible}
                level={2}
                id={titleId}
              >
                <DecoderText text="My Expertise" start={visible} delay={300} />
              </Heading>
            </div>

            <div className={styles.grid}>
              <div className={styles.techColumn}>
                <Heading level={4} className={styles.columnTitle} data-visible={visible}>
                  <DecoderText text="Technical Skills" start={visible} delay={500} />
                </Heading>
                <div className={styles.techSkillsList}>
                  {techSkills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className={styles.techItem}
                      data-visible={visible}
                      style={cssProps({ delay: `${index * 150}ms` })}
                    >
                      <div className={styles.barHeader}>
                        <div className={styles.techTitleGroup}>
                          <div className={styles.techIcon}>{skill.icon}</div>
                          <Text size="m" className={styles.techName} as="span">{skill.name}</Text>
                        </div>
                        <div className={styles.percentBadge}>
                          <Text size="s" as="span">{skill.percentage}%</Text>
                        </div>
                      </div>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: visible ? `${skill.percentage}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.profColumn}>
                <Heading level={4} className={styles.columnTitle} data-visible={visible}>
                  <DecoderText text="Professional Skills" start={visible} delay={500} />
                </Heading>
                
                <div className={styles.circularGrid}>
                  {profSkills.map((skill, index) => {
                    const radius = 55;
                    const circumference = 2 * Math.PI * radius;
                    const strokeDashoffset = visible 
                      ? circumference - (skill.percentage / 100) * circumference 
                      : circumference;

                    return (
                      <div 
                        key={skill.name} 
                        className={styles.profItem}
                        data-visible={visible}
                        style={cssProps({ delay: `${(index + 4) * 150}ms` })}
                      >
                        <div className={styles.circleContainer}>
                          <svg width="140" height="140" viewBox="0 0 140 140">
                            <circle
                              cx="70"
                              cy="70"
                              r={radius}
                              fill="none"
                              stroke="var(--backgroundLight)"
                              strokeWidth="8"
                              className={styles.circleTrack}
                            />
                            <circle
                              cx="70"
                              cy="70"
                              r={radius}
                              fill="none"
                              strokeWidth="8"
                              strokeDasharray={circumference}
                              strokeDashoffset={strokeDashoffset}
                              strokeLinecap="round"
                              className={styles.circleProgress}
                            />
                          </svg>
                          <Text size="s" className={styles.circleText}>{skill.percentage}%</Text>
                        </div>
                        <Text size="m" className={styles.profName}>{skill.name}</Text>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
