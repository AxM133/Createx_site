import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Reveal from '../../components/ui/Reveal';
import SmartImage from '../../components/ui/SmartImage';
import { IMG, LINKS } from '../../data/shukrulloImages';
import { POSTS, POST_ACTION } from '../../data/posts';
import { SOCIAL_URLS } from '../../data/contacts';
import NotFoundPage from '../NotFound/NotFoundPage';
import Button from '../../components/ui/Button';
import ArticlesNewsletterSection from '../../components/sections/ArticlesNewsletterSection';
import s from './PostPage.module.css';
  
const TAGS = ['#marketing', '#recruiting', '#coding', '#learning', '#HR', '#self-development'];
const LIST = [
  'A fermentum in morbi pretium aliquam donec tempus.',
  'Vulputate placerat amet pulvinar lorem nisl.',
  'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing.',
  'Etiam duis lobortis in fames ultrices commodo nibh.',
];
/** Тег ведёт в блог с поиском по нему */
const blogSearch = (tag) => `${LINKS.blog}?search=${encodeURIComponent(tag.slice(1).replace('-', ' '))}`;

const SHARE = [
  { icon: IMG.ICON_FACEBOOK, name: 'Facebook', url: (u, t) => `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  { icon: IMG.ICON_TWITTER, name: 'Twitter', url: (u, t) => `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
  { icon: IMG.ICON_LINKEDIN, name: 'LinkedIn', url: (u, t) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
];

function Share({ title }) {
  const [copied, setCopied] = useState(false);
  const open = (fn) => {
    const u = encodeURIComponent(window.location.href);
    window.open(fn(u, encodeURIComponent(title)), '_blank', 'noopener,noreferrer,width=600,height=500');
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(window.location.href); } catch { /* clipboard blocked */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className={s.share}>
      <b>Share:</b>
      {SHARE.map((x) => (
        <button key={x.name} onClick={() => open(x.url)} aria-label={`Share on ${x.name}`} className={s.iconBtn}>
          <SmartImage image={x.icon} icon alt="" />
        </button>
      ))}
      <button onClick={copy} aria-label="Copy link" className={s.iconBtn}><SmartImage image={IMG.ICON_COPY} icon alt="" /></button>
      <span className={`${s.toast} ${copied ? s.toastOn : ''}`}>Link copied!</span>
    </div>
  );
}

function Sidebar() {
  const [query, setQuery] = useState('');
  const trending = useMemo(
    () => POSTS.filter((p) => p.title.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 3),
    [query],
  );
  return (
    <aside className={s.side}>
      <Reveal className={s.search}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search blog..." />
        <SmartImage image={IMG.ICON_SEARCH} icon alt="" />
      </Reveal>

      <Reveal delay={80} className={s.widget}>
        <h4>Author</h4>
        <div className={s.author}>
          <div className={s.authorPhoto}><SmartImage image={IMG.TEAM_3} alt="Kristin Watson" /></div>
          <div>
            <b>Kristin Watson</b>
            <small>Curator of Marketing Course</small>
            <div className={s.authorSocial}>
              {[
                [IMG.ICON_INSTAGRAM, 'instagram'],
                [IMG.ICON_TWITTER, 'twitter'],
                [IMG.ICON_LINKEDIN, 'linkedin'],
              ].map(([ic, net]) => (
                <a key={net} href={SOCIAL_URLS[net]} target="_blank" rel="noopener noreferrer" aria-label={net}><SmartImage image={ic} icon alt="" /></a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={160} className={s.widget}>
        <h4>Trending articles</h4>
        <ul className={s.trend}>
          {trending.length === 0 && <li className={s.empty}>Nothing found</li>}
          {trending.map((p) => (
            <li key={p.id}>
              <Link to={LINKS.post(p.id)}>
                <span className={s.thumb} style={{ background: p.bg }}><SmartImage image={p.cover} alt="" /></span>
                <span>
                  <small><SmartImage image={IMG.ICON_CALENDAR_SMALL} icon alt="" /> {p.date}</small>
                  <b>{p.title}</b>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={240} className={s.widget}>
        <h4>Tags</h4>
        <div className={s.tags}>
          {TAGS.map((t) => (
            <Link key={t} to={blogSearch(t)} className={s.tag}>{t}</Link>
          ))}
        </div>
      </Reveal>
    </aside>
  );
}

function Related({ currentId }) {
  const ref = useRef(null);
  const items = POSTS.filter((p) => String(p.id) !== String(currentId));
  const scroll = (dir) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * (el.firstChild.offsetWidth + 24), behavior: 'smooth' });
  };
  return (
    <section className={s.related}>
      <div className={s.container}>
        <div className={s.relTop}>
          <Reveal><span className={s.eyebrow}>Blog</span><h2>You may also like</h2></Reveal>
          <div className={s.relArrows}>
            <button onClick={() => scroll(-1)} aria-label="Previous">←</button>
            <button onClick={() => scroll(1)} aria-label="Next" className={s.relNext}>→</button>
          </div>
        </div>
        <div className={s.relTrack} ref={ref}>
          {items.map((p) => (
            <article key={p.id} className={s.card}>
              <Link to={LINKS.post(p.id)} className={s.cover} style={{ background: p.bg }}>
                <span className={s.type}>{p.type}</span>
                <SmartImage image={p.cover} alt={p.title} />
              </Link>
              <div className={s.meta}><b>{p.category}</b><span>|</span><span>{p.date}</span></div>
              <h3><Link to={LINKS.post(p.id)}>{p.title}</Link></h3>
              <p>{p.excerpt}</p>
              <Link to={LINKS.post(p.id)} className={s.readMore}>{POST_ACTION[p.type]} <SmartImage image={IMG.ICON_ARROW} icon alt="" /></Link>
            </article>
          ))}
        </div>
        <Reveal className="mt-16 flex flex-wrap items-center justify-center gap-6 text-center">
          <p className="text-2xl font-black text-dark md:text-[28px]">Do you want more articles, podcasts and videos?</p>
          <Button to={LINKS.blog}>Go to blog</Button>
        </Reveal>
      </div>
    </section>
  );
}

export default function PostPage() {
  const { postId } = useParams();
  const post = POSTS.find((p) => String(p.id) === String(postId));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [postId]);

  if (!post) return <NotFoundPage />;
  const { title } = post;

  return (
    <div className={s.page}>
      <div className={s.progress} style={{ transform: `scaleX(${progress / 100})` }} />
      <div className={`${s.container} ${s.layout}`}>
        <article className={s.article}>
          <Reveal className={s.top}>
            <span className={s.type2}>{post.type}</span><span className={s.sep} />
            <Link to={`${LINKS.blog}?category=${encodeURIComponent(post.category)}`} className={s.cat}>{post.category}</Link>
          </Reveal>
          <Reveal as="h1" delay={80}>{title}</Reveal>
          <Reveal delay={160} className={s.metaRow}>
            <span><SmartImage image={IMG.ICON_CALENDAR_SMALL} icon alt="" /> {post.date}</span>
            <span><SmartImage image={IMG.ICON_CLOCK} icon alt="" /> {post.duration} read</span>
            <Share title={title} />
          </Reveal>

          <Reveal variant="zoom" delay={120} className={s.hero}>
            <SmartImage image={IMG.POST_HERO} alt={title} />
          </Reveal>

          <div className={s.body}>
            <Reveal as="p" className={s.leadP}>
              Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, purus. Auctor nullam diam quis est hendrerit ac euismod.
            </Reveal>
            <Reveal as="p">At facilisi sapien posuere neque netus nunc. Tortor senectus in et sagittis, vitae duis dignissim. Varius ad placerat tempus porttitor at quis fringilla. Vel nec rhoncus, non nunc, neque in maso. Feugiat leo nam nibh mattis faucibus. Amet, morbi sed pharetra, elit nunc. Condimentum orci vestibulum libero duis, nisl massa, elementum ultrices, nam. Nunc felis, porttitor aliquam non aliquet non elit sed. Nunc felis, porttitor.</Reveal>

            <Reveal as="blockquote" className={s.quote}>
              <span className={s.qMark}><SmartImage image={IMG.ICON_QUOTE} icon alt="" /></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Vel accumsan at elit neque. Ipsum.
            </Reveal>

            <Reveal as="p">Mauris amet arcu nisl vel dictum, sed rhoncus, ut sed id neque amet non fringilla blandit.</Reveal>

            <ul className={s.list}>
              {LIST.map((t, i) => (
                <Reveal as="li" key={t} variant="left" delay={i * 90}><i />{t}</Reveal>
              ))}
            </ul>

            <Reveal variant="zoom" className={s.inline}>
              <SmartImage image={IMG.POST_INLINE} alt="" />
            </Reveal>

            <Reveal as="p">Enim, vel massa odio dolor. Blandit rhoncus id dolor elementum id sed nec leo. Nisi urna, risus, consectetur volutpat sed feugiat. Consectetur neque at aliquam donec. Vel nec rhoncus, non nunc, neque in maso. Feugiat leo nam nibh mattis faucibus. Amet, morbi sed pharetra elit nunc. Viverra ut lobortis sagittis curabitur tellus.</Reveal>
          </div>

          <div className={s.footRow}>
            <div className={s.tags}>
              <b>Tags:</b>
              {['#learning', '#HR', '#self-development'].map((t) => <Link key={t} to={blogSearch(t)} className={s.tagStatic}>{t}</Link>)}
            </div>
            <Share title={title} />
          </div>
        </article>

        <Sidebar />
      </div>

      <ArticlesNewsletterSection />
      <Related currentId={postId} />
    </div>
  );
}
