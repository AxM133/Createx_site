import { team } from './team'

const byName = (name) => team.find((m) => m.name === name)

export const courses = [
  {
    id: 1,
    title: 'The Ultimate Google Ads Training Course',
    category: 'Marketing',
    price: 100,
    author: byName('Jerome Bell'),
  },
  {
    id: 2,
    title: 'Prduct Management Fundamentals',
    category: 'Management',
    price: 480,
    author: byName('Marvin McKinney'),
  },
  {
    id: 3,
    title: 'HR Management and Analytics',
    category: 'HR & Recruting',
    price: 200,
    author: byName('Leslie Alexander Li'),
  },
  {
    id: 4,
    title: 'Brand Management & PR Communications',
    category: 'Marketing',
    price: 530,
    author: byName('Kristin Watson'),
  },
  {
    id: 5,
    title: 'Business Development Management',
    category: 'Management',
    price: 400,
    author: byName('Dianne Russell'),
  },
  {
    id: 6,
    title: 'Graphic Design Basic',
    category: 'Design',
    price: 500,
    author: byName('Cody Fisher'),
  },
  {
    id: 7,
    title: 'Highload Software Architecture',
    category: 'Development',
    price: 600,
    author: byName('Brooklyn Simmons'),
  },
  {
    id: 8,
    title: 'Human Resources – Selection and Recruitment',
    category: 'HR & Recruting',
    price: 150,
    author: byName('Kathryn Murphy'),
  },
  {
    id: 9,
    title: 'User Experience. Human-centered Design',
    category: 'Design',
    price: 240,
    author: byName('Cody Fisher'),
  },
]
