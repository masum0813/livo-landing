# Agent Skill: Docusaurus Frontend Workflow (Türkçe)

Kısa açıklama
- Bu yetenek (`agent-customization`) Docusaurus tabanlı bir web sitesi oluşturan veya taşıyan bir "Senior Front-End Developer" akışını kapsar. Amaç: TR + EN odaklı, landing, docs, blog, ve sabit mağaza sayfalarını (support/privacy/terms) güvenli şekilde migrate etmek ve üretime hazır hale getirmek.

Ne zaman kullanılır
- Mevcut repo Docusaurus içeriyorsa veya site Docusaurus'a taşınıyorsa.
- Hedef: i18n (TR+EN), docs + blog + landing entegrasyonu, Docker ile geliştirme/prod önizleme.

Girdi
- Repo path (çalışma dizini)
- Hangi diller hedef (varsayılan: tr, en)
- Korunacak statik sayfalar (support, privacy, terms)
- Deployment target (Netlify/Vercel/Azure/Cloudflare veya Docker on personal VM)
- CI tercihi (ör. GitHub Actions)

Çıktı
- `SKILL.md` tarafından tarif edilen adımların uygulanması
- Tüm önemli karar noktaları ve kalite kriterleri
- Örnek agent istemleri (prompts) ve kontrol listesi

Adım adım süreç (özet)
1. Keşif
   - `docusaurus/` içeriğini, root static site dosyalarını ve i18n dizinlerini incele.
   - Hangi içerik zaten taşındı, hangisi legacy olarak kalacak tespit et.
2. Mimari karar
   - Hangi sayfalar Docusaurus içinde olacak vs root'ta kalacak.
   - Dil stratejisi: öncelik TR+EN, diğer diller sonraya.
3. Dosya yerleşimi ve yapı
   - `docusaurus/src/pages` → landing + standalone mdx
   - `docusaurus/docs` → ürün dokümanları (sidebar, frontmatter)
   - `docusaurus/blog` → duyurular
   - `docusaurus/static` → logolar, badge'ler, `app-ads.txt`
4. İçerik taşıma
   - Sabit sayfalar (`privacy`, `support`, `terms`) MDX'e taşıma ve frontmatter ekleme
   - Legacy HTML içerik için redirect planı (Netlify/Vercel yönlendirme veya Cloudflare Worker)
5. Tasarım ve bileşenler
   - Homepage bileşenleri: Hero, Features, Badges, CTA
   - Tema (light/dark), CSS modülleri veya Tailwind entegrasyonu kararları
6. i18n
   - `docusaurus/i18n/tr` ve `docusaurus/i18n/en` yapılandırması
   - Çeviri pipeline: ilk el çeviriler + PR ile güncellemeler
7. Geliştirme ve Docker
   - `npm install`, `npm run start` ile lokal doğrulama
   - `docker compose` dev ve prod preview servisleri yapılandırması
8. Test & QA
   - Görsel kontrol (responsive), erişilebilirlik (axe), link check
   - İçerik doğruluğu ve SEO meta kontrolleri
9. CI/CD & Deploy
   - Build, test ve deploy pipeline (örnek: GitHub Actions)
   - Rollout planı: Canary / preview -> prod
10. Yayına alma ve geri dönüş
   - DNS/route switch, eski site yönlendirmeleri
   - İzleme: uptime, logs, analytics

Karar noktaları ve dallanma mantığı
- Tam taşıma mı hibrit mi? (Trafik, SEO, kritik sayfalar belirler)
- i18n kapsamı: aynı anda tüm diller mi yoksa öncelikli diller mi?
- Tema ve UI kit seçimi (mevcut marka kılavuzu vs hızlı MVP)
- Deployment hedefi (statik hosting vs serverless vs Docker on VM)

Kalite kriterleri (tamamlanma kontrolleri)
- `npm run build` hatasız çalışıyor
- E2E kritik sayfalar erişilebilir ve responsive
- Aksesibilite skoru (WCAG) ana sayfa için kontrol edildi
- SEO meta (title/description) her sayfa için var
- `support/privacy/terms` sayfaları eski URL'lerden yönlendiriliyor
- Docker dev ve prod preview çalışıyor (`localhost:3000`, `:3001`)

Ambiguiteler / sorulacaklar
- Deployment hedefi hangisi? (Netlify/Vercel/Azure/Cloudflare)
- CI tercihi var mı? (GitHub Actions önerilir)
- Hangi sayfalar legacy olarak kalmalı?

Örnek agent istemleri (prompts)
- "Docusaurus `docusaurus/docs` için sidebar config oluştur, bölümler: Getting Started, Troubleshooting, Usage"
- "`privacy.html` içeriğini MDX'e dönüştür ve frontmatter ekle"
- "Homepage için Hero bileşeni TSX şablonu üret, görsel responsive olsun"
- "CI workflow: GitHub Actions ile `npm run build` ve accessibility check ekle"

CI & Deploy spesifikleri
- Hedef: Kendi VM içinde Docker konteynerleri ile host etme.
- Önerilen GitHub Actions akışı: `build` (npm run build) → `test` → `docker build` (opsiyonel: push to registry) → deploy (SSH ile VM üzerinde `docker compose up --build`).
- Alternatif: Actions çıktı olarak statik `build` artifact üretip VM'ye kopyalayarak Nginx içinde sunma.

Iterasyon ve doğrulama süreci
1. Minimal çalışma sürümü (landing + privacy + docs index)
2. PR review ve içerik QA
3. i18n çevirilerin eklenmesi
4. Docker dev/prod preview testi
5. CI ile otomatik test ve deploy

DOSYA VE KONUM ÖNERİSİ
- Skill dosyası: `.skills/agent-customization/SKILL.md`
- Kullanıcı projeye ekledikten sonra, agent şu promptlarla kullanabilir: "Apply skill: migrate privacy page to docs as MDX"

NOT: CI tercihiniz olan `GitHub Actions` ve hedefiniz olan `Docker on personal VM` belirtildi — bu SKILL.md'ye işlendi.

Son notlar
- Bu skill, front-end geliştirme akışını standardize eder; belirsiz noktalar için "Ambiguiteler" bölümünde listelenen soruların cevaplanması gerekir.

---

Yazılım mühendisi notu: Belirsiz tercihleri onaylarsanız, bu skill'i kullanarak doğrudan PR için gerekli dosya değişikliklerini önerebilirim.
