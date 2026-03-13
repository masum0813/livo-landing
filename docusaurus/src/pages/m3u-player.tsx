import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

export default function M3uPlayerRedirect(): JSX.Element {
  return (
    <Layout title="M3U Player Redirect" description="Redirecting to the M3U IPTV player page.">
      <Head>
        <meta httpEquiv="refresh" content="0; url=/m3u-iptv-player" />
        <link rel="canonical" href="https://www.livoplayer.com/m3u-iptv-player" />
        <meta name="robots" content="noindex,follow" />
      </Head>
      <main className="container margin-vert--xl">
        <p>
          Redirecting to the <Link to="/m3u-iptv-player">M3U IPTV player page</Link>.
        </p>
      </main>
    </Layout>
  );
}
