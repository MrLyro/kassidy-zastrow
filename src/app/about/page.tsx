import type {Metadata} from 'next';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Frame, rule} from '../../components/Frame';
import {MobileCenter} from '../../components/MobileCenter';
import {sitePath} from '../../lib/sitePath';
export const metadata: Metadata = {title: 'About'};

export default function About() {
  return <Frame id="top">
    <MobileCenter><Text type="supporting">ABOUT KASSIDY</Text></MobileCenter>
    <MobileCenter><Heading level={1} type="display-1" style={{fontSize: 'min(var(--text-display-1-size), calc(var(--text-heading-2-size) * 3))'}}>From concept<br />to reality.</Heading></MobileCenter>
    <Grid columns={{minWidth: 340, max: 2}} gap={10}>
      <VStack gap={6}>
        <Text as="p" type="large" weight="normal">I’m studying architecture at Texas A&M University and working toward my Bachelor of Science in Architecture, with plans to graduate in 2028.</Text>
        <Text as="p">I grew up in the Dallas and Fort Worth area, where I became curious about how buildings and neighborhoods take shape. Art and design gave me a way to explore that curiosity, while my father’s work in molding and engineering introduced me to the technical side of making things.</Text>
        <Text as="p">In studio, I enjoy moving between digital models, physical models, drawings, and presentations. Spending time on residential construction sites has helped me understand how an idea on paper becomes a real place, one decision at a time.</Text>
        <VStack gap={3} style={{borderTop: rule, paddingTop: 'var(--spacing-6)'}}>
          <MobileCenter><Heading level={2}>Downloads</Heading></MobileCenter>
          <Link href={sitePath('/documents/kassidy-zastrow-resume.pdf')} download hasUnderline color="primary" isStandalone>Download résumé ↓</Link>
          <Link href={sitePath('/documents/kassidy-zastrow-portfolio.pdf')} download hasUnderline color="primary" isStandalone>Download portfolio ↓</Link>
          <Text type="supporting">2026 · PDF format</Text>
        </VStack>
      </VStack>
      <VStack as="figure" gap={3} style={{margin: 0}}>
        <img src={sitePath('/images/kassidy-portrait.png')} alt="Kassidy smiling outdoors among trees" width={1486} height={1042} style={{width: '100%', height: 'auto'}} />
        <Text type="supporting">Kassidy Zastrow</Text>
      </VStack>
    </Grid>
    <Grid columns={{minWidth: 300, max: 3}} gap={10} style={{borderTop: rule, paddingTop: 'var(--spacing-10)'}}>
      <VStack gap={5}><MobileCenter><Heading level={2}>Skills</Heading></MobileCenter><Text>Revit · Certified<br />Rhino · SketchUp · AutoCAD<br />Photoshop · InDesign<br />Physical model making<br />Drawings, rendering, and presentations</Text></VStack>
      <VStack gap={5}><MobileCenter><Heading level={2}>Awards</Heading></MobileCenter><Text>ACE Bridge Stability Competition winner</Text><Text>Award of Excellence in CTE Business & Industry</Text><Text>College Board National Hispanic Recognition Scholar</Text></VStack>
      <VStack gap={5}><MobileCenter><Heading level={2}>Beyond studio</Heading></MobileCenter><Text>ACE — Architecture, Construction, Engineering Club</Text><Text>TAMU Alpha Omicron Pi</Text><Text>Community service through Big Event, Talk About the Troops, Spike Out Arthritis, and Arbor Daze.</Text></VStack>
    </Grid>
  </Frame>;
}
