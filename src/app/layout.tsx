import type {Metadata} from 'next';
import '@astryxdesign/core/reset.css';
import '@astryxdesign/core/astryx.css';
import '../theme/kassidy.css';
import {PortfolioShell} from '../components/PortfolioShell';

export const metadata: Metadata = {
  title: {default: 'Kassidy Zastrow — Architecture & Design', template: '%s — Kassidy Zastrow'},
  description: 'Selected architecture and design work by Kassidy Zastrow, a Bachelor of Science in Architecture student at Texas A&M University.',
  robots: {index: true, follow: true},
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body style={{margin: 0}}><PortfolioShell>{children}</PortfolioShell></body></html>;
}
