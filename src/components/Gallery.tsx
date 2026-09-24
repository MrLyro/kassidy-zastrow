'use client';

import {useState} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {Lightbox} from '@astryxdesign/core/Lightbox';
import type {Project} from '../content/projects';

export function Gallery({images}: {images: Project['images']}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  return <>
    <Grid columns={{minWidth: 420, max: 2}} gap={8}>
      {images.map((image, i) => <VStack as="figure" gap={3} key={image.src} style={{margin: 0}}>
        <Link href={image.src} label={`Enlarge image: ${image.alt}`} onClick={event => {event.preventDefault(); setIndex(i); setOpen(true);}} display="block">
          <img src={image.src} alt={image.alt} loading="lazy" width={1600} height={1100}
            style={{width: '100%', height: 'auto', display: 'block'}} />
        </Link>
        <Text as="p" type="supporting">{String(i + 1).padStart(2, '0')} / {image.caption}</Text>
      </VStack>)}
    </Grid>
    <Lightbox isOpen={open} onOpenChange={setOpen} media={images} index={index} onIndexChange={setIndex} hasZoom />
  </>;
}
