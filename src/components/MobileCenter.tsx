'use client';

import {useSyncExternalStore, type ReactNode} from 'react';
import {VStack} from '@astryxdesign/core/VStack';

const mobileQuery = '(max-width: 640px)';

function subscribeMobile(onChange: () => void) {
  const media = window.matchMedia(mobileQuery);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

export function useIsMobile() {
  return useSyncExternalStore(
    subscribeMobile,
    () => window.matchMedia(mobileQuery).matches,
    () => false,
  );
}

export function MobileCenter({children}: {children: ReactNode}) {
  const isMobile = useIsMobile();
  return <VStack align={isMobile ? 'center' : 'start'} style={{width: isMobile ? '100%' : undefined, textAlign: isMobile ? 'center' : undefined}}>
    {children}
  </VStack>;
}
