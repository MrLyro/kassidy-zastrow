import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Frame, rule} from '../../../components/Frame';
import {Gallery} from '../../../components/Gallery';
import {projects, featuredProjects} from '../../../content/projects';
import {MobileCenter} from '../../../components/MobileCenter';
import {sitePath} from '../../../lib/sitePath';

export function generateStaticParams() {return projects.map(({slug}) => ({slug}));}
export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const p = projects.find(p => p.slug === slug);
  return {title: p?.title ?? 'Project not found', description: p?.tagline};
}
export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const index = projects.findIndex(p => p.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const featuredIndex = featuredProjects.findIndex(p => p.slug === slug);
  const next = featuredProjects[(featuredIndex + 1) % featuredProjects.length];
  return <>
    <Frame id="top" style={{paddingBottom: 'var(--spacing-8)'}}>
      <Link href={sitePath('/#work')} color="secondary">Architecture projects</Link>
      <VStack gap={6}><MobileCenter><Text type="supporting">{project.number} / {project.category.toUpperCase()}</Text></MobileCenter><MobileCenter><Heading level={1} type="display-1">{project.title}</Heading></MobileCenter><MobileCenter><Text type="large" weight="normal">{project.tagline}</Text></MobileCenter></VStack>
      <img src={project.images[0].src} alt={project.images[0].alt} width={1600} height={1100} fetchPriority="high"
        style={{width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain', backgroundColor: 'var(--color-background-muted)'}} />
      <Grid columns={{minWidth: 330, max: 2}} gap={10} style={{paddingBlock: 'var(--spacing-10)'}}>
        <VStack gap={6}><MobileCenter><Heading level={2}>Design intent</Heading></MobileCenter><Text as="p" style={{maxWidth: '62ch'}}>{project.description}</Text><Text type="supporting">{project.themes.join(' / ')}</Text></VStack>
        <VStack gap={5}>
          {[['Setting', project.setting], ['Academic context', `${project.school} · ${project.level}`], ['Instructor', project.instructor], ['Project credits', project.credits]].map(([label, value]) =>
            <VStack key={label} gap={1} style={{borderBottom: rule, paddingBottom: 'var(--spacing-4)'}}><Text type="supporting">{label.toUpperCase()}</Text><Text>{value}</Text></VStack>)}
        </VStack>
      </Grid>
      <HStack justify="between" wrap="wrap" gap={4}><MobileCenter><Heading level={2}>A closer look</Heading></MobileCenter><MobileCenter><Text type="supporting">SELECT AN IMAGE TO EXPLORE</Text></MobileCenter></HStack>
      <Gallery images={project.images} />
      <VStack gap={4} style={{borderTop: rule, paddingTop: 'var(--spacing-10)', marginTop: 'var(--spacing-10)'}}>
        <Text type="supporting">NEXT PROJECT / {next.number}</Text>
        <Link href={sitePath(`/work/${next.slug}`)} color="primary" hasUnderline isStandalone>{next.title}</Link>
      </VStack>
    </Frame>
  </>;
}
