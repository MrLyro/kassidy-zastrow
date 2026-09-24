'use client';

import {useState} from 'react';
import {FormLayout} from '@astryxdesign/core/FormLayout';
import {TextInput} from '@astryxdesign/core/TextInput';
import {TextArea} from '@astryxdesign/core/TextArea';
import {Button} from '@astryxdesign/core/Button';
import {VStack} from '@astryxdesign/core/VStack';
import {Text} from '@astryxdesign/core/Text';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  // Mailto prepares a draft only; no server delivery or storage occurs.
  function openDraft(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (![name, email, subject, message].every(value => value.trim())) {
      setFeedback('Please complete your name, email address, subject, and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFeedback('Please enter a valid email address.');
      return;
    }
    const body = `Name: ${name.trim()}\r\nReply email: ${email.trim()}\r\n\r\n${message.trim()}`;
    const title = subject.trim().replace(/[\r\n]+/g, ' ');
    window.location.href = `mailto:kassidyzastrow2@gmail.com?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    setFeedback('Your mail app should open with a draft. Review it and press Send there. If nothing opens, check that a default mail app is configured. Your message has not been sent by this website.');
  }
  return <form onSubmit={openDraft} aria-label="Contact Kassidy" aria-describedby="contact-availability">
    <VStack gap={8}>
      <FormLayout>
        <TextInput label="Your name" htmlName="name" value={name} onChange={setName} isRequired />
        <TextInput label="Email address" htmlName="email" type="email" value={email} onChange={setEmail} isRequired description="The address Kassidy can reply to." />
        <TextInput label="Subject" htmlName="subject" value={subject} onChange={setSubject} isRequired placeholder="What would you like to discuss?" />
        <TextArea label="Message" htmlName="message" value={message} onChange={setMessage} isRequired rows={7} placeholder="Share a little about your opportunity, project, or question." />
      </FormLayout>
      <VStack gap={4} align="start">
        <Text id="contact-availability" color="secondary">Opens a draft in your default mail app with the details above. Review and send it there. This website does not send or save your message.</Text>
        <Button type="submit" variant="primary" size="lg" label="Send message" />
        <VStack role="status" aria-live="polite">{feedback && <Text>{feedback}</Text>}</VStack>
      </VStack>
    </VStack>
  </form>;
}
