import { unsplash } from '@/utils/image'

/**
 * Единый список постов: главная, Blog, About Us, Single Post.
 * image — фото обложки, bg — фон под ней (пока фото грузится).
 */
const LIST = [
  {
    id: 1,
    tags: ['marketing', 'learning'],
    type: 'Podcast',
    category: 'Marketing',
    date: 'September 4, 2020',
    duration: '36 min',
    title: 'What is traffic arbitrage and does it really make money?',
    excerpt:
      'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
    image: unsplash('1516321318423-f06f85e504b3'),
    bg: '#a5d2f7',
  },
  {
    id: 2,
    tags: ['coding', 'learning', 'self development'],
    type: 'Article',
    category: 'Development',
    date: 'September 1, 2020',
    duration: '4 min',
    title: 'How to choose the first programming language for a beginner',
    excerpt:
      'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
    image: unsplash('1498050108023-c5249f4df085'),
    bg: '#e5e8ed',
  },
  {
    id: 3,
    tags: ['learning', 'self development'],
    type: 'Video',
    category: 'Design',
    date: 'August 8, 2020',
    duration: '40 min',
    title: 'Should you choose a creative profession if you are attracted to creativity?',
    excerpt:
      'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
    image: unsplash('1499951360447-b19be8fe80f5'),
    bg: '#fff5a8',
  },
  {
    id: 4,
    tags: ['HR', 'recruiting', 'self development'],
    type: 'Article',
    category: 'HR & Recruiting',
    date: 'August 3, 2020',
    duration: '4 min',
    title: 'HR statistics: job search, interviews, hiring and recruiting',
    excerpt:
      'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl...',
    image: unsplash('1488426862026-3ee34a7d66df'),
    bg: '#fddde6',
  },
  {
    id: 5,
    tags: ['marketing', 'learning'],
    type: 'Video',
    category: 'Management',
    date: 'August 2, 2020',
    duration: '45 min',
    title: 'What to do and who to talk to if you want to get feedback on the product',
    excerpt:
      'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...',
    image: unsplash('1522202176988-66273c2fd55f'),
    bg: '#c9f0e2',
  },
  {
    id: 6,
    tags: ['coding', 'learning'],
    type: 'Podcast',
    category: 'Design',
    date: 'July 28, 2020',
    duration: '36 min',
    title: 'What are color profiles and how they work in graphic design',
    excerpt:
      'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
    image: unsplash('1524504388940-b1c1722653e1'),
    bg: '#cdc8fa',
  },
  {
    id: 7,
    tags: ['HR', 'recruiting'],
    type: 'Video',
    category: 'Management',
    date: 'July 15, 2020',
    duration: '45 min',
    title: 'Startup: how to build a team that will live longer than a year',
    excerpt:
      'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
    image: unsplash('1522071820081-009f0129c71c'),
    bg: '#fddde6',
  },
  {
    id: 8,
    tags: ['marketing', 'self development'],
    type: 'Article',
    category: 'Marketing',
    date: 'July 9, 2020',
    duration: '6 min',
    title: 'How to get customers to love your business from the start',
    excerpt:
      'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
    image: unsplash('1455390582262-044cdead277a'),
    bg: '#e5e8ed',
  },
]

/** Надпись на ссылке карточки по типу поста */
export const POST_ACTION = { Article: 'Read', Video: 'Watch', Podcast: 'Listen' }

// cover — та же обложка в формате SmartImage ({ src, hint }) для About Us и Single Post
export const POSTS = LIST.map((post) => ({ ...post, cover: { src: post.image, hint: post.title } }))

export const posts = POSTS
