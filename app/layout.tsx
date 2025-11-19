/**
 * @imports
 */
// node_modules
import { Metadata, Viewport } from 'next';
import { ReactElement } from 'react';

// app - providers
import { Providers } from '@app/providers';

// config
import { APPLICATION_CONFIG } from '@config/application-config';

// lib - next
import { NextLayoutProps } from '@lib/types/nextjs-types';

// styles
import '@styles/globals.css';

/**
 * @metadata
 */
const SHARE_IMAGE: string = '/share-image.png';
export const metadata: Metadata = {
  description: APPLICATION_CONFIG.description,
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL(APPLICATION_CONFIG.domain),
  openGraph: {
    description: APPLICATION_CONFIG.description,
    images: SHARE_IMAGE,
    siteName: APPLICATION_CONFIG.name,
    title: APPLICATION_CONFIG.name,
    type: 'website',
    url: APPLICATION_CONFIG.domain,
  },
  title: APPLICATION_CONFIG.name,
  twitter: {
    card: 'summary_large_image',
    description: APPLICATION_CONFIG.description,
    images: SHARE_IMAGE,
    site: '@AppStore',
    title: APPLICATION_CONFIG.name,
  },
};

/**
 * @viewport
 */
export const viewport: Viewport = {
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

/**
 * @component
 * This root layout component defines the entry point for the application.
 * Any component defined here will be rendered on every page.
 *
 * The prop "suppressHydrationWarning" is added to the <html> tag to prevent
 * hydration mismatch warnings that can occur when the server-rendered HTML
 * has a different initial theme from the client-rendered HTML i.e. server
 * default is a light-mode theme but the client prefers a dark-mode theme.
 */
export default async function RootLayout(
  props: Readonly<NextLayoutProps>,
): Promise<ReactElement> {
  /**
   * @props
   */
  const { children } = props;

  /**
   * @render
   */
  return (
    <html lang={'en'} suppressHydrationWarning>
      <body className={'bg-background brand'}>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
