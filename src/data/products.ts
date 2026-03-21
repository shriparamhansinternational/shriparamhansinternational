// ===================================================
// SPI PRODUCTS DATA FILE
// To add real images: replace the `image` placeholder
// string with your actual import or image path.
// ===================================================

export interface Product {
  id: string;
  title: string;
  desc: string;
  icon: string;
  image: string; // Replace with real image path when available
  category: 'main' | 'additional' | 'process';
  tags?: string[]; // Sub-types shown inside the card
}

// ── PLACEHOLDER IMAGE (grey industrial tile) ──
// Replace individual `image` values with real product photos
const PH = (label: string) =>
  `https://placehold.co/400x260/0a1628/c9a84c?text=${encodeURIComponent(label)}`;

// ── MAIN MANUFACTURING PRODUCTS ──
export const mainProducts: Product[] = [
  {
    id: 'stickers',
    title: 'Stickers',
    desc: 'High-quality custom stickers manufactured for branding, packaging, identification, and industrial use.',
    icon: '🏷️',
    image: PH('Stickers'),
    category: 'main',
    tags: [
      'Product Stickers',
      'Branding Stickers',
      'Barcode Stickers',
      'Vinyl Stickers',
      'Transparent Stickers',
      'Custom Printed Stickers',
      'Industrial Label Stickers',
    ],
  },
  {
    id: 'aluminium-printing',
    title: 'Aluminium Printing',
    desc: 'Precision aluminium printing solutions with durable finish for industrial and commercial applications.',
    icon: '🔩',
    image: PH('Aluminium Printing'),
    category: 'main',
  },
  {
    id: 'tin-printing',
    title: 'Tin Printing',
    desc: 'Reliable tin printing work crafted for attractive presentation and long-lasting use.',
    icon: '🖨️',
    image: PH('Tin Printing'),
    category: 'main',
  },
  {
    id: 'metal-labels',
    title: 'Metal Labels',
    desc: 'Premium metal labels manufactured for branding, industrial marking, and product identification.',
    icon: '🏅',
    image: PH('Metal Labels'),
    category: 'main',
  },
  {
    id: 'tin-plates',
    title: 'Tin Plates',
    desc: 'Custom tin plates produced with accuracy and strong finishing for industrial and display purposes.',
    icon: '📋',
    image: PH('Tin Plates'),
    category: 'main',
  },
  {
    id: 'brass-name-plates',
    title: 'Brass Name Plates',
    desc: 'Elegant brass name plates designed for offices, industries, and premium branding.',
    icon: '✨',
    image: PH('Brass Name Plates'),
    category: 'main',
  },
  {
    id: 'diamond-cut',
    title: 'Diamond Cut / Embossed / Anodised',
    desc: 'Premium finishing solutions for refined industrial appearance and durability.',
    icon: '💎',
    image: PH('Diamond Cut'),
    category: 'main',
  },
  {
    id: 'cycle-name-plates',
    title: 'Cycle Name Plates',
    desc: 'Custom cycle name plates manufactured for branding and identification.',
    icon: '🚲',
    image: PH('Cycle Name Plates'),
    category: 'main',
  },
  {
    id: 'tin-containers',
    title: 'Tin Containers',
    desc: 'Durable tin containers designed for packaging and commercial use.',
    icon: '📦',
    image: PH('Tin Containers'),
    category: 'main',
  },
  {
    id: 'roto-gravure',
    title: 'Roto Gravure Printing',
    desc: 'Advanced roto gravure printing for high-quality and consistent print results.',
    icon: '🖋️',
    image: PH('Roto Gravure'),
    category: 'main',
  },
  {
    id: 'bottle-caps',
    title: 'Bottle Caps',
    desc: 'Custom bottle cap printing solutions for branding and packaging.',
    icon: '🍶',
    image: PH('Bottle Caps'),
    category: 'main',
  },
  {
    id: 'flexible-pouches',
    title: 'Flexible Pouches',
    desc: 'Printed flexible pouches designed for modern packaging with strong visual appeal.',
    icon: '🛍️',
    image: PH('Flexible Pouches'),
    category: 'main',
  },
  {
    id: 'visiting-cards',
    title: 'Visiting Cards',
    desc: 'Professionally printed visiting cards with a premium and clean design.',
    icon: '💼',
    image: PH('Visiting Cards'),
    category: 'main',
  },
];

// ── ADDITIONAL PRODUCTS ──
export const additionalProducts: Product[] = [
  {
    id: 'name-plate',
    title: 'Name Plate',
    desc: 'Custom name plates designed for branding and identification.',
    icon: '🪧',
    image: PH('Name Plate'),
    category: 'additional',
  },
  {
    id: 'printed-sticker',
    title: 'Printed Sticker',
    desc: 'High-resolution printed stickers for branding and packaging.',
    icon: '🏷️',
    image: PH('Printed Sticker'),
    category: 'additional',
  },
  {
    id: 'label-sticker',
    title: 'Label Sticker',
    desc: 'Durable label stickers for product identification and industrial use.',
    icon: '🔖',
    image: PH('Label Sticker'),
    category: 'additional',
  },
  {
    id: 'key-chain',
    title: 'Key Chain',
    desc: 'Promotional key chains designed for branding and corporate use.',
    icon: '🔑',
    image: PH('Key Chain'),
    category: 'additional',
  },
  {
    id: 'sign-board',
    title: 'Sign Board',
    desc: 'Professional sign boards for branding, direction, and advertising.',
    icon: '🪟',
    image: PH('Sign Board'),
    category: 'additional',
  },
  {
    id: 'letter-board',
    title: 'Letter Board',
    desc: 'Custom letter boards for display and branding purposes.',
    icon: '📝',
    image: PH('Letter Board'),
    category: 'additional',
  },
  {
    id: 'promotional-pen',
    title: 'Promotional Pen',
    desc: 'Branded promotional pens for marketing and corporate identity.',
    icon: '🖊️',
    image: PH('Promotional Pen'),
    category: 'additional',
  },
];

// ── PRINTING PROCESS & SUPPORT ──
export const processProducts: Product[] = [
  {
    id: 'ctp',
    title: 'CTP',
    desc: 'Advanced pre-press CTP solutions for accurate printing workflow.',
    icon: '🖥️',
    image: PH('CTP'),
    category: 'process',
  },
  {
    id: 'film-processing',
    title: 'Film Processing',
    desc: 'Professional film processing ensuring clarity and precision.',
    icon: '🎞️',
    image: PH('Film Processing'),
    category: 'process',
  },
  {
    id: 'plate-making',
    title: 'Plate Making',
    desc: 'Efficient plate making for consistent print quality.',
    icon: '⚙️',
    image: PH('Plate Making'),
    category: 'process',
  },
  {
    id: 'designing',
    title: 'Designing',
    desc: 'Creative design support to convert ideas into print-ready products.',
    icon: '🎨',
    image: PH('Designing'),
    category: 'process',
  },
];
