import type {ReactNode, CSSProperties} from 'react';
import {VStack} from '@astryxdesign/core/VStack';

export const rule = 'var(--border-width) solid var(--color-border)';
export function Frame({children, id, style = {}}: {children: ReactNode; id?: string; style?: CSSProperties}) {
  return <VStack as="section" id={id} gap={10} style={{
    width: '100%', maxWidth: 1560, marginInline: 'auto',
    paddingInline: 'clamp(var(--spacing-5), 5vw, calc(var(--spacing-12) * 2))',
    paddingBlock: 'calc(var(--spacing-12) * 1.5)', ...style,
  }}>{children}</VStack>;
}
