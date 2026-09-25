import type {Metadata} from 'next';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Frame, rule} from '../../components/Frame';
import {AboutOverview} from '../../components/AboutOverview';
import {MobileCenter} from '../../components/MobileCenter';
import {sitePath} from '../../lib/sitePath';
export const metadata: Metadata = {title: 'About'};

export default function About() {
  return <Frame id="top">
    <MobileCenter><Text type="supporting">ABOUT KASSIDY</Text></MobileCenter>
    <MobileCenter><Heading level={1} type="display-1" style={{fontSize: 'min(var(--text-display-1-size), calc(var(--text-heading-2-size) * 3))'}}>From Concept<br />to Reality</Heading></MobileCenter>
    <AboutOverview
      biography={<Text as="p">Growing up in the DFW area surrounded by high rise buildings, expansive highway systems, and large scale developments, I was drawn to art and design from an early age. My path toward architecture began in elementary school after completing a drawing of a building that led my art teacher to ask if I had ever considered becoming an architect. As I grew older, my dad's work in plastic molding and engineering introduced me to another side of design through technical problem solving and understanding how ideas can be developed into something tangible. After exploring architecture further through courses in high school, I knew it was the path I wanted to pursue. I am now a junior in the Bachelor of Science in Architecture program at Texas A&M University, where I continue to develop my skills in design thinking, modeling, spacial analysis and visual communication. As I pursue an internship, I am excited to apply these skills in a professional environment, contribute to real world projects, and continue growing as a designer and future architect.</Text>}
      downloads={<VStack gap={3} style={{borderTop: rule, paddingTop: 'var(--spacing-6)'}}>
          <MobileCenter><Heading level={2}>Downloads</Heading></MobileCenter>
          <Link href={sitePath('/documents/kassidy-zastrow-resume.pdf')} download hasUnderline color="primary" isStandalone>Download resume</Link>
          <Link href={sitePath('/documents/kassidy-zastrow-portfolio.pdf')} download hasUnderline color="primary" isStandalone>Download portfolio</Link>
          <Text type="supporting">2026 · PDF format</Text>
        </VStack>}
      portrait={<VStack as="figure" gap={3} style={{margin: 0}}>
        <img src={sitePath('/images/kassidy-portrait.png')} alt="Kassidy smiling outdoors among trees" width={1486} height={1042} style={{width: '100%', height: 'auto'}} />
        <Text type="supporting">Kassidy Zastrow</Text>
      </VStack>}
    />
    <Grid columns={{minWidth: 300, max: 3}} gap={10} style={{borderTop: rule, paddingTop: 'var(--spacing-10)'}}>
      <VStack gap={5}><MobileCenter><Heading level={2}>Skills</Heading></MobileCenter><Text>Revit · Certified<br />Rhino · SketchUp · AutoCAD<br />Photoshop · InDesign<br />Physical model making<br />Drawings, rendering, and presentations</Text></VStack>
      <VStack gap={5}><MobileCenter><Heading level={2}>Awards</Heading></MobileCenter><Text>ACE Bridge Stability Competition Winner</Text><Text>Award of Excellence in CTE Business & Industry</Text><Text>College Board National Hispanic Recognition Scholar</Text></VStack>
      <VStack gap={5}><MobileCenter><Heading level={2}>Beyond studio</Heading></MobileCenter><Text>ACE — Architecture, Construction, Engineering Club</Text><Text>TAMU Alpha Omicron Pi</Text><Text>Community service through Big Event, Talk About the Troops, Spike Out Arthritis, and Arbor Daze.</Text></VStack>
    </Grid>
  </Frame>;
}
