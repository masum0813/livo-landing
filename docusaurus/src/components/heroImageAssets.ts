export type HeroImageAsset = {
  alt: string;
  width: number;
  height: number;
  src: string;
  sources: Array<{
    src: string;
    width: number;
  }>;
};

export const HERO_IMAGE_ASSETS = {
  tv: {
    alt: 'IPTV player interface on Apple TV',
    width: 1200,
    height: 780,
    src: '/img/hero/AppleTV-4K.App-1200.webp',
    sources: [
      {src: '/img/hero/AppleTV-4K.App-800.webp', width: 800},
      {src: '/img/hero/AppleTV-4K.App-1200.webp', width: 1200},
      {src: '/img/hero/AppleTV-4K.App-1600.webp', width: 1600},
    ],
  },
  tablet: {
    alt: 'IPTV player interface on tablet',
    width: 700,
    height: 500,
    src: '/img/hero/iPadPro11-M4-SpaceGray-Landscape-480.webp',
    sources: [
      {src: '/img/hero/iPadPro11-M4-SpaceGray-Landscape-320.webp', width: 320},
      {src: '/img/hero/iPadPro11-M4-SpaceGray-Landscape-480.webp', width: 480},
      {src: '/img/hero/iPadPro11-M4-SpaceGray-Landscape-700.webp', width: 700},
    ],
  },
  phone: {
    alt: 'Continue watching IPTV on mobile',
    width: 420,
    height: 860,
    src: '/img/hero/iPhone17ProMax-Silver-Portrait-320.webp',
    sources: [
      {src: '/img/hero/iPhone17ProMax-Silver-Portrait-240.webp', width: 240},
      {src: '/img/hero/iPhone17ProMax-Silver-Portrait-320.webp', width: 320},
      {src: '/img/hero/iPhone17ProMax-Silver-Portrait-420.webp', width: 420},
    ],
  },
} as const satisfies Record<'tv' | 'tablet' | 'phone', HeroImageAsset>;
