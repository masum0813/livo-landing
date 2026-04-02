import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroVisual from '@site/src/components/HeroVisual';
import StoreBadges from '@site/src/components/StoreBadges';
import styles from './iptv-player-comparison.module.css';

type Locale = 'en' | 'tr';

type ComparisonCard = {
  name: string;
  bestFor: string;
  description: string;
  prosTitle: string;
  pros: string[];
  consTitle: string;
  cons: string[];
};

type Faq = {
  question: string;
  answer: string;
};

type PageContent = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  hero: string;
  heroNote: string;
  snapshotTitle: string;
  snapshotBody: string;
  snapshotCards: Array<{title: string; body: string}>;
  comparisonsTitle: string;
  comparisonsBody: string;
  comparisons: ComparisonCard[];
  prosConsTitle: string;
  prosConsBody: string;
  livoProsTitle: string;
  livoPros: string[];
  livoConsTitle: string;
  livoCons: string[];
  methodologyTitle: string;
  methodologyBody: string;
  faqTitle: string;
  faqs: Faq[];
  ctaTitle: string;
  ctaBody: string;
  links: {
    home: string;
    setup: string;
    m3u: string;
    appleTv: string;
  };
};

const CONTENT: Record<Locale, PageContent> = {
  en: {
    title: 'Livo Player vs Popular IPTV Apps',
    description:
      'Compare Livo Player with popular IPTV apps like TiviMate, IPTV Smarters Pro, OTT Navigator, XCIPTV and Perfect Player. See practical pros and cons by use case.',
    eyebrow: 'IPTV App Comparison',
    h1: 'Livo Player vs the IPTV Apps People Compare Most Often',
    hero:
      'If you are choosing between the most talked-about IPTV apps, the real question is not which one has the longest feature list. It is which player fits your screens, your playlists and your daily viewing habits with the least friction.',
    heroNote:
      'This page compares app positioning and day-to-day trade-offs. Livo only plays user-provided playlists and does not provide channels, subscriptions or media content.',
    snapshotTitle: 'Where Livo Usually Stands Out',
    snapshotBody:
      'Across the comparison links in your report, the same buying criteria show up again and again: device fit, playlist setup, day-to-day clarity and whether the app feels good beyond the first install. That is where Livo has the clearest story.',
    snapshotCards: [
      {
        title: 'Stronger Apple fit',
        body: 'Livo is easier to position when the user cares about Apple TV, iPhone and iPad together instead of a TV-only setup.',
      },
      {
        title: 'Cleaner cross-device routine',
        body: 'The product message is simpler for people who move between television, tablet and phone during the same week.',
      },
      {
        title: 'Less setup anxiety',
        body: 'Livo already leans on M3U and Xtream playlist setup, so the page can emphasize getting from import to playback quickly.',
      },
    ],
    comparisonsTitle: 'Popular IPTV Apps Compared by Use Case',
    comparisonsBody:
      'These are the names that appear most often in the competitor roundups from your report. Instead of pretending every viewer wants the same thing, the comparison below frames each app around the type of user it usually fits best.',
    comparisons: [
      {
        name: 'TiviMate',
        bestFor: 'TV-first Android setup',
        description:
          'Often recommended when someone mainly watches on Android TV or Fire TV and wants a television-first feel.',
        prosTitle: 'Why people choose it',
        pros: [
          'Common pick in TV and Fire TV roundups',
          'Easy to position for living room use',
          'Appeals to users who want a dedicated TV workflow',
        ],
        consTitle: 'Where Livo can feel stronger',
        cons: [
          'Less compelling if the user also values Apple TV, iPhone or iPad continuity',
          'Not the clearest story for people who switch between TV and mobile often',
        ],
      },
      {
        name: 'IPTV Smarters Pro',
        bestFor: 'Broad familiarity',
        description:
          'Frequently mentioned because many users already know the name and expect a familiar all-purpose IPTV app.',
        prosTitle: 'Why people choose it',
        pros: [
          'High name recognition in IPTV comparison articles',
          'Often considered by users who want a familiar starting point',
          'Works well in conversations around basic playlist support',
        ],
        consTitle: 'Where Livo can feel stronger',
        cons: [
          'Livo is easier to position around speed, clarity and lower visual clutter',
          'Livo has a cleaner message for users who want a modern app feel instead of a generic utility feel',
        ],
      },
      {
        name: 'OTT Navigator',
        bestFor: 'Power users',
        description:
          'Usually attracts viewers who like tweaking their setup and want more control over how content is organized.',
        prosTitle: 'Why people choose it',
        pros: [
          'Appeals to users who enjoy detailed control',
          'Fits comparison pages aimed at advanced IPTV users',
          'Feels relevant when the audience wants customization depth',
        ],
        consTitle: 'Where Livo can feel stronger',
        cons: [
          'Livo is easier for everyday users who want less learning curve',
          'Cleaner positioning for households that prioritize ease and consistency over tuning',
        ],
      },
      {
        name: 'XCIPTV',
        bestFor: 'Utility-style playback',
        description:
          'Shows up in many roundups as a practical option for people who mainly want to get a playlist running.',
        prosTitle: 'Why people choose it',
        pros: [
          'Often included in broad top-app lists',
          'Simple to mention when the conversation is about getting started quickly',
          'Useful in more functional, no-frills recommendation threads',
        ],
        consTitle: 'Where Livo can feel stronger',
        cons: [
          'Livo has a better story when polish and device continuity matter',
          'Stronger fit for users who want their IPTV player to feel more productized and less purely utilitarian',
        ],
      },
      {
        name: 'Perfect Player',
        bestFor: 'Classic lightweight feel',
        description:
          'Still appears in comparison content because some users prefer a simpler, more traditional IPTV player style.',
        prosTitle: 'Why people choose it',
        pros: [
          'Recognizable name in older and mixed comparison lists',
          'Appeals to users who prefer a more classic player mindset',
          'Easy shorthand for a no-nonsense IPTV option',
        ],
        consTitle: 'Where Livo can feel stronger',
        cons: [
          'Livo is easier to market as a more modern experience across current devices',
          'Better match for users who care about design clarity and multi-screen continuity',
        ],
      },
    ],
    prosConsTitle: 'Livo Player Pros and Cons',
    prosConsBody:
      'This section focuses only on claims already consistent with the product site and docs. It keeps the comparison page grounded and avoids overpromising.',
    livoProsTitle: 'Pros',
    livoPros: [
      'Built around personal M3U and Xtream playlist playback',
      'Clearer positioning for Apple TV, iPhone and iPad users',
      'Works across TV, phone and tablet instead of a single-screen story',
      'Continue watching and viewing continuity are already part of the site message',
      'Favorites and watch history support reinforce daily use',
      'Cleaner, faster interface is easier to sell than a dense control-panel feel',
    ],
    livoConsTitle: 'Cons',
    livoCons: [
      'Livo does not provide channels, subscriptions or ready-made playlists',
      'The experience still depends on the quality of the user’s own playlist source',
      'Users who want a heavily tweakable power-user workflow may compare it against more specialized alternatives',
    ],
    methodologyTitle: 'How This Comparison Is Framed',
    methodologyBody:
      'The shortlist comes from the competitor names repeated most often in your report links. The copy intentionally compares likely use cases and positioning, not undocumented feature checklists for third-party apps.',
    faqTitle: 'FAQ',
    faqs: [
      {
        question: 'Who is this comparison page for?',
        answer:
          'It is designed for visitors who are actively comparing IPTV apps and want a faster way to understand where Livo fits against the names they already know.',
      },
      {
        question: 'Does Livo provide IPTV content?',
        answer:
          'No. Livo is a player for user-provided playlists only. It does not sell subscriptions, channels or media libraries.',
      },
      {
        question: 'Why focus so much on Apple TV and cross-device use?',
        answer:
          'Because that is one of the clearest ways to position Livo differently from the most repeated comparison targets in your report.',
      },
      {
        question: 'Why are the competitor comparisons use-case based?',
        answer:
          'That keeps the page useful without making risky claims about current third-party feature sets. The goal is to help visitors self-select the right product fit.',
      },
    ],
    ctaTitle: 'Try Livo Player on the Screens You Already Use',
    ctaBody:
      'If your audience wants a modern IPTV player with a cleaner interface, personal playlist support and a better Apple-to-mobile story, this is the angle worth leading with.',
    links: {
      home: 'Visit homepage',
      setup: 'Read setup guide',
      m3u: 'Open M3U page',
      appleTv: 'See Apple TV page',
    },
  },
  tr: {
    title: 'Livo Player ve Popüler IPTV Uygulamaları Karşılaştırması',
    description:
      "Livo Player'ı TiviMate, IPTV Smarters Pro, OTT Navigator, XCIPTV ve Perfect Player gibi popüler IPTV uygulamalarıyla karşılaştırın. Kullanım senaryosuna göre pratik pros / cons görün.",
    eyebrow: 'IPTV Uygulama Kıyaslaması',
    h1: "Livo Player'ı En Sık Karşılaştırılan IPTV Uygulamalarıyla Yan Yana Koyun",
    hero:
      "En çok konuşulan IPTV uygulamaları arasında seçim yapılırken asıl soru hangi uygulamanın daha uzun özellik listesine sahip olduğu değildir. Asıl soru; hangi player'ın ekranlarınıza, listelerinize ve günlük izleme alışkanlıklarınıza daha az sürtünmeyle uyduğudur.",
    heroNote:
      "Bu sayfa uygulamaların günlük kullanım hissini ve konumlandırmasını kıyaslar. Livo yalnızca kullanıcı tarafından sağlanan oynatma listelerini çalıştırır; kanal, abonelik veya medya içeriği sunmaz.",
    snapshotTitle: "Livo'nun Genelde Öne Çıktığı Yerler",
    snapshotBody:
      "Raporundaki kıyaslama linklerinde aynı seçim kriterleri tekrar ediyor: cihaz uyumu, liste kurulumu, günlük kullanım netliği ve uygulamanın ilk kurulumdan sonra nasıl hissettirdiği. Livo'nun en net hikayesi burada oluşuyor.",
    snapshotCards: [
      {
        title: 'Apple tarafında daha güçlü anlatı',
        body: "Kullanıcı Apple TV, iPhone ve iPad'i birlikte önemsiyorsa Livo'yu konumlandırmak daha kolay oluyor.",
      },
      {
        title: 'Daha temiz çoklu cihaz akışı',
        body: 'Aynı hafta içinde TV, tablet ve telefon arasında geçen kullanıcılar için ürün mesajı daha anlaşılır kalıyor.',
      },
      {
        title: 'Daha az kurulum stresi',
        body: "Livo zaten M3U ve Xtream liste kurulumuna yaslandığı için sayfa, içe aktarımdan oynatmaya hızlı geçişi vurgulayabiliyor.",
      },
    ],
    comparisonsTitle: 'Popüler IPTV Uygulamaları ve Kullanım Senaryoları',
    comparisonsBody:
      'Bunlar, rapordaki rakip içeriklerinde en sık geçen isimler. Her kullanıcının aynı şeyi istemediğini kabul ederek aşağıdaki bölüm her uygulamayı en çok hangi kullanıcı tipine uyduğuna göre konumluyor.',
    comparisons: [
      {
        name: 'TiviMate',
        bestFor: 'TV odaklı Android kurulum',
        description:
          'Genelde Android TV veya Fire TV üzerinde izleyen ve televizyon merkezli bir his isteyen kullanıcılar için öneriliyor.',
        prosTitle: 'Neden tercih ediliyor',
        pros: [
          'TV ve Fire TV listelerinde çok sık geçiyor',
          'Salon kullanımı için anlatması kolay',
          'Sadece TV etrafında kurulu kullanım senaryolarına iyi oturuyor',
        ],
        consTitle: "Livo'nun daha güçlü hissedebileceği nokta",
        cons: [
          'Apple TV, iPhone ve iPad sürekliliği önemliyse Livo daha net ayrışıyor',
          'TV ile mobil arasında sık geçiş yapan kullanıcılar için hikayesi daha zayıf kalabiliyor',
        ],
      },
      {
        name: 'IPTV Smarters Pro',
        bestFor: 'Yaygın bilinirlik',
        description:
          'Birçok kullanıcı ismi zaten bildiği için geniş kitleye hitap eden tanıdık bir başlangıç noktası olarak öne çıkıyor.',
        prosTitle: 'Neden tercih ediliyor',
        pros: [
          'IPTV kıyaslama içeriklerinde adı çok biliniyor',
          'Tanıdık bir seçenek arayan kullanıcılara güven veriyor',
          'Temel oynatma listesi desteği konuşmalarında sıkça düşünülüyor',
        ],
        consTitle: "Livo'nun daha güçlü hissedebileceği nokta",
        cons: [
          'Livo hız, netlik ve düşük görsel kalabalık üzerinden daha rahat konumlandırılabiliyor',
          'Modern ürün hissi isteyen kullanıcılar için Livo’nun mesajı daha temiz',
        ],
      },
      {
        name: 'OTT Navigator',
        bestFor: 'Güç kullanıcıları',
        description:
          'Kurulumunu ince ayarlamayı seven ve içeriği nasıl organize ettiğini daha fazla kontrol etmek isteyen kitleye hitap ediyor.',
        prosTitle: 'Neden tercih ediliyor',
        pros: [
          'Detaylı kontrol seven kullanıcıları çekiyor',
          'İleri seviye IPTV kullanıcılarına dönük içeriklerde anlamlı duruyor',
          'Özelleştirme derinliği arayan kitleye uygun bir isim',
        ],
        consTitle: "Livo'nun daha güçlü hissedebileceği nokta",
        cons: [
          'Livo günlük kullanıcı için daha düşük öğrenme eşiği sunuyor',
          'Ayardan çok kolaylık ve tutarlılık isteyen hanelerde Livo daha iyi oturuyor',
        ],
      },
      {
        name: 'XCIPTV',
        bestFor: 'Pratik kullanım',
        description:
          'Bir listeyi hızlıca çalıştırmak isteyen kullanıcılar için işlevsel bir seçenek olarak pek çok roundup içinde yer alıyor.',
        prosTitle: 'Neden tercih ediliyor',
        pros: [
          'Geniş top-app listelerinde düzenli şekilde görülüyor',
          'Başlamak isteyen kullanıcıya anlatması kolay',
          'Sade ve işlevsel tavsiye başlıklarında kendine yer buluyor',
        ],
        consTitle: "Livo'nun daha güçlü hissedebileceği nokta",
        cons: [
          'Parlaklık ve cihaz sürekliliği önemliyse Livo daha iyi bir anlatı sunuyor',
          "IPTV player'ın sadece araç gibi değil ürün gibi hissetmesini isteyen kullanıcıya daha uygun",
        ],
      },
      {
        name: 'Perfect Player',
        bestFor: 'Klasik hafif player hissi',
        description:
          'Bazı kullanıcılar daha geleneksel ve sade IPTV player yaklaşımını tercih ettiği için hâlâ kıyaslama içeriklerinde görünmeye devam ediyor.',
        prosTitle: 'Neden tercih ediliyor',
        pros: [
          'Eski ve karma listelerde tanınan bir isim',
          'Daha klasik player mantığını seven kullanıcılara hitap ediyor',
          'Gösterişsiz IPTV seçeneği için kısa yol gibi kullanılıyor',
        ],
        consTitle: "Livo'nun daha güçlü hissedebileceği nokta",
        cons: [
          'Livo güncel cihazlarda daha modern bir deneyim olarak anlatılabiliyor',
          'Tasarım netliği ve çoklu ekran akışı önem kazandığında Livo daha iyi eşleşiyor',
        ],
      },
    ],
    prosConsTitle: 'Livo Player için Pros / Cons',
    prosConsBody:
      'Bu bölüm yalnızca ürün sitesinde ve dokümantasyonda zaten desteklenen ifadelere dayanır. Böylece kıyaslama sayfası iddialı değil güvenilir kalır.',
    livoProsTitle: 'Pros',
    livoPros: [
      'Kişisel M3U ve Xtream liste oynatımı etrafında konumlanıyor',
      'Apple TV, iPhone ve iPad kullanıcıları için daha net bir değer önerisi sunuyor',
      'Sadece tek ekran değil TV, telefon ve tablet arasında çalışıyor',
      'İzlemeye devam ve cihazlar arası süreklilik zaten ürün mesajının parçası',
      'Favoriler ve izleme geçmişi günlük kullanımı destekliyor',
      'Temiz ve hızlı arayüz, yoğun kontrol paneli hissine göre daha kolay anlatılıyor',
    ],
    livoConsTitle: 'Cons',
    livoCons: [
      'Livo kanal, abonelik veya hazır oynatma listesi sağlamaz',
      'Deneyim yine kullanıcının kendi liste kaynağının kalitesine bağlıdır',
      'Yoğun özelleştirme isteyen güç kullanıcıları daha niş alternatiflerle kıyaslayabilir',
    ],
    methodologyTitle: 'Bu Kıyaslama Nasıl Kurgulandı?',
    methodologyBody:
      'Kısa liste, raporundaki linklerde en sık tekrarlanan rakip isimlerinden çıkarıldı. Metin özellikle üçüncü taraf uygulamalar için doğrulanmamış özellik listeleri değil, kullanım senaryosu ve ürün konumlandırması üzerinden yazıldı.',
    faqTitle: 'SSS',
    faqs: [
      {
        question: 'Bu karşılaştırma sayfası kim için hazırlandı?',
        answer:
          "Bu sayfa, IPTV uygulamalarını aktif olarak karşılaştıran ve Livo'nun bildikleri isimler arasında nereye oturduğunu hızlı anlamak isteyen ziyaretçiler için hazırlandı.",
      },
      {
        question: 'Livo IPTV içeriği sağlıyor mu?',
        answer:
          'Hayır. Livo yalnızca kullanıcı tarafından sağlanan oynatma listeleri için bir playerdır. Abonelik, kanal veya medya kütüphanesi satmaz.',
      },
      {
        question: 'Neden Apple TV ve çoklu cihaz kullanımı bu kadar vurgulanıyor?',
        answer:
          "Çünkü bu alan, raporundaki tekrar eden kıyaslama hedeflerinden ayrışmak için Livo'nun en net pozisyonlarından biri.",
      },
      {
        question: 'Rakip kıyasları neden kullanım senaryosuna göre yazıldı?',
        answer:
          'Bu yaklaşım, üçüncü taraf uygulamalar hakkında riskli ve güncelliği belirsiz iddialar kurmadan sayfayı faydalı tutar. Amaç ziyaretçinin kendine uygun ürünü daha hızlı seçebilmesi.',
      },
    ],
    ctaTitle: "Livo Player'ı Kullandığınız Ekranlarda Deneyin",
    ctaBody:
      "Hedef kitleniz daha temiz arayüz, kişisel oynatma listesi desteği ve Apple'dan mobile uzanan daha güçlü bir kullanım hikayesi istiyorsa, öne çıkarılacak doğru açı bu.",
    links: {
      home: 'Ana sayfaya git',
      setup: 'Kurulum rehberini aç',
      m3u: 'M3U sayfasını aç',
      appleTv: 'Apple TV sayfasını gör',
    },
  },
};

function normalizeLocale(locale: string): Locale {
  return locale === 'tr' ? 'tr' : 'en';
}

export default function IptvPlayerComparisonPage(): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const locale = normalizeLocale(i18n.currentLocale);
  const page = CONTENT[locale];

  return (
    <Layout title={page.title} description={page.description}>
      <Head>
        <meta name="description" content={page.description} />
      </Head>
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>{page.eyebrow}</span>
              <h1 className={styles.heroTitle}>{page.h1}</h1>
              <p className={styles.heroSubtitle}>{page.hero}</p>
              <StoreBadges className={styles.storeBadges} />
              <p className={styles.heroNote}>{page.heroNote}</p>
            </div>
            <div className={styles.heroShowcase}>
              <HeroVisual />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{page.snapshotTitle}</h2>
              <p className={styles.sectionBody}>{page.snapshotBody}</p>
            </header>
            <div className={styles.kickerGrid}>
              {page.snapshotCards.map((card) => (
                <article key={card.title} className={styles.panel}>
                  <h3 className={styles.panelTitle}>{card.title}</h3>
                  <p className={styles.panelText}>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{page.comparisonsTitle}</h2>
              <p className={styles.sectionBody}>{page.comparisonsBody}</p>
            </header>
            <div className={styles.comparisonGrid}>
              {page.comparisons.map((item) => (
                <article key={item.name} className={styles.comparisonCard}>
                  <div className={styles.comparisonHeader}>
                    <div>
                      <h3 className={styles.comparisonTitle}>{item.name}</h3>
                      <p className={styles.comparisonBody}>{item.description}</p>
                    </div>
                    <span className={styles.fitBadge}>{item.bestFor}</span>
                  </div>

                  <span className={styles.metaLabel}>{item.prosTitle}</span>
                  <ul className={styles.list}>
                    {item.pros.map((point) => (
                      <li key={point} className={styles.listItem}>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <span className={styles.metaLabel}>{item.consTitle}</span>
                  <ul className={styles.list}>
                    {item.cons.map((point) => (
                      <li key={point} className={styles.listItem}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{page.prosConsTitle}</h2>
              <p className={styles.sectionBody}>{page.prosConsBody}</p>
            </header>
            <div className={styles.prosConsGrid}>
              <article className={styles.prosConsPanel}>
                <h3 className={styles.prosConsTitle}>{page.livoProsTitle}</h3>
                <ul className={styles.list}>
                  {page.livoPros.map((point) => (
                    <li key={point} className={styles.listItem}>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
              <article className={styles.prosConsPanel}>
                <h3 className={styles.prosConsTitle}>{page.livoConsTitle}</h3>
                <ul className={styles.list}>
                  {page.livoCons.map((point) => (
                    <li key={point} className={styles.listItem}>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{page.methodologyTitle}</h2>
              <p className={styles.sectionBody}>{page.methodologyBody}</p>
            </header>
            <div className={styles.linkRow}>
              <Link to="/">{page.links.home}</Link>
              <Link to="/docs/setup">{page.links.setup}</Link>
              <Link to="/m3u-iptv-player">{page.links.m3u}</Link>
              <Link to="/apple-tv-iptv-player">{page.links.appleTv}</Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{page.faqTitle}</h2>
            </header>
            <div className={styles.faqGrid}>
              {page.faqs.map((item) => (
                <article key={item.question} className={styles.faqItem}>
                  <h3>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.ctaPanel}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{page.ctaTitle}</h2>
                <p className={styles.sectionBody}>{page.ctaBody}</p>
              </header>
              <StoreBadges className={styles.storeBadges} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
