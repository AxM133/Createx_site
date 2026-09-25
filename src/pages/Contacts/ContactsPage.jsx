import PagePlaceholder from '@/components/ui/PagePlaceholder'

/**
 * Contacts
 * Разработчик: Шукрулло
 */
export default function ContactsPage() {
  return (
    <PagePlaceholder
      title="Contacts"
      developer="Шукрулло"
      route="/contacts"
      design="Contacts"
      tasks={[
        'Get in touch: email, телефон, адрес, соцсети',
        'Карта (Google Maps iframe или картинка)',
        'Форма «Drop us a line»: First/Last name, Email, Phone, Message, чекбокс, Send message',
        'Валидация обязательных полей',
      ]}
      reuse={['@/data/contacts (CONTACTS)', '@/components/ui/Input, Button, SocialLinks']}
    />
  )
}
