import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

export const Contact = () => {
  const errorRef = useRef();
  const name = useFormInput('');
  const phone = useFormInput('');
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  
  const [sending, setSending] = useState(false);
  const [actionData, setActionData] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setActionData(null);

    const formData = new FormData(e.target);
    const isBot = formData.get('bot_name') !== null && String(formData.get('bot_name')).trim() !== '';

    if (isBot) {
      setActionData({ success: true });
      setSending(false);
      return;
    }

    const errors = {};
    if (!email.value || !EMAIL_PATTERN.test(email.value)) errors.email = 'Please enter a valid email address.';
    if (!message.value) errors.message = 'Please enter a message.';
    if (!name.value) errors.name = 'Please enter your name.';
    if (email.value.length > MAX_EMAIL_LENGTH) errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
    if (message.value.length > MAX_MESSAGE_LENGTH) errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;

    if (Object.keys(errors).length > 0) {
      setActionData({ errors });
      setSending(false);
      return;
    }

    try {
      await emailjs.send(
        'service_3dkumhd',
        'template_4r9twmt',
        {
          name: name.value,
          from_name: name.value,
          message: `Email: ${email.value}\nPhone: ${phone.value}\n\n${message.value}`,
          'Nadim Shahriar': 'Nadim Shahriar'
        },
        { publicKey: 'fXUG3VVPkCc28c3EE' }
      );
      
      setActionData({ success: true });
    } catch (error) {
      console.error('EmailJS error:', error);
      setActionData({ errors: { message: 'Failed to send message. Please try again later or check your EmailJS configuration.' } });
    }
    setSending(false);
  };

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!actionData?.success} timeout={1600}>
        {({ status, nodeRef }) => (
          <form
            className={styles.form}
            onSubmit={onSubmit}
            ref={nodeRef}
          >
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            {/* Hidden honeypot field to identify bots */}
            <Input
              className={styles.botkiller}
              label="Name"
              name="bot_name"
              maxLength={MAX_EMAIL_LENGTH}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="name"
              label="Your name"
              type="text"
              name="name"
              maxLength={MAX_EMAIL_LENGTH}
              {...name}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="tel"
              label="Your phone number"
              type="tel"
              name="phone"
              maxLength={MAX_EMAIL_LENGTH}
              {...phone}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your email"
              type="email"
              name="email"
              maxLength={MAX_EMAIL_LENGTH}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
            />
            <Transition
              unmount
              in={!sending && actionData?.errors}
              timeout={msToNum(tokens.base.durationM)}
            >
              {({ status: errorStatus, nodeRef }) => (
                <div
                  className={styles.formError}
                  ref={nodeRef}
                  data-status={errorStatus}
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {actionData?.errors?.name}
                      {actionData?.errors?.email}
                      {actionData?.errors?.message}
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>
            </form>
        )}
      </Transition>
      <Transition unmount in={actionData?.success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              I’ll get back to you within a couple days, sit tight
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
