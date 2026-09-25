import clsx from 'clsx'

/** Поле ввода из дизайна. <Input label="Email" placeholder="Your working email" /> */
export default function Input({ label, id, className, inputClassName, ...props }) {
  return (
    <label htmlFor={id} className={clsx('block', className)}>
      {label && <span className="mb-1.5 block text-sm text-gray-800">{label}</span>}
      <input
        id={id}
        className={clsx(
          'h-11 w-full rounded border border-gray-500 bg-white px-4 text-sm text-gray-800 transition-colors outline-none placeholder:text-gray-600 focus:border-primary',
          inputClassName,
        )}
        {...props}
      />
    </label>
  )
}
