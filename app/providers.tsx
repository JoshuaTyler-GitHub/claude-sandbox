'use client';

/**
 * @imports
 */
// node_modules
import { HeroUIProvider } from '@heroui/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

/**
 * @module
 */
declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >;
  }
}

/**
 * @type
 */
export type ProvidersProps = {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
};

/**
 * @component
 */
export function Providers({ children, themeProps }: ProvidersProps) {
  /**
   * @hooks
   */
  const router = useRouter();

  /**
   * @render
   */
  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
