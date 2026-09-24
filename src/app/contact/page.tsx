import type {Metadata} from 'next';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Frame} from '../../components/Frame';
import {ContactForm} from '../../components/ContactForm';
import {MobileCenter} from '../../components/MobileCenter';

export const metadata: Metadata = {title: 'Contact'};

export default function Contact() {
  // Two columns on wide screens; stacked below the minimum track width.
  // The form caps at 640px so fields remain comfortable to read and use.
  return <Frame id="top">
    <MobileCenter><Text type="supporting">GET IN TOUCH</Text></MobileCenter>
    <MobileCenter><Heading level={1} type="display-1" style={{fontSize: 'min(var(--text-display-1-size), calc(var(--text-heading-2-size) * 3))'}}>Let’s start a<br />conversation.</Heading></MobileCenter>
    <Grid columns={{minWidth: 340, max: 2}} gap={10}>
      <VStack gap={6} style={{maxWidth: '44ch'}}>
        <MobileCenter><Heading level={2}>Opportunities. Ideas. Connections.</Heading></MobileCenter>
        <Text as="p">For internship opportunities, project inquiries, or a conversation about the work, leave a message for Kassidy.</Text>
        <Text as="p" color="secondary">Architecture student at Texas A&M University.<br />Class of 2028.</Text>
      </VStack>
      <VStack style={{width: '100%', maxWidth: 640}}>
        <ContactForm />
      </VStack>
    </Grid>
  </Frame>;
}
