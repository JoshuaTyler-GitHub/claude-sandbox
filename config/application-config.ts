/**
 * @imports
 */
// lib - enums
import { Environment } from '@lib/enums/environment';

/**
 * @environment
 */
// application
const APPLE_APP_STORE_URL: string =
  process.env.NEXT_PUBLIC_APPLE_APP_STORE_URL ?? '';
const CONTACT_FORM_URL: string = process.env.NEXT_PUBLIC_CONTACT_FORM_URL ?? '';
const COPYRIGHT_YEAR: string = process.env.NEXT_PUBLIC_COPYRIGHT_YEAR ?? '';
const DESCRIPTION: string = process.env.NEXT_PUBLIC_DESCRIPTION ?? '';
const DOMAIN: string = process.env.NEXT_PUBLIC_DOMAIN ?? '';
const ENVIRONMENT: string = process.env.NEXT_PUBLIC_ENVIRONMENT ?? '';
const EULA_URL: string = process.env.NEXT_PUBLIC_EULA_URL ?? '';
const GOOGLE_PLAY_STORE_URL: string =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_STORE_URL ?? '';
const LOCALE: string = process.env.NEXT_PUBLIC_LOCALE ?? 'en-US';
const LOG_LEVEL: string = process.env.NEXT_PUBLIC_LOG_LEVEL ?? '';
const NAME: string = process.env.NEXT_PUBLIC_NAME ?? '';
const OFFLINE_MODE: boolean = process.env.NEXT_PUBLIC_OFFLINE_MODE === 'true';
const VERSION: string = process.env.NEXT_PUBLIC_VERSION ?? '';

// firebase
const FIREBASE_API_KEY: string = process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '';
const FIREBASE_APP_ID: string = process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '';
const FIREBASE_AUTH_DOMAIN: string =
  process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? '';
const FIREBASE_MESSAGING_SENDER_ID: string =
  process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? '';
const FIREBASE_MEASUREMENT_ID: string =
  process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? '';
const FIREBASE_PROJECT_ID: string =
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? '';
const FIREBASE_STORAGE_BUCKET: string =
  process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? '';

// organization
const ORGANIZATION_POLICY_URL: string =
  process.env.NEXT_PUBLIC_ORGANIZATION_POLICY_URL ?? '';

/**
 * @config
 */
export const APPLICATION_CONFIG: {
  apple_app_store_url: string;
  contact_form_url: string;
  copyright_year: string;
  description: string;
  domain: string;
  environment: Environment;
  eula_url: string;
  google_play_store_url: string;
  locale: Intl.Locale;
  logLevel: string;
  name: string;
  offlineMode: boolean;
  version: string;
} = {
  apple_app_store_url: APPLE_APP_STORE_URL,
  contact_form_url: CONTACT_FORM_URL,
  copyright_year: COPYRIGHT_YEAR,
  description: DESCRIPTION,
  domain: DOMAIN,
  environment: ENVIRONMENT as Environment,
  eula_url: EULA_URL,
  google_play_store_url: GOOGLE_PLAY_STORE_URL,
  locale: new Intl.Locale(LOCALE),
  logLevel: LOG_LEVEL,
  name: NAME,
  offlineMode: OFFLINE_MODE,
  version: VERSION,
};

/**
 * @config
 * @see https://lodash.com/docs/#debounce
 */
export const DEBOUNCE_OPTIONS: { leading: boolean; trailing: boolean } = {
  leading: true,
  trailing: true,
};
export const DEBOUNCE_THROTTLE: number = 500;

/**
 * @config
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 */
export const ERROR_DELIMITER: string = ' | ';

/**
 * @config
 * @see https://firebase.google.com/docs/reference/node/firebase#initializeapp
 */
export const FIREBASE_CONFIG: {
  apiKey: string;
  appId: string;
  authDomain: string;
  messagingSenderId: string;
  measurementId: string;
  projectId: string;
  storageBucket: string;
} = {
  apiKey: FIREBASE_API_KEY,
  appId: FIREBASE_APP_ID,
  authDomain: FIREBASE_AUTH_DOMAIN,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
};

/**
 * @config
 */
export const ORGANIZATION_CONFIG: {
  policyUrl: string;
} = {
  policyUrl: ORGANIZATION_POLICY_URL,
};
