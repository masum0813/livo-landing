---
slug: v0-7-0-release-notes
title: Livo Player v0.7.0 release notes
authors: []
tags: [release-notes, android, tv]
---

Livo Player v0.7.0 focuses on sync, TV usability and playback polish across phone, tablet and Android TV.

<!-- truncate -->

## Added

- Continue Watching sync backed by Firestore, including Home resume cards and cross-session progress restore.
- TV Account QR pairing flow for adding IPTV credentials from a second device.
- Default bundled IPTV playlist seed on first app launch.
- Source-level sync timestamps plus first-save automatic EPG refresh.
- Locale-aware TMDB and Livo metadata requests based on the selected app language.
- Root Firestore rules and index baseline for `continueWatching`.
- Fastlane Google Play metadata preparation guide and EN/TR screenshot folder structure for phone, tablet, and TV uploads.
- Premium manual sync action on Home Continue Watching header with bidirectional sync support.
- Player info panel with dynamic Live/Movie/Series metadata resolution (TMDB-first).
- Series detail pages with lazy-loaded season episodes and episode card readability for TV.
- Subscription model refactor supporting single product with multiple base plans.
- Fastlane deploy lane and screenshot organization for multi-form-factor Play Store uploads.

## Changed

- Home screen layout tightened across mobile and TV, including featured cards, tool cards, section spacing, and Continue Watching presentation.
- Continue Watching cards now use resolved movie and series posters instead of channel logos when metadata is available.
- TV Home and Movie Detail screens now auto-scroll focused sections into view.
- TV player overlay refined with progress-row seeking, deferred seek preview, info-panel focus ownership, and live-edge control cleanup.
- Player fullscreen and live delay behavior improved for phone, tablet, and TV playback parity.
- Android TV branding assets and launcher metadata updated for better launcher compatibility.
- Settings restructured with unified Account/Premium section; Playlist refresh and cache clear relocated to Settings.
- TV navigation state preservation across back navigation and recomposition.
- TV sidebar scroll behavior improved with stale-data fix and one-item reveal logic.
- TV sidebar focus visibility enhanced for light theme with adaptive tokens and scale cues.
- TV grid layouts aligned across Live (3 columns), Movies (5 columns), Series (5 columns) for consistent card density.
- TV grid focused-row auto-scroll algorithm using viewport height and row metrics for accurate scroll targeting.
- TV grid up/down navigation no longer jumps to first/last item at boundaries; focus stays in place when no valid row target exists.
- TV page entry now automatically reveals sidebar selected group item in viewport.
- Series TV cards now show marquee title scrolling only while focused.
- Player startup with improved retry messaging, spinner centering, and telemetry.
- HTTP download streaming to temp files to prevent OOM on large playlist initialization.
- Device-link platform mapping support for Android and iOS cross-platform pairing.
- App name changed from "Livo IPTV" to "Livo Player" across all runtime locales.
- Movies/Series browsing routes no longer gated by premium subscription (premium gates remain for specific features only).

## Fixed

- Movie metadata cache now refreshes correctly when the app language changes.
- TV Movie Detail cast content no longer remains partially off-screen during D-pad navigation.
- Live pause delay UI no longer drifts while playback is paused.
- QR pairing status parsing now matches the backend payload contract.
- TV sidebar scroll no longer fails to reveal focused items after large index jumps.
- Premium sidebar editor sheet now scrollable on mobile when hide/show and reorder lists become long.
- TV grid scroll no longer shows incomplete rows by using accurate viewport plus row-height metrics.
