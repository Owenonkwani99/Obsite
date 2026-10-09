export type NavItem = {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
]

export const workItems = [
  {
    title: 'Haku',
    category: 'Brand identity and packaging',
    year: '2020',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Pott Mockups',
    category: 'Campaign and website',
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Elia Studio',
    category: 'Website design',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Fruta',
    category: 'Packaging and launch site',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1526312426976-f4d754c13f2d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Quarto',
    category: 'Brand identity',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Loop',
    category: 'Product design',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
  },
]

export const services = [
  { name: 'Brand identity', description: 'Naming, strategy, visual systems, and launch-ready assets.' },
  { name: 'Website design', description: 'Conversion-focused websites that reflect your offer and story.' },
  { name: 'Brand development', description: 'Messaging and positioning to sharpen how people understand you.' },
  { name: 'Product design', description: 'Interfaces, flows, and product marketing systems that move faster.' },
  { name: 'Ongoing support', description: 'Continuous care, iteration, and design support for growing teams.' },
]

export const pricingPlans = [
  {
    tag: 'For new businesses',
    plan: 'Website',
    price: '$12k',
    accent: 'soft',
    features: ['Up to 8 pages', 'Framework build with CMS', 'Responsive web design', 'SEO and analytics setup', '30 days of support'],
  },
  {
    tag: 'Most chosen',
    plan: 'Brand and website',
    price: '$24k',
    accent: 'primary',
    features: ['Everything in Website', 'Logo and identity system', 'Brand guidelines', 'Social and print templates', 'Launch assets'],
  },
  {
    tag: 'For growing teams',
    plan: 'Design partner',
    price: '$6k',
    accent: 'soft',
    features: ['Dedicated senior designer', 'Weekly check-ins', 'New pages and landing pages', 'Campaign assets', 'Pause or cancel anytime'],
  },
]

export const journalEntries = [
  {
    title: 'How we plan a website before designing a single page',
    readingTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Choosing brand colors you can actually use',
    readingTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'What to prepare before you hire a design studio',
    readingTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  },
]

export const faqs = [
  { question: 'How long does a website project take?', answer: 'Most websites take six to eight weeks from kickoff to launch, depending on content and revision cycles.' },
  { question: 'How much does a website cost?', answer: 'Projects usually begin at $12k for a focused marketing website and scale up for larger brand and product work.' },
  { question: 'Do you work with teams outside Europe?', answer: 'Yes. We work with clients across Europe and beyond, with remote collaboration structured around your time zone.' },
  { question: 'Can we update the website ourselves?', answer: 'Yes. We can build on a CMS or provide a clear structure for future updates and content changes.' },
  { question: 'Do you offer support after launch?', answer: 'We offer post-launch support packages for updates, fixes, and ongoing design improvements.' },
  { question: 'What do you need from us to get started?', answer: 'A short brief, your goals, content, and any references you already like are enough to begin.' },
]

export const processMilestones = [
  { label: 'Kickoff workshop', meta: 'Week 1' },
  { label: 'Wireframes approved', meta: 'Week 3' },
  { label: 'Brand direction', meta: 'Week 2' },
  { label: 'Build ready for review', meta: 'Week 7' },
]

export const officeLocations = [
  { city: 'Lisbon', address: 'Rua da Bovaista 12, Lisbon, Portugal', image:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80' },
  { city: 'Berlin', address: 'Torstraße 140, 10115 Berlin, Germany', image:'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80' },
]
