import {sitePath} from '../lib/sitePath';

export type Project = {
  slug: string; number: string; title: string; category: string; setting: string;
  school: string; level: string; instructor: string; credits: string;
  tagline: string; description: string; themes: string[];
  images: {src: string; alt: string; caption: string}[];
};
const img = (name: string, alt: string, caption: string) => ({src: sitePath(`/images/${name}.webp`), alt, caption});

export const projects: Project[] = [
  {
    slug: 'lumen', number: '01', title: 'Lumen', category: 'Residential architecture',
    setting: 'Forested setting', school: 'Buinger CTE Academy', level: 'Senior year · High school',
    instructor: 'Timothy Anderson', credits: 'Kassidy Zastrow and collaborators',
    tagline: 'A home shaped by light.',
    description: 'Lumen is a contemporary residential project which explores the relationship between light, material, and the connection between indoor and outdoor living. Warm wood and stone masonry are contrasted with large areas of glazing, allowing the home to transform throughout the day. Asymmetrical roof forms, a curved dining area, balconies, and outdoor gathering spaces create special moments throughout the residence while maintaining a connection with the surrounding landscape. This project emphasizes atmosphere and the experience of living in a modern space that still feels warm and comfortable. Lighting elements are used as a defining piece of the homes architectural identity.',
    themes: ['Light & atmosphere', 'Material contrast', 'Indoor–outdoor living'],
    images: [
      img('lumen-day', 'Lumen residence with angular roof forms, tall glazing, wood cladding and stone masonry', 'Wood, stone, and glazing establish the material language.'),
      img('lumen-night', 'Lumen at dusk with illuminated glazing and linear exterior lighting', 'After dusk, light traces the edges of the home.'),
      img('lumen-balcony', 'Lumen side elevation with an outdoor terrace and curved dining volume', 'Balconies and outdoor rooms extend the living spaces.'),
      img('lumen-light', 'Illuminated upper-level window and balcony of Lumen', 'An elevated view of the illuminated residence.'),
      img('lumen-entry', 'Lumen approach through a wooded landscape', 'The approach connects the house to its landscape.'),
      img('lumen-terrace', 'View across the Lumen terrace at dusk', 'An outdoor gathering space at the threshold of inside and outside.'),
    ],
  },
  {
    slug: 'gateway-living', number: '05', title: 'Gateway Living', category: 'Housing & urban design',
    setting: 'Austin, Texas', school: 'Texas A&M University', level: 'Second-year undergraduate',
    instructor: 'David Iniesta', credits: 'Kassidy Zastrow · Ciera Hanks · Ally McGray',
    tagline: 'A threshold to community.',
    description: 'Gateway Living reimagines an existing Austin neighborhood through increased density and a shared architectural language. An apartment building frames the primary entrance, while smaller gateways guide movement through the site. Public spaces form a central spine; semi-private and private spaces extend outward. The proposal uses this gradual transition to balance community interaction with the comfort and privacy of home.',
    themes: ['Community & density', 'Public to private', 'Physical model making'],
    images: [
      img('gateway-front', 'Purple architectural model with a large gateway through its center and recessed balconies', 'The apartment building frames the entrance to the neighborhood. Photography: Parcel Erminy, as credited in the supplied portfolio.'),
      img('gateway-planning', 'Gateway Living urban planning board showing site diagrams and density studies', 'Neighborhood organization, density studies, and transitions between public and private space.'),
      img('gateway-section', 'Sectional physical model revealing the apartments around the gateway', 'A sectional model reveals the relationship between dwellings and the shared threshold. Photography: Parcel Erminy, as credited in the supplied portfolio.'),
      img('gateway-angle', 'Angled view of the Gateway Living physical model', 'The gateway remains legible from different approaches. Photography: Parcel Erminy, as credited in the supplied portfolio.'),
    ],
  },
  {
    slug: 'wave-apartments', number: '02', title: 'Wave Apartments', category: 'Collective housing',
    setting: 'Coastal setting', school: 'Buinger CTE Academy', level: 'Senior year · High school',
    instructor: 'Timothy Anderson', credits: 'Kassidy Zastrow and collaborators',
    tagline: 'Coastal living, connected.',
    description: 'Wave Apartments is a coastal residential project designed with the intention of creating a connected community within a large apartment complex. This project includes both standard residential and penthouse units. It combines residences with shared spaces such as work areas, indoor and outdoor seating, fitness facilities, and a rooftop pool overlooking the surrounding environment. A sky bridge connects the two parts of the complex while stairs and elevators provide circulation throughout each side of the building. Coastal influences are incorporated throughout the design with brown concrete, garage walls shaped like waves, and fish graphics along the exterior, giving the project a fresh and playful identity that connects the architecture to its setting.',
    themes: ['Shared amenities', 'Vertical connections', 'Coastal identity'],
    images: [
      img('wave-tower', 'Wave Apartments tower and wave-shaped parking levels beside palm trees', 'Coastal motifs shape the identity of the complex.'),
      img('wave-facade', 'Wave Apartments facade with stacked balconies and glazed ground-floor spaces', 'The residential facade and its relationship to the ground.'),
    ],
  },
  {
    slug: 'irradiation-illusion', number: '04', title: 'Irradiation Illusion', category: 'Spatial & interior study',
    setting: 'College Station, Texas', school: 'Texas A&M University', level: 'Second-year undergraduate',
    instructor: 'David Iniesta', credits: 'Kassidy Zastrow',
    tagline: 'More possibility within the same room.',
    description: 'The project explores the redesign of my bedroom within my sorority house through the use of spatial illusion, light materiality, and vertical expansion. Rather than significantly increasing the physical footprint of the room, the design focuses on creating the perception of a larger, brighter, and less cluttered space through strategic organization, natural light, and material choices. Vertical expansion through elevated sleeping areas creates additional openness while also transforming the experience of entering and occupying the room. This project investigates how thoughtful residential design can maximize limited living spaces and respond to the growing need for efficient housing solutions in the future.',
    themes: ['Spatial perception', 'Light & materiality', 'Vertical expansion'],
    images: [
      img('bedroom-after', 'Proposed bedroom visualization with elevated sleeping areas and a bright glazed upper volume', 'Proposed space. Visualization created with Adobe Firefly, as credited in the updated portfolio.'),
      img('bedroom-before', 'Before-study visualization of a shared bedroom with two beds and desks', 'Before study. Visualization created with Adobe Firefly, as credited in the updated portfolio.'),
      img('bedroom-sections', 'Before and after section drawings of the bedroom', 'Section studies explore vertical expansion and spatial perception.'),
      img('bedroom-plans', 'Before and after bedroom floor plans', 'Plan studies compare the organization of the room.'),
    ],
  },
  {
    slug: 'the-hive-baths', number: '03', title: 'The Hive Baths', category: 'Bathhouse & community',
    setting: 'Dallas, Texas', school: 'Texas A&M University', level: 'Second-year undergraduate',
    instructor: 'James Michael Tate', credits: 'Kassidy Zastrow · Shreya Vijay Kumar',
    tagline: 'Geometry, light, and shared ritual.',
    description: 'The Hive Baths implements a past, present, and futuristic exploration of the traditional bathhouse as a community and social space. The project utilizes hexagons as the primary language which guides the form, circulation, and program. This project was inspired by the Trenton Bath House by Louis Kahn and the geometry of a beehive with elements of 1980s futurism. The structure appears to peel away, unrolling down the hillside creating a series of spaces for hot baths, steam rooms, and a garden room. The three dimensional form creates unique relationships throughout the project. The central Atrium’s skylight creates an expanding hexagonal light that shines on the pool below. The observation tower allows visitors to look into the central atrium from the balcony. Circulation occurs above and below the structure, allowing visitors to experience the bath house from different elevations and perspectives. The Hive Baths explored geometry, movement, light, and shared spaces and our small team gave us the creative freedom to experiment with these ideas and develop a unique architectural identity for the project.',
    themes: ['Hexagonal geometry', 'Light & movement', 'Shared spaces'],
    images: [
      img('hive-model', 'Physical model of The Hive Baths with hexagonal pools and an observation tower on a sloped site', 'The bathhouse unfolds across the hillside around a central atrium.'),
      img('hive-drawings', 'Section, site plan, and cutaway oblique drawing of The Hive Baths', 'Sections and a cutaway drawing reveal circulation above and below the structure.'),
      img('hive-process', 'Hexagonal organization and form-sequence diagrams for The Hive Baths', 'A hexagonal language guides the development of form and program.'),
      img('hive-model-reverse', 'Reverse view of the bathhouse model showing pools, terrain, and the tower', 'Changing levels create different perspectives on the shared spaces.'),
    ],
  },
].sort((a, b) => a.number.localeCompare(b.number));

// The first four entries in the supplied 2026 portfolio are the featured selection.
// Keep Gateway Living accessible at its existing URL without featuring it here.
export const featuredProjects = projects.slice(0, 4);
