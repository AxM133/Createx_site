import { useId, useState } from 'react'
import clsx from 'clsx'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const FIELDS = [
  { name: 'name', label: 'Full name', type: 'text', placeholder: 'Your full name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Your working email' },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Your phone number' },
]

/**
 * Форма записи на курс.
 * layout="row" — баннер со скидкой (поля в строку), "column" — «Register for the course».
 */
export default function JoinCourseForm({
  layout = 'column',
  submitLabel = 'Join the course',
  note,
  className,
}) {
  const id = useId()
  const [sent, setSent] = useState(false)
  const row = layout === 'row'

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div
        className={clsx(
          'grid gap-4',
          row ? 'md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end' : 'gap-6',
        )}
      >
        {FIELDS.map((field) => (
          <Input key={field.name} id={`${id}-${field.name}`} required {...field} />
        ))}
        <Button type="submit" className={clsx(row ? 'md:col-span-2 lg:col-span-1' : 'mt-2 w-full')}>
          {submitLabel}
        </Button>
      </div>
      {note && <p className="mt-4 text-sm text-gray-700">{note}</p>}
      {sent && (
        <p role="status" className="mt-4 animate-fade-up text-sm text-gray-800">
          Thank you! We will contact you shortly.
        </p>
      )}
    </form>
  )
}
