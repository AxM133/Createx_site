import { unsplash } from '@/utils/image'

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.'

export const testimonials = [
  {
    id: 1,
    name: 'Eleanor Pena',
    position: 'Position, Course',
    text,
    photo: unsplash('1534528741775-53994a69daeb', 120),
  },
  {
    id: 2,
    name: 'Jerome Bell',
    position: 'Position, Course',
    text,
    photo: unsplash('1500648767791-00dcc994a43e', 120),
  },
  {
    id: 3,
    name: 'Kristin Watson',
    position: 'Position, Course',
    text,
    photo: unsplash('1494790108377-be9c29b29330', 120),
  },
  {
    id: 4,
    name: 'Marvin McKinney',
    position: 'Position, Course',
    text,
    photo: unsplash('1507003211169-0a1dd7228f2d', 120),
  },
  {
    id: 5,
    name: 'Cody Fisher',
    position: 'Position, Course',
    text,
    photo: unsplash('1544005313-94ddf0286df2', 120),
  },
]
