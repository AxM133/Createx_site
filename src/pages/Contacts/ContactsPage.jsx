import { useState } from 'react';
import Reveal from '../../components/ui/Reveal';
import SmartImage from '../../components/ui/SmartImage';
import { IMG } from '../../data/shukrulloImages';
import { SOCIAL_URLS } from '../../data/contacts';
import s from './ContactsPage.module.css';
  
const INFO = [
  { icon: IMG.ICON_CHAT, label: 'Talk to us:', value: 'hello@createx.com', href: 'mailto:hello@createx.com' },
  { icon: IMG.ICON_PHONE, label: 'Call us:', value: '(405) 555-0128', href: 'tel:+14055550128' },
  { icon: IMG.ICON_PIN, label: 'Address:', value: '2464 Royal Ln. Mesa, New Jersey 45463, USA', href: '#map' },
];
const SOCIALS = [
  [IMG.ICON_FACEBOOK, 'facebook'],
  [IMG.ICON_TWITTER, 'twitter'],
  [IMG.ICON_YOUTUBE, 'youtube'],
  [IMG.ICON_TELEGRAM, 'telegram'],
  [IMG.ICON_INSTAGRAM, 'instagram'],
  [IMG.ICON_LINKEDIN, 'linkedin'],
];

const EMPTY = { first: '', last: '', email: '', phone: '', message: '', agree: true };

function validate(v) {
  const e = {};
  if (!v.first.trim()) e.first = 'Enter your first name';
  if (!v.last.trim()) e.last = 'Enter your last name';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email';
  if (v.phone && !/^[+\d\s()-]{7,}$/.test(v.phone)) e.phone = 'Enter a valid phone';
  if (v.message.trim().length < 5) e.message = 'Write a few words';
  if (!v.agree) e.agree = 'Please agree to continue';
  return e;
}

function Field({ label, error, required, children }) {
  return (
    <label className={`${s.field} ${error ? s.hasError : ''}`}>
      <span>{label}{required && '*'}</span>
      {children}
      <em>{error}</em>
    </label>
  );
}

export default function ContactsPage() {
  const [v, setV] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [shakeKey, setShakeKey] = useState(0);

  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setV((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const err = validate(v);
    setErrors(err);
    if (Object.keys(err).length) { setShakeKey((n) => n + 1); return; }
    setStatus('loading');
    setTimeout(() => { setStatus('done'); setV(EMPTY); }, 1200);
  };

  return (
    <div className={s.page}>
      <section className={`${s.container} ${s.info}`}>
        <div>
          <Reveal as="span" className={s.eyebrow}>Contact info</Reveal>
          <Reveal as="h1" delay={100}>Get in touch</Reveal>
          <ul className={s.list}>
            {INFO.map((i, n) => (
              <Reveal as="li" key={i.label} delay={200 + n * 120} variant="left">
                <span className={s.iconBox}><SmartImage image={i.icon} icon alt="" /></span>
                <div>
                  <small>{i.label}</small>
                  <a href={i.href}>{i.value}</a>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={600} className={s.follow}>
            <b>Follow us:</b>
            <div>
              {SOCIALS.map(([ic, net]) => (
                <a key={net} href={SOCIAL_URLS[net]} target="_blank" rel="noopener noreferrer" aria-label={net} className={s.social}>
                  <SmartImage image={ic} icon alt="" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={200} className={s.mapWrap} id="map">
          <div className={s.map}>
            <SmartImage image={IMG.CONTACT_MAP} alt="Office on the map" />
            <span className={s.pin}><i /><b /></span>
          </div>
        </Reveal>
      </section>

      <section className={`${s.container} ${s.formSection}`}>
        <Reveal variant="left" className={s.art}>
          <SmartImage image={IMG.CONTACT_ILLUSTRATION} alt="Support illustration" className={s.float} />
        </Reveal>

        <Reveal variant="right" className={s.formBox}>
          <span className={s.eyebrow}>Any questions?</span>
          <h2>Drop us a line</h2>

          {status === 'done' ? (
            <div className={s.success}>
              <div className={s.check}><svg viewBox="0 0 52 52"><path d="M14 27l8 8 16-17" /></svg></div>
              <h3>Thank you!</h3>
              <p>Your message has been sent. We will get back to you soon.</p>
              <button className={s.btn} onClick={() => setStatus('idle')}>Send another message</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate key={shakeKey} className={shakeKey ? s.shake : ''}>
              <div className={s.row}>
                <Field label="First Name" required error={errors.first}>
                  <input value={v.first} onChange={set('first')} placeholder="Your first name" />
                </Field>
                <Field label="Last Name" required error={errors.last}>
                  <input value={v.last} onChange={set('last')} placeholder="Your last name" />
                </Field>
              </div>
              <div className={s.row}>
                <Field label="Email" required error={errors.email}>
                  <input type="email" value={v.email} onChange={set('email')} placeholder="Your working email" />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input type="tel" value={v.phone} onChange={set('phone')} placeholder="Your phone number" />
                </Field>
              </div>
              <Field label="Message" required error={errors.message}>
                <textarea rows="5" value={v.message} onChange={set('message')} placeholder="Your message" />
              </Field>
              <div className={s.bottom}>
                <label className={`${s.check2} ${errors.agree ? s.hasError : ''}`}>
                  <input type="checkbox" checked={v.agree} onChange={set('agree')} />
                  <i />
                  <span>I agree to receive communications from Createx Online School</span>
                </label>
                <button className={`${s.btn} ${status === 'loading' ? s.loading : ''}`} disabled={status === 'loading'}>
                  {status === 'loading' ? <span className={s.spinner} /> : 'Send message'}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </section>
    </div>
  );
}
