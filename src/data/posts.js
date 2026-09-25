import { unsplash } from '@/utils/image'

/** type: 'Article' | 'Video' | 'Podcast' */
export const posts = [
  {
    id: 1,
    type: 'Podcast',
    category: 'Marketing',
    date: 'September 4, 2020',
    duration: '36 min',
    title: 'What is traffic arbitrage and does it really make money?',
    excerpt:
      'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
    image: unsplash('1516321318423-f06f85e504b3'),
  },
  {
    id: 2,
    type: 'Article',
    category: 'Development',
    date: 'September 1, 2020',
    title: 'How to choose the first programming language for a beginner',
    excerpt:
      'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
    image: unsplash('1498050108023-c5249f4df085'),
  },
  {
    id: 3,
    type: 'Video',
    category: 'Design',
    date: 'August 8, 2020',
    duration: '40 min',
    title: 'Should you choose a creative profession if you are attracted to creativity?',
    excerpt:
      'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
    image: unsplash('1499951360447-b19be8fe80f5'),
  },
  {
    id: 4,
    type: 'Article',
    category: 'HR & Recruting',
    date: 'August 3, 2020',
    title: 'HR statistics: job search, interviews, hiring and recruiting',
    excerpt:
      'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl...',
    image: unsplash('1488426862026-3ee34a7d66df'),
  },
  {
    id: 5,
    type: 'Video',
    category: 'Management',
    date: 'August 2, 2020',
    duration: '45 min',
    title: 'What to do and who to talk to if you want to get feedback on the product',
    excerpt:
      'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...',
    image: unsplash('1522202176988-66273c2fd55f'),
  },
  {
    id: 6,
    type: 'Podcast',
    category: 'Design',
    date: 'July 28, 2020',
    duration: '36 min',
    title: 'What are color profiles and how they work in graphic design',
    excerpt:
      'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
    image: unsplash('1524504388940-b1c1722653e1'),
  },
]
