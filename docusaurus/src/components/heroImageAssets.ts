export type HeroImageAsset = {
  alt: string;
  width: number;
  height: number;
  src1x: string;
  src2x: string;
};

export const HERO_IMAGE_ASSETS = {
  tv: {
    alt: 'IPTV player interface on Apple TV',
    width: 1200,
    height: 780,
    src1x: '/img/hero/AppleTV-4K.App-1200.webp',
    src2x: '/img/hero/AppleTV-4K.App-2400.webp',
  },
  tablet: {
    alt: 'IPTV player interface on tablet',
    width: 700,
    height: 500,
    src1x: '/img/hero/iPadPro11-M4-SpaceGray-Landscape-700.webp',
    src2x: '/img/hero/iPadPro11-M4-SpaceGray-Landscape-1400.webp',
  },
  phone: {
    alt: 'Continue watching IPTV on mobile',
    width: 420,
    height: 860,
    src1x: '/img/hero/iPhone17ProMax-Silver-Portrait-420.webp',
    src2x: '/img/hero/iPhone17ProMax-Silver-Portrait-840.webp',
  },
} as const satisfies Record<'tv' | 'tablet' | 'phone', HeroImageAsset>;
