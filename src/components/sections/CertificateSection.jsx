/** «Your expertise will be confirmed» — главная, Courses */
export default function CertificateSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <div>
          <p className="mb-3 text-sm font-bold tracking-wider text-gray-800 uppercase">
            Createx certificate
          </p>
          <h2 className="text-3xl leading-tight md:text-[46px]">
            Your expertise will be confirmed
          </h2>
          <p className="mt-6 max-w-sm text-gray-800">
            We are accredited by international professional organizations and institutes:
          </p>
          <ul className="mt-6 flex flex-wrap items-center gap-8 text-sm font-black tracking-wide text-gray-700 uppercase">
            <li>Del Mar Strategy</li>
            <li>Sentinal Consulting</li>
            <li className="text-marketing">National</li>
          </ul>
        </div>

        {/* TODO: заменить на изображение сертификата из Figma */}
        <div className="relative overflow-hidden rounded bg-white p-10 text-center shadow-card md:p-16">
          <div
            aria-hidden="true"
            className="absolute -top-10 -left-10 size-40 rounded-full bg-management/70"
          />
          <div
            aria-hidden="true"
            className="absolute -right-12 -bottom-12 size-44 rounded-full bg-accent-yellow/80"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-6 left-1/3 size-20 rounded-full bg-marketing/60"
          />
          <p className="relative text-4xl font-black tracking-[0.12em] text-primary md:text-5xl">
            CERTIFICATE
          </p>
          <p className="relative mt-6 text-xs font-bold tracking-widest text-dark uppercase">
            The certificate is presented to:
          </p>
          <p className="relative mt-2 text-3xl text-dark">Jacob William</p>
          <p className="relative mx-auto mt-4 max-w-sm text-xs text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="relative mt-8 flex justify-around text-sm text-dark italic">
            <span>Robert</span>
            <span>Adam</span>
          </div>
        </div>
      </div>
    </section>
  )
}
