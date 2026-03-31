---
slug: v0-7-0-release-notes
title: Livo Player v0.7.0 surum notlari
authors: []
tags: [surum-notlari, android, tv]
---

Livo Player v0.7.0, telefon, tablet ve Android TV genelinde senkronizasyon, TV kullanilabilirligi ve oynatma deneyimine odaklanir.

<!-- truncate -->

## Eklenenler

- Firestore destekli Continue Watching senkronizasyonu; Home resume kartları ve oturumlar arasındaki ilerleme geri yükleme desteği.
- IPTV kimlik bilgilerini ikinci bir cihazdan eklemek için TV Account QR eşleştirme akışı.
- Uygulamanın ilk açılışında varsayılan gömülü IPTV playlist seed desteği.
- Kaynak seviyesinde sync timestamp alanları ve ilk kayıtta otomatik EPG yenileme.
- Seçilen uygulama diline göre locale-aware TMDB ve Livo metadata istekleri.
- `continueWatching` için root Firestore rules ve index temel yapısı.
- Telefon, tablet ve TV yüklemeleri için EN/TR screenshot klasör yapısı ve Fastlane Google Play metadata hazırlama rehberi.
- Home Continue Watching başlığına premium manuel sync aksiyonu ve çift yönlü sync desteği.
- TMDB-oncelikli dinamik Live/Movie/Series metadata çözümlemesi yapan player info paneli.
- Lazy-loaded sezon bölümleri ve TV okunabilirliği iyileştirilmiş episode kartlarıyla series detail sayfaları.
- Tek ürün altında birden fazla base plan destekleyen subscription model refactor çalışması.
- Çoklu form-factor Play Store yüklemeleri için Fastlane deploy lane ve screenshot organizasyonu.

## Değişenler

- Home ekran düzeni mobil ve TV genelinde sıkılaştırıldı; featured kartlar, tool kartlar, bölüm boşlukları ve Continue Watching sunumu güncellendi.
- Continue Watching kartları artık metadata mevcutsa kanal logoları yerine çözümlenmiş film ve dizi posterlerini kullanıyor.
- TV Home ve Movie Detail ekranları odaklanan bölümü otomatik olarak görünüme kaydırıyor.
- TV player overlay; progress-row seeking, ertelenmiş seek preview, info-panel focus sahipliği ve live-edge kontrol sadeleştirmeleriyle iyileştirildi.
- Player fullscreen ve live delay davranışı; telefon, tablet ve TV oynatma parity hedefiyle geliştirildi.
- Android TV branding asset'leri ve launcher metadata bilgileri daha iyi launcher uyumluluğu için güncellendi.
- Settings yapısı birleştirilmiş Account/Premium bölümü etrafında yeniden düzenlendi; Playlist refresh ve cache clear aksiyonları Settings altına taşındı.
- TV navigation state, back navigation ve recomposition boyunca korunur hale getirildi.
- TV sidebar scroll davranışı stale-data düzeltmesi ve tek-öğeli reveal mantığıyla iyileştirildi.
- TV sidebar focus görünürlüğü light theme için adaptive token'lar ve scale ipuçlarıyla güçlendirildi.
- TV grid yerleşimleri Live (3 kolon), Movies (5 kolon) ve Series (5 kolon) olarak hizalandı; kart yoğunluğu tutarlı hale getirildi.
- TV grid focused-row auto-scroll algoritması viewport yüksekliği ve satır metrikleri kullanacak şekilde güncellendi.
- TV grid yukarı/aşağı gezinmesi artık sınırda ilk/son öğeye zıplamıyor; geçerli satır hedefi yoksa odak olduğu yerde kalıyor.
- TV sayfa girişinde sidebar'da seçili grup öğe otomatik olarak viewport içinde görünür hale getiriliyor.
- Series TV kartları marquee başlık kaydırmasını yalnızca focus altındayken gösteriyor.
- Player başlangıcı; daha iyi retry mesajı, ortalanmış spinner ve telemetry ile iyileştirildi.
- Buyuk playlist ilk kurulumu sirasinda OOM sorunlarini onlemek icin HTTP indirmeleri temp dosyalara stream ediliyor.
- Android ve iOS arasinda cross-platform pairing icin device-link platform mapping destegi eklendi.
- Uygulama adi tum runtime locale'lerde "Livo IPTV" yerine "Livo Player" olarak guncellendi.
- Movies/Series gezinme rotalari artik premium abonelige bagli degil; premium kisitlari yalnizca belirli ozelliklerde kaldi.

## Düzeltilenler

- Film metadata cache'i uygulama dili değiştiğinde artık doğru şekilde yenileniyor.
- TV Movie Detail cast içeriği D-pad gezinmesinde artık ekranda yarı gizli kalmıyor.
- Live pause delay arayüzü playback duraklatıldığında artık kaymıyor.
- QR pairing status çözümlemesi backend payload contract ile uyumlu hale getirildi.
- TV sidebar scroll, büyük indeks sıçrama durumlarında focus öğesini gösterememe sorununu artık yaşamıyor.
- Premium sidebar editor sheet, hide/show ve reorder listeleri uzadığında mobilde artık kaydırılabiliyor.
- TV grid scroll, doğru viewport ve satır yüksekliği metrikleri kullanılarak artık eksik satır göstermiyor.
