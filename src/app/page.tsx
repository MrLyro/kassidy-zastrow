import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Frame} from '../components/Frame';
import {MobileCenter} from '../components/MobileCenter';
import {featuredProjects} from '../content/projects';
import {sitePath} from '../lib/sitePath';

export default function Home() {
  return <>
    <Frame id="top" style={{paddingBottom: 'var(--spacing-8)'}}>
      <HStack justify="between" wrap="wrap" gap={4}>
        <MobileCenter><Text type="supporting">ARCHITECTURE & DESIGN</Text></MobileCenter>
        <MobileCenter><Text type="supporting">TEXAS A&M UNIVERSITY / CLASS OF 2028</Text></MobileCenter>
      </HStack>
      <MobileCenter><Heading level={1} type="display-1" style={{fontSize: 'min(var(--text-display-1-size), calc(var(--text-heading-2-size) * 3))'}}>Welcome to my<br />architecture portfolio.</Heading></MobileCenter>
      <HStack justify="between" align="end" gap={8} wrap="wrap">
        <Text as="p" style={{maxWidth: '53ch'}}>A collection of projects where imagination meets thoughtful design and ideas take shape as spaces.</Text>
      </HStack>
    </Frame>
    <Frame id="work" style={{backgroundColor: 'var(--color-background-muted)', paddingTop: 'var(--spacing-8)', paddingBottom: 'var(--spacing-8)'}}>
      <Grid columns={{minWidth: 340, max: 2}} gap={10}>
        <VStack gap={6}>
          <MobileCenter><Heading level={2} type="display-2">Architecture projects</Heading></MobileCenter>
        </VStack>
        <VStack gap={6} justify="center">
          <Text as="p">Below is a selection of my architecture projects. Explore each one to see the ideas behind the design, the process that shaped it, and the final work.</Text>
        </VStack>
      </Grid>
    </Frame>
    <Frame style={{paddingTop: 'var(--spacing-6)', paddingBottom: 'var(--spacing-8)', gap: 'var(--spacing-4)'}}>
      <HStack justify="end"><MobileCenter><Text type="supporting">FOUR PROJECTS · FOUR PERSPECTIVES</Text></MobileCenter></HStack>
      <Grid columns={{minWidth: 430, max: 2}} columnGap={8} rowGap={10}>
        {featuredProjects.map(project => <VStack as="article" key={project.slug} gap={4} style={{paddingBottom: 'var(--spacing-8)'}}>
          <Link href={sitePath(`/work/${project.slug}`)} label={`Explore ${project.title}`} display="block">
            <img src={project.images[0].src} alt={project.images[0].alt} width={1200} height={900} loading="lazy"
              style={{width: '100%', aspectRatio: '4 / 3', height: 'auto', objectFit: 'cover', display: 'block'}} />
          </Link>
          <HStack justify="between" align="start" gap={4}>
            <VStack gap={2} style={{width: '100%'}}>
              <MobileCenter><Text type="supporting">{project.number} / {project.category}</Text></MobileCenter>
              <MobileCenter><Heading level={3}><Link href={sitePath(`/work/${project.slug}`)} color="primary"><Text size="2xl" weight="normal" style={{fontFamily: 'var(--font-family-heading)', letterSpacing: 'normal'}}>{project.title} ↗</Text></Link></Heading></MobileCenter>
              <MobileCenter><Text color="secondary">{project.tagline}</Text></MobileCenter>
            </VStack>
          </HStack>
        </VStack>)}
      </Grid>
    </Frame>
    <Frame style={{backgroundColor: 'var(--color-background-muted)', paddingTop: 'var(--spacing-8)', paddingBottom: 'var(--spacing-8)'}}>
      <Grid columns={{minWidth: 340, max: 2}} gap={10}>
        <VStack gap={6}><MobileCenter><Text type="supporting">BEHIND THE WORK</Text></MobileCenter><MobileCenter><Heading level={2} type="display-2">Creativity.<br />Connection.</Heading></MobileCenter></VStack>
        <VStack gap={6} justify="center">
          <Text as="p">Architecture gives me a way to connect creative ideas with the people who experience them. My work brings together design thinking, digital modeling, and physical making.</Text>
          <Text as="p">From a single room to shared spaces, I’m interested in how thoughtful design can make everyday life feel more welcoming and connected.</Text>
          <MobileCenter><Link href={sitePath('/about')} color="primary" hasUnderline isStandalone>More about Kassidy ↗</Link></MobileCenter>
        </VStack>
      </Grid>
    </Frame>
  </>;
}
