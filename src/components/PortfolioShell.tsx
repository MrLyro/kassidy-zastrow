'use client';

import type {ReactNode, CSSProperties, MouseEvent} from 'react';
import {usePathname} from 'next/navigation';
import {Theme} from '@astryxdesign/core/theme';
import {AppShell} from '@astryxdesign/core/AppShell';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {kassidyTheme} from '../theme/kassidy';
import {siteBasePath, sitePath} from '../lib/sitePath';
import {useIsMobile} from './MobileCenter';

export const frame: CSSProperties = {
  width: '100%', maxWidth: 1560, marginInline: 'auto',
  paddingInline: 'clamp(var(--spacing-5), 5vw, calc(var(--spacing-12) * 2))',
};
export const rule = 'var(--border-width) solid var(--color-border)';

export function PortfolioShell({children}: {children: ReactNode}) {
  const isContact = usePathname()?.endsWith('/contact') ?? false;
  const isMobile = useIsMobile();
  function scrollToTop(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top: 0, behavior: reducedMotion ? 'auto' : 'smooth'});
  }
  function scrollToProjects(event: MouseEvent<HTMLAnchorElement>) {
    if (window.location.pathname !== sitePath('/') && window.location.pathname !== siteBasePath) return;
    const work = document.getElementById('work');
    if (!work) return;
    event.preventDefault();
    window.history.replaceState(null, '', sitePath('/#work'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    work.scrollIntoView({behavior: reducedMotion ? 'auto' : 'smooth', block: 'start'});
  }
  const footerIntro = <VStack gap={6} align={isMobile ? 'center' : 'start'} style={isMobile ? {textAlign: 'center'} : undefined}>
    <Text type="supporting">GET IN TOUCH</Text>
    <Link href={sitePath('/contact')} color="primary" hasUnderline isStandalone>Have a project in mind? Let’s connect. ↗</Link>
    <Text>Architecture student at Texas A&M University.<br />Interested in opportunities to learn, design, and build.</Text>
  </VStack>;
  const footerLinks = <VStack gap={2} align={isMobile ? 'center' : 'start'}>
    <Link href={sitePath('/about')} color="primary" hasUnderline>About me ↗</Link>
    <Link href={sitePath('/documents/kassidy-zastrow-resume.pdf')} download color="primary" hasUnderline>Download résumé ↓</Link>
    <Link href={sitePath('/documents/kassidy-zastrow-portfolio.pdf')} download color="primary" hasUnderline>Download portfolio ↓</Link>
  </VStack>;
  // Shallow three-link navigation wraps on small screens; content grids reflow by
  // minimum track width. Media fills the frame, prose caps at 62 characters.
  return <Theme theme={kassidyTheme} mode="light">
    <AppShell height="auto" variant="surface" mobileNav={false} topNav={
      <HStack as="nav" aria-label="Main navigation" justify={isMobile ? 'center' : 'between'} align="center" wrap="wrap" gap={4}
        paddingBlock={6} style={{...frame, borderBottom: rule}}>
        <Link href={sitePath('/')} color="primary" hasUnderline tooltip="Go to the homepage">
          <Text size="2xl" weight="normal" style={{fontFamily: 'var(--font-family-heading)'}}>Kassidy Zastrow</Text>
        </Link>
        <HStack gap={6} justify={isMobile ? 'center' : 'start'} align="center" wrap="wrap" style={isMobile ? {width: '100%'} : undefined}>
          <Link href={sitePath('/#work')} color="primary" isStandalone onClick={scrollToProjects}>Projects</Link>
          <Link href={sitePath('/about')} color="primary" isStandalone>About</Link>
          <Link href={sitePath('/contact')} color="primary" isStandalone>Get in touch ↗</Link>
        </HStack>
      </HStack>
    }>
      {children}
      <VStack as="footer" id="contact" gap={8} style={{...frame, paddingTop: 'var(--spacing-10)', paddingBottom: 'calc(var(--spacing-12) * 2)', borderTop: rule}}>
        {isContact ? <HStack justify="between" align="end" wrap="wrap" gap={6}>
          <VStack gap={4} align="start">
          <Text type="supporting">DISCOVER THE WORK</Text>
          <Link href={sitePath('/#work')} color="primary" hasUnderline isStandalone onClick={scrollToProjects}>Explore architecture projects ↗</Link>
          </VStack>
          <Link href={sitePath('/about')} color="primary" hasUnderline isStandalone>About me ↗</Link>
        </HStack> : isMobile ? <VStack gap={6} align="center">
          {footerIntro}
          {footerLinks}
        </VStack> : <HStack justify="between" align="end" wrap="wrap" gap={8}>
          {footerIntro}
          {footerLinks}
        </HStack>}
        <HStack justify="center" wrap="wrap" gap={4} style={{borderTop: rule, paddingTop: 'var(--spacing-6)'}}>
          <Text type="supporting" style={{width: '100%'}}>© {new Date().getFullYear()} Kassidy Zastrow · Selected academic work</Text>
          <Link href="#top" color="primary" hasUnderline onClick={scrollToTop}>Back to top ↑</Link>
        </HStack>
      </VStack>
    </AppShell>
  </Theme>;
}
