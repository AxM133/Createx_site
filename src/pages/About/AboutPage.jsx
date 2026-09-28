import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../components/ui/Reveal';
import CountUp from '../../components/ui/CountUp';
import SmartImage from '../../components/ui/SmartImage';
import { IMG, LINKS } from '../../data/shukrulloImages';
import {
  STATS, VALUES, DIRECTIONS, DIRECTION_TEXT, STEPS, TEAM,
  TESTIMONIALS, PARTNERS_ROW_1, PARTNERS_ROW_2, POSTS,
} from '../../data/shukrulloData';
import s from './AboutPage.module.css';

function Heading({ eyebrow, title, align = 'center' }) {
  return (
    <Reveal className={`${s.heading} ${align === 'left' ? s.headingLeft : ''}`}>
      <span className={s.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
    </Reveal>
  );
}

function VideoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className={s.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={s.videoBox} onClick={(e) => e.stopPropagation()}>
        <button className={s.close} onClick={onClose} aria-label="Close">×</button>
        <video controls autoPlay className={s.video} src="/src/assets/videos/shukrullo/about-promo.mp4">
          
        </video>
        <p className={s.videoHint}></p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className={s.hero}>
      <div className={`${s.container} ${s.heroGrid}`}>
        <div className={s.heroText}>
          <Reveal as="span" className={s.eyebrow}>About us</Reveal>
          <Reveal as="h1" delay={100}>Createx Online School</Reveal>
          <Reveal as="p" delay={200} className={s.lead}>
            Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.
          </Reveal>
          <Reveal as="p" delay={300} className={s.muted}>
            We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.
          </Reveal>
          <Reveal delay={400} className={s.btnRow}>
            <Link to={LINKS.events} className={s.btnOutline}>Explore events</Link>
            <Link to={LINKS.courses} className={s.btnPrimary}>Browse courses</Link>
          </Reveal>
        </div>
        <Reveal variant="right" delay={200} className={s.heroArt}>
          <SmartImage image={IMG.ABOUT_HERO_ILLUSTRATION} alt="Studying illustration" className={s.floatY} />
        </Reveal>
      </div>
      <i className={`${s.blob} ${s.blobA}`} /><i className={`${s.blob} ${s.blobB}`} />
    </section>
  );
}

function VideoStats() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  return (
    <section className={s.section}>
      <div className={`${s.container} ${s.videoGrid}`}>
        <Reveal variant="left">
          <button className={s.watch} onClick={() => setOpen(true)}>
            <span className={s.playBtn}><SmartImage image={IMG.ICON_PLAY} icon /><i /></span>
            <span>Watch Video</span>
          </button>
          <div className={s.videoCover} onClick={() => setOpen(true)}>
            <SmartImage image={IMG.ABOUT_VIDEO_COVER} alt="Video cover" />
            <span className={s.coverPlay}>▶</span>
          </div>
        </Reveal>
        <ul className={s.stats}>
          {STATS.map((st, i) => (
            <Reveal as="li" key={st.label} variant="right" delay={i * 120}>
              <CountUp to={st.value} className={s.statNum} />
              <span className={s.statLabel}>{st.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
      <VideoModal open={open} onClose={close} />
    </section>
  );
}

function Values() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Heading eyebrow="We always stand for" title="Our core values" />
        <ul className={s.values}>
          {VALUES.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 110} className={s.value}>
              <span className={s.valueIcon}><SmartImage image={v.icon} icon alt="" /></span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Directions() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Heading eyebrow="Our main directions" title="What do we teach" />
        <div className={s.dirGrid}>
          {DIRECTIONS.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 120} className={s.dirCard}>
              <div className={s.dirImg}><SmartImage image={d.img} alt={d.title} /></div>
              <div className={s.dirBody}>
                <span className={s.badge} style={{ background: d.color }}>{d.title}</span>
                <p>{DIRECTION_TEXT}</p>
                <Link to={LINKS.courses} className={s.arrowLink}>
                  Check courses <SmartImage image={IMG.ICON_ARROW} icon alt="" />
                </Link>
              </div>
            </Reveal>
          ))}
          <Reveal delay={240} className={`${s.dirCard} ${s.soon}`}><p>New studying program coming soon...</p></Reveal>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className={s.section}>
      <div className={`${s.container} ${s.processGrid}`}>
        <div>
          <Heading eyebrow="Studying process" title="That’s how we do it" align="left" />
          <ol className={s.steps}>
            {STEPS.map((st, i) => (
              <Reveal as="li" key={st.title} delay={i * 130} variant="left">
                <small>STEP {i + 1}</small>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal variant="right" className={s.processArt}>
          <SmartImage image={IMG.ABOUT_PROCESS_ILLUSTRATION} alt="Graduate illustration" className={s.floatY} />
        </Reveal>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Heading eyebrow="Best tutors are all here" title="Meet our team" />
        <div className={s.teamGrid}>
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 100} className={s.member}>
              <div className={s.memberPhoto}>
                <SmartImage image={m.photo} alt={m.name} />
                <div className={s.memberSocial}>
                  {[IMG.ICON_FACEBOOK, IMG.ICON_INSTAGRAM, IMG.ICON_LINKEDIN].map((ic) => (
                    <a key={ic.src} href="#" onClick={(e) => e.preventDefault()}><SmartImage image={ic} icon alt="" /></a>
                  ))}
                </div>
              </div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);
  const count = TESTIMONIALS.length;
  const go = useCallback((n) => setIndex(((n % count) + count) % count), [count]);

  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(() => go(index + 1), 6000);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
  };
  const onDown = (e) => { startX.current = e.clientX; };
  const onUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    startX.current = null;
  };

  return (
    <section className={`${s.section} ${s.grey} ${s.testi}`}>
      <div className={s.container}>
        <Heading eyebrow="Testimonials" title="What our students say" />
        <div className={s.slider} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onKeyDown={onKey} tabIndex={0}>
          <button className={s.arrow} onClick={() => go(index - 1)} aria-label="Previous">←</button>
          <div className={s.slides} onPointerDown={onDown} onPointerUp={onUp} onPointerLeave={() => { startX.current = null; }}>
            {TESTIMONIALS.map((t, i) => {
              const offset = i - index;
              const state = offset === 0 ? s.slideActive : offset < 0 ? s.slidePrev : s.slideNext;
              return (
                <article key={t.name} className={`${s.slide} ${state}`} aria-hidden={offset !== 0}>
                  <span className={s.quote}><SmartImage image={IMG.ICON_QUOTE} icon alt="" /></span>
                  <p>{t.text}</p>
                  <footer>
                    <span className={s.avatar}><SmartImage image={t.avatar} alt={t.name} /></span>
                    <div><b>{t.name}</b><small>{t.role}</small></div>
                  </footer>
                </article>
              );
            })}
          </div>
          <button className={`${s.arrow} ${s.arrowNext}`} onClick={() => go(index + 1)} aria-label="Next">→</button>
        </div>
        <div className={s.dots}>
          {TESTIMONIALS.map((t, i) => (
            <button key={t.name} onClick={() => go(i)} className={`${s.dot} ${i === index ? s.dotOn : ''}`} aria-label={`Slide ${i + 1}`}>
              <span key={`${index}-${paused}`} style={{ animationPlayState: paused ? 'paused' : 'running' }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const row = (items, reverse) => (
    <div className={s.marquee}>
      <div className={`${s.track} ${reverse ? s.reverse : ''}`}>
        {[...items, ...items].map((p, i) => (
          <div className={s.logo} key={`${p.src}-${i}`}><SmartImage image={p} alt="" /></div>
        ))}
      </div>
    </div>
  );
  return (
    <section className={`${s.section} ${s.grey}`}>
      <div className={s.container}>
        <Heading eyebrow="Best jobs for you" title="Our students work here" />
        <Reveal>{row(PARTNERS_ROW_1, false)}{row(PARTNERS_ROW_2, true)}</Reveal>
      </div>
    </section>
  );
}

function LatestPosts() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.postsTop}>
          <Heading eyebrow="Our blog" title="Latest posts" align="left" />
          <Reveal><Link to={LINKS.blog} className={s.btnPrimary}>Go to blog</Link></Reveal>
        </div>
        <div className={s.postGrid}>
          {POSTS.slice(0, 3).map((p, i) => (
            <Reveal key={p.id} delay={i * 120} className={s.post}>
              <Link to={LINKS.post(p.id)} className={s.postCover} style={{ background: p.bg }}>
                <span className={s.type}>{p.type}</span>
                <SmartImage image={p.cover} alt={p.title} />
              </Link>
              <div className={s.meta}>
                <b>{p.category}</b><span>|</span>
                <span className={s.metaItem}><SmartImage image={IMG.ICON_CALENDAR_SMALL} icon alt="" />{p.date}</span>
                {p.time && <><span>|</span><span className={s.metaItem}><SmartImage image={IMG.ICON_CLOCK} icon alt="" />{p.time}</span></>}
              </div>
              <h3><Link to={LINKS.post(p.id)}>{p.title}</Link></h3>
              <p>{p.text}</p>
              <Link to={LINKS.post(p.id)} className={s.arrowLink}>{p.action} <SmartImage image={IMG.ICON_ARROW} icon alt="" /></Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubscribeBlock() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle');
  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) { setState('error'); return; }
    setState('done'); setEmail('');
  };
  return (
    <section className={s.subscribe}>
      <div className={s.container}>
        <Reveal className={s.subInner}>
          <h2>Subscribe to our newsletter</h2>
          <p>Receive new courses, events and blog updates</p>
          <form onSubmit={submit} className={`${s.subForm} ${state === 'error' ? s.shake : ''}`} noValidate>
            <input type="email" placeholder="Your working email" value={email} onChange={(e) => { setEmail(e.target.value); setState('idle'); }} />
            <button className={s.btnPrimary}>{state === 'done' ? 'Subscribed ✓' : 'Subscribe'}</button>
          </form>
          {state === 'error' && <small className={s.err}>Please enter a valid email</small>}
        </Reveal>
      </div>
      <div className={s.subArt}><SmartImage image={IMG.SUBSCRIBE_ILLUSTRATION} alt="" /></div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className={s.page}>
      <Hero />
      <VideoStats />
      <Values />
      <Directions />
      <Process />
      <Team />
      <Testimonials />
      <Partners />
      <LatestPosts />
      <SubscribeBlock />
    </main>
  );
}
