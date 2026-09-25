/**
 * Временная заглушка страницы. Разработчик удаляет её, когда начинает верстать свою страницу.
 */
export default function PagePlaceholder({
  title,
  developer,
  route,
  design,
  tasks = [],
  reuse = [],
}) {
  return (
    <section className="container-site py-20">
      <div className="mx-auto max-w-3xl rounded border-2 border-dashed border-gray-500 p-8 md:p-12">
        <p className="text-sm font-bold tracking-wider text-primary uppercase">В разработке</p>
        <h1 className="mt-2 text-4xl">{title}</h1>

        <dl className="mt-8 grid gap-4 text-gray-800 sm:grid-cols-[160px_1fr]">
          <dt className="font-bold text-dark">Разработчик</dt>
          <dd className="text-xl font-bold text-primary">{developer}</dd>
          <dt className="font-bold text-dark">Роут</dt>
          <dd>
            <code className="rounded bg-gray-300 px-2 py-0.5">{route}</code>
          </dd>
          {design && (
            <>
              <dt className="font-bold text-dark">Макет</dt>
              <dd>{design}</dd>
            </>
          )}
        </dl>

        {tasks.length > 0 && (
          <>
            <h2 className="mt-10 text-xl">Что сделать</h2>
            <ul className="mt-4 list-disc space-y-1 pl-5">
              {tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </>
        )}

        {reuse.length > 0 && (
          <>
            <h2 className="mt-10 text-xl">Готовые компоненты, которые можно использовать</h2>
            <ul className="mt-4 list-disc space-y-1 pl-5">
              {reuse.map((item) => (
                <li key={item}>
                  <code className="text-sm">{item}</code>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
