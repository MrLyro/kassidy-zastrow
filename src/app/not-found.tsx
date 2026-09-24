import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {Frame} from '../components/Frame';
import {sitePath} from '../lib/sitePath';
export default function NotFound() {return <Frame><Heading level={1}>This page hasn’t been drawn yet.</Heading><Text>The project you’re looking for isn’t here.</Text><Link href={sitePath('/')}>Return to selected work →</Link></Frame>;}
