/**
 * Временные картинки с Unsplash, пока нет ассетов из Figma.
 * Когда будут экспортированы ассеты — кладите их в src/assets/images и импортируйте.
 */
export const unsplash = (id, width = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${width}&q=80&auto=format&fit=crop`
