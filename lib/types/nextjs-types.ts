/**
 * @imports
 */
// node_modules
import { ReactNode } from 'react';

/**
 * @type
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */
export type NextLayoutProps = NextTemplateProps; // NOSONAR - placeholder

/**
 * @type
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/page
 */
export type NextPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

/**
 * @type
 */
export type NextProviderProps = NextTemplateProps; // NOSONAR - placeholder

/**
 * @type
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/template
 */
export type NextTemplateProps = {
  children: ReactNode;
};
