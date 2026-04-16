import React from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type NavbarLocaleToggleProps = {
  className?: string;
};

function getAlternatePath(pathname: string, currentLocale: string): string {
  if (currentLocale === 'tr') {
    const withoutLocale = pathname.replace(/^\/tr(?=\/|$)/, '');
    return withoutLocale || '/';
  }

  if (pathname === '/') {
    return '/tr/';
  }

  const normalizedPath = pathname === '/tr' ? '/' : pathname;
  const localizedPath = normalizedPath.startsWith('/tr') ? normalizedPath : `/tr${normalizedPath}`;

  return localizedPath === '/tr/' || localizedPath === '/tr' ? '/tr/' : localizedPath;
}

export default function NavbarLocaleToggle({
  className,
}: NavbarLocaleToggleProps): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const location = useLocation();
  const isTurkish = i18n.currentLocale === 'tr';
  const targetPath = getAlternatePath(location.pathname, i18n.currentLocale);
  const targetLabel = isTurkish ? 'English' : 'Türkçe';
  const relativeHref = `${targetPath}${location.search}${location.hash}`;
  const targetHref =
    typeof window === 'undefined'
      ? relativeHref
      : new URL(relativeHref || '/', window.location.origin).toString();

  return (
    <a
      className={clsx('navbar__link', 'navbarLocaleToggle', className)}
      href={targetHref}
      lang={isTurkish ? 'en' : 'tr'}
      aria-label={isTurkish ? 'Switch language to English' : 'Dili Turkce olarak degistir'}
    >
      {targetLabel}
    </a>
  );
}
