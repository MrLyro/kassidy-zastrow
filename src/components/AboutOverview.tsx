'use client';

import type {ReactNode} from 'react';
import {Grid} from '@astryxdesign/core/Grid';
import {VStack} from '@astryxdesign/core/VStack';
import {useIsMobile} from './MobileCenter';

export function AboutOverview({biography, portrait, downloads}: {biography: ReactNode; portrait: ReactNode; downloads: ReactNode}) {
  const isMobile = useIsMobile();
  return <Grid columns={{minWidth: 340, max: 2}} gap={10}>
    <VStack gap={6}>
      {biography}
      {isMobile && portrait}
      {downloads}
    </VStack>
    {!isMobile && portrait}
  </Grid>;
}
