const GEYSER_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/5547b2ac-20ee-4307-8435-a77f7f991d2c.jpg';
const BEAR_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/65c05a42-5aa0-4ea3-9b03-e65c0e78a01d.jpg';
const AVACHA_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/5810b38f-ba82-4e23-ac8b-182067f5c7af.jpg';
const VOLCANO_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/a1825739-5ef6-494b-ad48-30d383f0b273.jpg';

const places = [
  {
    title: 'Ключевской вулкан',
    subtitle: 'Действующий вулкан',
    desc: 'Самый высокий активный вулкан Евразии (4 750 м). Бурит и дымит постоянно — зрелище на всю жизнь.',
    img: VOLCANO_IMG,
    tag: 'Вулкан',
    tagColor: '#C57F4A',
    dist: '500 км от города',
  },
  {
    title: 'Долина гейзеров',
    subtitle: 'Природный заповедник',
    desc: 'Второе по величине гейзерное поле мира. 40 гейзеров, кипящие ключи и горячие водопады.',
    img: GEYSER_IMG,
    tag: 'Заповедник',
    tagColor: '#7DB4B5',
    dist: '180 км от города',
  },
  {
    title: 'Курильское озеро',
    subtitle: 'Медвежий рай',
    desc: 'Крупнейший нерестовый водоём России. Летом здесь собираются сотни бурых медведей на рыбалку.',
    img: BEAR_IMG,
    tag: 'Дикая природа',
    tagColor: '#8B6A3E',
    dist: '350 км от города',
  },
  {
    title: 'Авачинская бухта',
    subtitle: 'Врата Камчатки',
    desc: 'Одна из крупнейших бухт мира. Военно-морская база и отправная точка морских экскурсий.',
    img: AVACHA_IMG,
    tag: 'Бухта',
    tagColor: '#7DB4B5',
    dist: 'В черте города',
  },
  {
    title: 'Мыс Столбчатый',
    subtitle: 'Базальтовые колонны',
    desc: 'Шестигранные базальтовые колонны возрастом 40 млн лет. Природная скульптура у берега океана.',
    img: GEYSER_IMG,
    tag: 'Геология',
    tagColor: '#C57F4A',
    dist: 'о. Кунашир',
  },
  {
    title: 'Мутновский вулкан',
    subtitle: 'Кратер с кислотой',
    desc: 'Активный вулкан с фумаролами, серными полями и ледниками прямо в кратере. Сюрреалистично.',
    img: VOLCANO_IMG,
    tag: 'Вулкан',
    tagColor: '#C57F4A',
    dist: '80 км от города',
  },
];

export default function PlacesPage() {
  return (
    <div style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(197,127,74,0.1)',
              border: '1px solid rgba(197,127,74,0.25)',
              borderRadius: '20px',
              padding: '5px 14px',
              marginBottom: '1rem',
            }}
          >
            <span style={{ color: '#C57F4A', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              🗻 6 мест
            </span>
          </div>
          <h1
            className="section-title"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.75rem' }}
          >
            Места, которые стоит увидеть
          </h1>
          <p style={{ color: '#A8A09A', fontSize: '1.1rem', maxWidth: '560px', lineHeight: 1.7 }}>
            Вулканы, гейзеры, дикие медведи и бескрайние тундровые просторы — природа здесь не церемонится.
          </p>
        </div>

        {/* Grid 3×2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {places.map((place, i) => (
            <div
              key={i}
              className="card-base"
              style={{ overflow: 'hidden', cursor: 'pointer' }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={place.img}
                  alt={place.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div className="gradient-overlay" style={{ position: 'absolute', inset: 0 }} />
                {/* Tag */}
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: `${place.tagColor}22`,
                    border: `1px solid ${place.tagColor}44`,
                    color: place.tagColor,
                    borderRadius: '20px',
                    padding: '4px 12px',
                    fontSize: '0.72rem',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {place.tag}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 700,
                      color: '#F0EDE8',
                      fontSize: '1.125rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {place.title}
                  </h3>
                  <span style={{ color: '#6B6560', fontSize: '0.75rem', whiteSpace: 'nowrap', marginLeft: '8px', paddingTop: '2px' }}>
                    📍 {place.dist}
                  </span>
                </div>
                <div style={{ color: '#7DB4B5', fontSize: '0.8rem', fontFamily: 'Manrope, sans-serif', fontWeight: 500, marginBottom: '0.75rem' }}>
                  {place.subtitle}
                </div>
                <p style={{ color: '#A8A09A', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {place.desc}
                </p>
                <button
                  style={{
                    marginTop: '1.25rem',
                    color: '#C57F4A',
                    fontSize: '0.85rem',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Подробнее →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
