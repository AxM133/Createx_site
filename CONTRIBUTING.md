# Как работать в команде

## 1. Первый запуск

```bash
git clone <url-репозитория>
cd Createx
npm install
git checkout feature/<ваше-имя>-...   # ваша ветка уже создана, см. README
npm run dev
```

В VS Code установите рекомендуемые расширения (Prettier, Tailwind CSS IntelliSense, oxc) — форматирование при сохранении уже настроено в `.vscode/settings.json`.

## 2. Ветки

- `main` — стабильная версия. **Напрямую в `main` не пушим**, только через Pull Request.
- `feature/<имя>-<задача>` — ваша рабочая ветка.

Каждый день перед работой подтягивайте свежий `main`, чтобы не копить конфликты:

```bash
git checkout main && git pull
git checkout feature/<ваша-ветка>
git merge main
```

## 3. Коммиты

Коротко и по делу, в формате `тип: что сделано`:

```
feat: blog posts grid with category filter
fix: sign up password validation
style: contacts form spacing on mobile
refactor: extract EventCard component
```

## 4. Pull Request

1. `npm run check` — должно пройти без ошибок.
2. `git push -u origin feature/<ваша-ветка>`
3. Откройте PR в `main`, заполните шаблон, приложите скриншоты (desktop + mobile).
4. Ревьюер — тимлид. После одобрения — **Squash and merge**.

Лучше несколько небольших PR (например, «Blog: сетка», «Blog: фильтры и пагинация»), чем один огромный в конце.

## 5. Правила, чтобы не мешать друг другу

- **Работайте только в своих файлах** (таблица в README). Роутер, Header, Footer, `index.css` и компоненты в `components/ui`, `components/cards`, `components/sections` — общие: их меняет тимлид или по согласованию в чате.
- Нужен новый компонент только для своей страницы → кладите рядом: `src/pages/Blog/components/...`.
- Нужно поменять общий компонент → лучше добавить новый проп, чем менять поведение для всех. Сообщите в чат.
- Новый цвет/тень → в `@theme` в `src/index.css` через тимлида, не хардкодьте hex.
- Пути — только через `ROUTES` из `@/router/paths`.
- Мок-данные — в `src/data/`. Если нужно новое поле у общих данных — добавляйте, не удаляя существующие.
- Вёрстка должна работать от 360px до 1920px.
