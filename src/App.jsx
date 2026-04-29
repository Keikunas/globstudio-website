import { useEffect, useState } from 'react'
import brandLogo from './assets/globstudio.png'
import './App.css'

const stack = ['Lua', 'JavaScript', 'HTML', 'CSS', 'React', 'Vite']

const serviceCards = [
  {
    icon: 'browser',
    title: 'Reprezentacinės svetainės',
    description: 'Aiškūs puslapiai verslui, paslaugoms ir prekės ženklo pristatymui.',
  },
  {
    icon: 'target',
    title: 'Nukreipimo puslapiai',
    description: 'Vieno tikslo puslapiai reklamai, pasiūlymui ar registracijų surinkimui.',
  },
  {
    icon: 'layers',
    title: 'Funkciniai sprendimai',
    description: 'Mokėjimai, rezervacijos, formos, API sujungimai ir kitos integracijos.',
  },
  {
    icon: 'spark',
    title: 'Individualus pritaikymas',
    description: 'Sprendimai priderinti pagal jūsų veiklą, procesą ir realų poreikį.',
  },
]

const deliveryPoints = [
  'Struktūra ir tekstinė kryptis',
  'Dizainas ir vartotojo patirtis',
  'Programavimas ir paleidimas',
]

const stackBenefits = [
  { icon: 'speed', label: 'Greitas užsikrovimas' },
  { icon: 'controls', label: 'Patogus valdymas' },
  { icon: 'expand', label: 'Paruošta plėtrai' },
]

const workImageModules = import.meta.glob('./assets/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
})

const ignoredWorkAssets = new Set(['hero', 'globstudio'])

const projects = Object.entries(workImageModules)
  .map(([path, image]) => {
    const fileName = path.split('/').pop() ?? ''
    const assetName = fileName.replace(/\.[^.]+$/, '')

    return { assetName, image }
  })
  .filter(({ assetName }) => !ignoredWorkAssets.has(assetName))
  .sort((left, right) => left.assetName.localeCompare(right.assetName, undefined, { numeric: true }))
  .map(({ assetName, image }, index) => {
    return {
      image,
      assetName,
      tone: (index % 3) + 1,
    }
  })

const clientReasons = [
  {
    icon: 'shield',
    title: 'Profesionalus pristatymas',
    description: 'Svetainė formuoja pirmą įspūdį apie jūsų verslą, todėl svarbu, kad ji komunikuotų kokybę, aiškumą ir pasitikėjimą nuo pirmų sekundžių.',
  },
  {
    icon: 'system',
    title: 'Reali verslo funkcija',
    description: 'Sprendimas gali būti pritaikytas ne tik reprezentacijai, bet ir praktiniams veiksmams: užklausoms, mokėjimams, rezervacijoms, registracijoms ar integracijoms su kitomis sistemomis.',
  },
  {
    icon: 'growth',
    title: 'Sprendimas su perspektyva',
    description: 'Tikslas yra sukurti ne trumpalaikį puslapį, o tvirtą pagrindą, kurį galima plėsti kartu su jūsų paslaugomis, augimu ir būsimais poreikiais.',
  },
]

const heroCapabilities = [
  'Mokėjimų sistemų integracijos',
  'Rezervacijos ir registracijos formos',
  'Administravimo sprendimai ir valdymas',
  'API sujungimai ir automatizacija',
]

const signalItems = [
  'Greitas įgyvendinimas',
  'Apmokėjimai ir užsakymai',
  'Integracijos su sistemomis',
  'Aiški struktūra',
  'Pritaikymas jūsų veiklai',
]

const contactChannels = [
  {
    icon: 'mail',
    label: 'El. paštas',
    value: 'heavenrp8@gmail.com',
    href: 'mailto:heavenrp8@gmail.com',
    meta: 'Tinka pilnesnei užklausai, nuorodoms, tekstui ir failams.',
    hint: 'Patogiausia išsamesniam projekto startui',
  },
  {
    icon: 'discord',
    label: 'Discord',
    value: 'globas666',
    href: null,
    meta: 'Patogu greitam aptarimui, klausimams ir operatyviam susirašymui.',
    hint: 'Greičiausias kanalas trumpam kontaktui',
  },
]

const contactChecklist = [
  'Trumpas projekto aprašas',
  'Norimas terminas arba paleidimo data',
  'Pavyzdžiai, nuorodos ar vizualinė kryptis',
]

function SectionIcon({ name }) {
  const toneMap = {
    browser: 'teal',
    target: 'amber',
    layers: 'cyan',
    spark: 'violet',
    speed: 'teal',
    controls: 'amber',
    expand: 'cyan',
    shield: 'amber',
    system: 'cyan',
    growth: 'teal',
    mail: 'teal',
    discord: 'cyan',
    sparkline: 'amber',
    checklist: 'teal',
  }

  const icons = {
    browser: <path d="M5 7h14M5 9h14M9 5v4m3 8 7-8H5l7 8Z" />,
    target: <path d="M12 5v3m0 8v3M5 12h3m8 0h3M12 8a4 4 0 1 0 4 4m-4-7a7 7 0 1 1-7 7" />,
    layers: <path d="m12 4 7 4-7 4-7-4 7-4Zm7 8-7 4-7-4m14 4-7 4-7-4" />,
    spark: <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Zm6 12 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />,
    speed: <path d="M5 14a7 7 0 1 1 14 0m-7 0 4-4M8 18h8" />,
    controls: <path d="M6 7h12M6 12h12M6 17h12M9 7v0M15 12v0M11 17v0" />,
    expand: <path d="M9 5H5v4M15 5h4v4M9 19H5v-4M19 19h-4v-4M9 9 5 5m10 4 4-4M9 15l-4 4m10-4 4 4" />,
    shield: <path d="M12 3 5 6v5c0 4.2 2.7 8 7 10 4.3-2 7-5.8 7-10V6l-7-3Z" />,
    system: <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v3m0 12v3M4.9 4.9l2.1 2.1m9.9 9.9 2.1 2.1M3 12h3m12 0h3M4.9 19.1 7 17m9.9-9.9 2.1-2.1" />,
    growth: <path d="M4 19h16M7 15l4-4 3 3 6-6M15 8h5v5" />,
    mail: <path d="M4 7.5 12 13l8-5.5M5 6h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />,
    discord: <path d="M8.5 8.5c1.3-.9 2.5-1.3 3.5-1.5l.4.8c1-.1 2 .1 3 .4l.4-.8c1 .2 2.2.6 3.5 1.5.8 1.4 1.3 2.8 1.4 4.3-.9 1.1-2 1.9-3.2 2.5l-.8-1.2c.5-.2.9-.5 1.3-.8-.1.1-.3.1-.4.2-2.6 1.2-5.7 1.2-8.3 0-.1-.1-.3-.1-.4-.2.4.3.8.6 1.3.8l-.8 1.2c-1.2-.6-2.3-1.4-3.2-2.5.1-1.5.6-2.9 1.4-4.3ZM10.2 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />,
    sparkline: <path d="M4 16h3l2.5-5 3.2 7 2.5-5H20M5 8h4M15 8h4" />,
    checklist: <path d="M9 7h10M9 12h10M9 17h10M4.5 7l1.5 1.5L8.5 6M4.5 12l1.5 1.5 2.5-2.5M4.5 17l1.5 1.5 2.5-2.5" />,
  }

  return (
    <span className={`section-icon section-icon-${toneMap[name] ?? 'teal'}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {icons[name]}
      </svg>
    </span>
  )
}

function WalkingFigure() {
  return (
    <svg className="walking-figure" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <ellipse cx="40" cy="69" rx="17" ry="5" className="walker-shadow" />

      <g className="walker-body">
        <g className="walker-head-wrap">
          <path className="walker-antenna" d="M40 10v8" />
          <circle cx="40" cy="8" r="3.5" className="walker-antenna-tip" />
          <rect x="25" y="16" width="30" height="24" rx="9" className="walker-head-shell" />
          <rect x="29" y="20" width="22" height="14" rx="6" className="walker-face-screen" />
          <circle cx="36" cy="27" r="2.6" className="walker-eye" />
          <circle cx="44" cy="27" r="2.6" className="walker-eye" />
          <path className="walker-mouth" d="M35 32c1.8 1.6 3.5 2.4 5 2.4 1.5 0 3.2-.8 5-2.4" />
          <circle cx="30.5" cy="28.5" r="1.5" className="walker-cheek" />
          <circle cx="49.5" cy="28.5" r="1.5" className="walker-cheek" />
        </g>

        <g className="walker-back-arm">
          <circle cx="26" cy="43" r="4" className="walker-joint walker-joint-dark" />
          <rect x="19" y="41" width="11" height="7" rx="3.5" className="walker-limb walker-limb-dark" />
          <circle cx="18" cy="46.5" r="3" className="walker-hand-claw" />
        </g>

        <g className="walker-torso-wrap">
          <rect x="27" y="38" width="26" height="22" rx="8" className="walker-torso" />
          <rect x="31" y="42" width="18" height="10" rx="4" className="walker-panel" />
          <circle cx="34" cy="56" r="1.8" className="walker-button" />
          <circle cx="40" cy="56" r="1.8" className="walker-button walker-button-accent" />
          <circle cx="46" cy="56" r="1.8" className="walker-button" />
        </g>

        <g className="walker-front-arm walker-wave-arm">
          <circle cx="54" cy="43" r="4" className="walker-joint" />
          <rect x="53" y="32" width="8" height="17" rx="4" className="walker-limb" />
          <circle cx="57" cy="31" r="3.2" className="walker-hand-claw walker-hand-wave" />
        </g>

        <g className="walker-back-leg">
          <rect x="31" y="58" width="8" height="11" rx="4" className="walker-leg walker-leg-dark" />
          <rect x="28" y="67" width="14" height="5" rx="2.5" className="walker-foot walker-foot-dark" />
        </g>

        <g className="walker-front-leg">
          <rect x="42" y="58" width="8" height="11" rx="4" className="walker-leg" />
          <rect x="40" y="67" width="15" height="5" rx="2.5" className="walker-foot" />
        </g>
      </g>
    </svg>
  )
}

function App() {
  const [activeProject, setActiveProject] = useState(null)
  const [contactOpen, setContactOpen] = useState(false)
  const [showcasePaused, setShowcasePaused] = useState(false)

  const renderShowcaseCard = (project, keySuffix = '') => (
    <button
      key={`${project.assetName}${keySuffix}`}
      type="button"
      className={`showcase-card showcase-card-tone-${project.tone}`}
      onMouseEnter={() => setShowcasePaused(true)}
      onMouseLeave={() => setShowcasePaused(false)}
      onFocus={() => setShowcasePaused(true)}
      onBlur={() => setShowcasePaused(false)}
      onClick={() => setActiveProject(project)}
      aria-label="Atidaryti darbo nuotrauką"
    >
      <div className="showcase-glow" aria-hidden="true" />
      <div className="showcase-preview">
        <img src={project.image} alt="Darbo pavyzdys" className="showcase-image" />
        <div className="showcase-logo-layer" aria-hidden="true">
          <img src={brandLogo} alt="" className="showcase-logo" />
        </div>
        <span className="preview-scan" aria-hidden="true" />
        <span className="preview-orb" aria-hidden="true" />
        <span className="preview-grid" aria-hidden="true" />
      </div>
    </button>
  )

  useEffect(() => {
    if (!activeProject && !contactOpen) {
      document.body.style.overflow = ''
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
        setContactOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject, contactOpen])

  return (
    <>
      <main className="page-shell">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="hero-intro">
              <div className="hero-brand">
                <img src={brandLogo} alt="GlobStudio logotipas" className="hero-logo" />
                <div className="hero-brand-copy">
                  <p className="eyebrow">Kūrybinė svetainių studija</p>
                  <h1>GlobStudio</h1>
                </div>
              </div>
              <p className="lead">
                Studija orientuota į modernias svetaines, vizualų identitetą ir aiškius
                skaitmeninius sprendimus, kurie atrodo solidžiai ir veikia greitai.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#kontaktai">
                  Pradėti projektą
                </a>
                <a className="button-secondary" href="#stack">
                  Mano technologijos
                </a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-badge">Svetainių kūrimas • sąsajos • paleidimas</div>
              <div className="hero-panel-main">
                <div className="hero-panel-copy">
                  <p className="hero-panel-label">Nuo idėjos iki pilnai veikiančios sistemos</p>
                  <h2>Kuriu ne tik paprastas svetaines, bet ir funkcionalius sprendimus verslui.</h2>
                  <p>
                    Jei reikia, svetainėje gali būti įdiegti atsiskaitymai, užsakymų surinkimas,
                    registracijos, rezervacijos, vidinės valdymo funkcijos, išorinės sistemos ir
                    kitos integracijos. Tikslas ne tik gražus vaizdas, o puslapis, kuris realiai
                    dirba jūsų veiklai.
                  </p>
                </div>

                <div className="hero-feature-list" aria-label="Pagrindinės galimybės">
                  {heroCapabilities.map((item, index) => (
                    <div key={`${item}-${index}`} className="hero-feature-item">
                      <span className="hero-feature-dot" aria-hidden="true" />
                      <strong>{item}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="line-section" aria-label="Pagrindiniai akcentai">
        <div className="signal-track" aria-hidden="true">
          <span className="signal-track-line" />
          <div className="signal-walker">
            <WalkingFigure />
          </div>
        </div>
        <div className="signal-strip">
          {signalItems.map((item, index) => (
            <div key={`${item}-${index}`} className="signal-pill">
              <span className="signal-pill-dot" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        </section>

        <section className="content-grid" aria-label="Pagrindinė informacija">
        <article className="panel panel-accent">
          <p className="section-label">Paslaugos</p>
          <h2>Ką galiu sukurti</h2>
          <p className="panel-intro">
            Kuriu ne tik vizualiai stiprius puslapius, bet ir sistemas, kurios padeda priimti
            užsakymus, registracijas, mokėjimus ar kitus veiksmus jūsų svetainėje.
          </p>

          <div className="service-grid">
            {serviceCards.map((service, index) => (
              <article key={`${service.title}-${index}`} className="service-card">
                <div className="card-heading">
                  <SectionIcon name={service.icon} />
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div className="delivery-strip" aria-label="Kas įeina į įgyvendinimą">
            {deliveryPoints.map((item, index) => (
              <span key={`${item}-${index}`} className="delivery-pill">
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="panel panel-plain" id="stack">
          <p className="section-label">Technologijos</p>
          <h2>Technologijos, su kuriomis dirbu</h2>
          <div className="tag-row">
            {stack.map((item, index) => (
              <span key={`${item}-${index}`} className="stack-tag">
                {item}
              </span>
            ))}
          </div>

          <div className="stack-summary">
            <p className="support-text">
              Prioritetas yra švarus kodas, greitas užsikrovimas ir vaizdas, kuris atrodo profesionaliai
              tiek telefone, tiek kompiuteryje.
            </p>

            <div className="stack-benefits" aria-label="Techninis prioritetas">
              {stackBenefits.map((item, index) => (
                <div key={`${item.label}-${index}`} className="stack-benefit-card">
                  <SectionIcon name={item.icon} />
                  <strong>{item.label}</strong>
                </div>
              ))}
            </div>

            <div className="tech-note">
              <span className="tech-note-dot" aria-hidden="true" />
              <p>
                Jei projektui reikia daugiau nei paprasto puslapio, technologinis sprendimas gali būti
                išplėstas pagal jūsų procesus ir būsimas funkcijas.
              </p>
            </div>
          </div>
        </article>
        </section>

        <section className="showcase-section" aria-label="Darbu pavyzdziai">
          <div className="section-heading showcase-heading">
            <p className="section-label">Pavyzdžiai</p>
            <h2>Darbų galerija</h2>
          </div>

          <div className="showcase-marquee">
            <div className={`showcase-belt${showcasePaused ? ' is-paused' : ''}`}>
              <div className="showcase-lane">
                {projects.map((project) => renderShowcaseCard(project))}
              </div>
              <div className="showcase-lane" aria-hidden="true">
                {projects.map((project) => renderShowcaseCard(project, '-clone'))}
              </div>
            </div>
          </div>
        </section>

        <section className="process-section" aria-label="Kliento nauda">
        <div className="section-heading">
          <p className="section-label">Vertė</p>
          <h2>Ką jūs gaunate</h2>
        </div>

        <div className="process-grid">
          {clientReasons.map((item, index) => (
            <article key={`${item.title}-${index}`} className="process-card">
              <div className="process-body process-body-full">
                <div className="card-heading card-heading-large">
                  <SectionIcon name={item.icon} />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        </section>

        <section className="cta-section" id="kontaktai">
        <p className="section-label">Kontaktas</p>
        <h2>Jei norite puslapio, kuris atrodo švariai ir palieka rimtą įspūdį, susisiekime.</h2>
        <p>
          Galiu pritaikyti dizainą pagal jūsų veiklą, auditoriją ir tai, kokį rezultatą puslapis turi atnešti.
        </p>
        <button type="button" className="button-primary" onClick={() => setContactOpen(true)}>
          Parašyti dabar
        </button>
        </section>
      </main>

      {contactOpen ? (
        <div
          className="lightbox contact-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Kontaktai"
          onClick={() => setContactOpen(false)}
        >
          <div className="lightbox-shell contact-shell" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setContactOpen(false)}
              aria-label="Uždaryti kontaktų langą"
            >
              ×
            </button>

            <div className="contact-content">
              <div className="contact-toolbar">
                <div className="contact-status-pill">
                  <span className="contact-status-dot" aria-hidden="true" />
                  Atsakau per 24 val.
                </div>
              </div>

              <div className="contact-hero">
                <div className="contact-hero-copy">
                  <p className="section-label">Kontaktai</p>
                  <h2>Susisiekime</h2>
                  <p className="contact-copy">
                    Parašykite trumpai apie projektą, tikslą ar idėją. Galite rinktis el. paštą
                    arba Discord, o aš atrašysiu su tolimesniais žingsniais.
                  </p>
                </div>

                <div className="contact-hero-side">
                  <div className="contact-mini-panel">
                    <div className="contact-mini-icon">
                      <SectionIcon name="sparkline" />
                    </div>
                    <div>
                      <span className="contact-mini-label">Greičiausiam startui</span>
                      <strong>Brief + tikslas + terminas</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-highlight">
                <span className="contact-highlight-dot" aria-hidden="true" />
                Greičiausias startas: atsiųskite trumpą projekto aprašą ir norimą terminą.
              </div>

              <div className="contact-grid">
                {contactChannels.map((channel) => (
                  <div
                    key={channel.label}
                    className={`contact-card ${channel.icon === 'discord' ? 'contact-card-discord' : ''}`}
                  >
                    <div className="contact-card-head">
                      <div className="contact-card-icon">
                        <SectionIcon name={channel.icon} />
                      </div>
                      <div className="contact-card-heading">
                        <span className="contact-label">{channel.label}</span>
                        <p className="contact-hint">{channel.hint}</p>
                      </div>
                    </div>

                    {channel.href ? (
                      <a className="contact-link" href={channel.href}>
                        {channel.value}
                      </a>
                    ) : (
                      <span className="contact-link contact-link-static">{channel.value}</span>
                    )}

                    <p className="contact-meta">{channel.meta}</p>
                  </div>
                ))}
              </div>

              <div className="contact-checklist" aria-label="Ką verta atsiųsti pirmoje žinutėje">
                {contactChecklist.map((item) => (
                  <div key={item} className="contact-check-item">
                    <div className="contact-check-icon">
                      <SectionIcon name="checklist" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="contact-note">Jei jau turite pavyzdžių ar vizualinę kryptį, pridėkite tai iškart.</p>
            </div>
          </div>
        </div>
      ) : null}

      {activeProject ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Darbo nuotraukos perziura"
          onClick={() => setActiveProject(null)}
        >
          <div className="lightbox-shell" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setActiveProject(null)}
              aria-label="Uzdaryti"
            >
              ×
            </button>
            <img src={activeProject.image} alt="Darbo nuotrauka" className="lightbox-image" />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default App
