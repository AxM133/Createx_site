# Createx Online School

Сайт онлайн-школы Createx на **React 19 + Vite + Tailwind CSS v4 + React Router 7**.

## Быстрый старт

```bash
npm install
npm run dev        # http://localhost:5173
```

Нужен Node.js 22+ (см. `.nvmrc`).

| Команда          | Что делает                                  |
| ---------------- | ------------------------------------------- |
| `npm run dev`    | Dev-сервер                                  |
| `npm run build`  | Продакшн-сборка в `dist/`                   |
| `npm run lint`   | Линтер (oxlint)                             |
| `npm run format` | Отформатировать весь код (Prettier)         |
| `npm run check`  | lint + проверка форматирования + build (CI) |

## Кто что делает

| Разработчик  | Задачи                                              | Файлы                                                                            | Ветка                                   |
| ------------ | --------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------- |
| **Тимлид**   | Header, Footer, HomePage, роутинг, общие компоненты | `src/components/layout/`, `src/pages/Home/`, `src/router/`, `src/components/ui/` | `main`                                  |
| **Бахтовар** | Events (Grid View), Blog (список постов)            | `src/pages/Events/`, `src/pages/Blog/`                                           | `feature/bakhtovar-events-blog`         |
| **Али**      | Sign in, Sign up (модальные окна)                   | `src/components/auth/SignInModal.jsx`, `src/components/auth/SignUpModal.jsx`     | `feature/ali-auth`                      |
| **Шукрулло** | About Us, Contacts, Single Post                     | `src/pages/About/`, `src/pages/Contacts/`, `src/pages/Post/`                     | `feature/shukrullo-about-contacts-post` |
| не назначено | Courses, Single Course, Single Event                | `src/pages/Courses/`, `src/pages/Course/`, `src/pages/Event/`                    | —                                       |

В каждой заготовке страницы уже написано имя разработчика, список задач по макету и какие готовые компоненты можно переиспользовать. Заглушку `PagePlaceholder` удаляйте, когда начинаете верстать.

## Структура

```
src/
├── router/
│   ├── index.jsx          # все роуты (уже зарегистрированы — не трогать без тимлида)
│   └── paths.js           # ROUTES и NAV_LINKS — используйте их вместо строк
├── layouts/MainLayout.jsx # Header + <Outlet/> + Footer + модалки авторизации
├── pages/                 # одна папка = одна страница
│   └── Home/
│       ├── HomePage.jsx
│       └── sections/      # секции, которые нужны только этой странице
├── components/
│   ├── layout/            # Header, Footer
│   ├── ui/                # Button, Input, Badge, Modal, SectionHeading, SocialLinks, SliderArrows, Logo
│   ├── cards/             # CourseCard, EventRow, PostCard, TeamCard
│   ├── sections/          # секции на нескольких страницах: Testimonials, Subscribe, Certificate
│   └── auth/              # модалки Sign in / Sign up
├── context/ + hooks/      # useAuthModal()
├── data/                  # мок-данные: courses, events, posts, team, testimonials, contacts
├── utils/
└── assets/images/         # картинки из Figma
```

Импорты через алиас `@/` → `src/`: `import Button from '@/components/ui/Button'`.

## Роуты

| Путь                 | Страница      |
| -------------------- | ------------- |
| `/`                  | Home          |
| `/about`             | About Us      |
| `/courses`           | Courses       |
| `/courses/:courseId` | Single Course |
| `/events`            | Events        |
| `/events/:eventId`   | Single Event  |
| `/blog`              | Blog          |
| `/blog/:postId`      | Single Post   |
| `/contacts`          | Contacts      |
| `*`                  | 404           |

Sign in / Sign up — модалки, а не роуты. Открыть из любого компонента:

```jsx
import { useAuthModal } from '@/hooks/useAuthModal'
const { openSignIn, openSignUp, close } = useAuthModal()
```

Если у страницы цветной hero под прозрачной шапкой (как на главной), добавьте роуту `handle: { headerOverlay: true }` и дайте hero верхний отступ `pt-20 lg:pt-[92px]`.

## Стили

Дизайн-токены лежат в `src/index.css` (`@theme`). Используйте их, а не hex-коды:

- цвета: `text-primary`, `bg-dark`, `text-gray-800`, `text-gray-700`, `border-gray-400`, `bg-gray-300`
- категории: `bg-marketing`, `bg-management`, `bg-hr`, `bg-design`, `bg-development`
- фоны: `bg-gradient-primary`, `bg-gradient-pink`
- тени: `shadow-card`, `shadow-card-sm`
- контейнер: `container-site` (1200px + отступы)
- шрифт: Lato (подключён в `index.html`)

## Анимации

Без сторонних библиотек: keyframes и утилиты в `src/index.css`, пользователям с `prefers-reduced-motion` анимации отключаются автоматически.

- **Появление при скролле** — оберните блок в `Reveal`:
  ```jsx
  import Reveal from '@/components/ui/Reveal'
  ;<Reveal effect="up" delay={i * 100}>
    ...
  </Reveal> // up | down | left | right | zoom | blur | clip
  ```
  `SectionHeading` уже появляется сам. Для карточек в сетке добавляйте `className="grid"`, чтобы карточка тянулась на всю высоту.
- **Разовые анимации**: `animate-fade-up`, `animate-zoom-in`, `animate-clip-in`, `animate-slide-in-left/right`, `animate-pop`; задержка — `[animation-delay:200ms]`. Чтобы проиграть заново при смене данных, меняйте `key` у элемента.
- **Фоновые**: `animate-float`, `animate-float-slow`, `animate-drift`, `animate-sway`, `animate-ping-ring`, `text-shimmer`.
- **Кривые**: `ease-out-expo` (основная), `ease-spring` (с «пружинкой»).
- **За курсором**: `usePointerVars()` на родителе + `parallax-20` / `-parallax-20`, `tilt`, `glare` на детях (пример — `HeroSection`, `CertificateSection`).
- **Счётчик**: `<CountUp to={1200} />`.

Картинки сейчас временные (Unsplash, через `@/utils/image`). Ассеты из Figma кладите в `src/assets/images/` и импортируйте.

Правила работы с git — в [CONTRIBUTING.md](CONTRIBUTING.md).
