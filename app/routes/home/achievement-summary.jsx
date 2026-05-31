import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import { media } from '~/utils/style';
import styles from './achievement-summary.module.css';

export function AchievementSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title,
  description,
  year,
  category,
  image,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const titleId = `${id}-title`;
  const indexText = index < 10 ? `0${index}` : index;
  const visible = sectionVisible || focused || hovered;

  function renderDetails(visible) {
    return (
      <div className={styles.details}>
        <div aria-hidden className={styles.index}>
          <Divider
            notchWidth="64px"
            notchHeight="8px"
            collapsed={!visible}
            collapseDelay={1000}
          />
          <span className={styles.indexNumber} data-visible={visible}>
            {indexText}
          </span>
        </div>
        <div className={styles.year} data-visible={visible}>
          {year}
        </div>
        <div className={styles.category} data-visible={visible}>
          {category}
        </div>
        <Heading
          level={3}
          as="h2"
          className={styles.title}
          data-visible={visible}
          id={titleId}
        >
          {title}
        </Heading>
        <Text className={styles.description} data-visible={visible} as="p">
          {description}
        </Text>
        <div className={styles.button} data-visible={visible}>
          <Button iconHoverShift href={buttonLink} iconEnd="arrow-right">
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }

  function renderPreview(visible) {
    return (
      <div className={styles.preview}>
        <div className={styles.imageWrap}>
          <div className={styles.image}>
            <Image
              className={styles.innerImage}
              reveal
              delay={100}
              placeholder={image.placeholder}
              srcSet={image.srcSet}
              width={800}
              height={600}
              sizes={`(max-width: ${media.tablet}px) 100vw, 50vw`}
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Section
      className={styles.achievement}
      data-alternate={alternate}
      data-first={index === 1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div className={styles.content}>
        <Transition in={visible}>
          {({ visible: transitionVisible }) => (
            <>
              {!alternate && (
                <>
                  {renderDetails(transitionVisible)}
                  {renderPreview(transitionVisible)}
                </>
              )}
              {alternate && (
                <>
                  {renderPreview(transitionVisible)}
                  {renderDetails(transitionVisible)}
                </>
              )}
            </>
          )}
        </Transition>
      </div>
    </Section>
  );
}