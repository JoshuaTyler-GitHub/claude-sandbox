export enum Byte {
  BYTES = 'B',
  KILOBYTES = 'KB',
  MEGABYTES = 'MB',
  GIGABYTES = 'GB',
  TERABYTES = 'TB',
}

export enum ByteNames {
  BYTES = 'Byte',
  KILOBYTES = 'Kilobyte',
  MEGABYTES = 'Megabyte',
  GIGABYTES = 'Gigabyte',
  TERABYTES = 'Terabyte',
}

export enum ByteValues {
  BYTES = 1,
  KILOBYTES = 1024,       // NOSONAR (not a magic number)
  MEGABYTES = 1024 ** 2,  // NOSONAR (not a magic number)
  GIGABYTES = 1024 ** 3,  // NOSONAR (not a magic number)
  TERABYTES = 1024 ** 4,  // NOSONAR (not a magic number)
}

export enum MathValues {
  PERCENT = 100,
}

export enum Time {
  DAY = 'day',
  DAYS = 'days',
  HOUR = 'hour',
  HOURS = 'hours',
  MILLISECOND = 'millisecond',
  MILLISECONDS = 'milliseconds',
  MINUTE = 'minute',
  MINUTES = 'minutes',
  MONTH = 'month',
  MONTHS = 'months',
  SECOND = 'second',
  SECONDS = 'seconds',
  WEEK = 'week',
  WEEKS = 'weeks',
  YEAR = 'year',
  YEARS = 'years',
}

export enum TimeShort {
  DAY = 'DD',
  DAY_MONTH_YEAR = 'DD-MM-YY',
  HOUR = 'HH',
  MILLISECOND = 'ss',
  MINUTE = 'm',
  MONTH = 'MM',
  SECOND = 'SS',
  WEEK = 'WW',
  YEAR = 'YY',
  YEAR_MONTH_DAY = 'YYYY-MM-DD',
}

export enum TimeValues {
  DAY = 86400000,     // NOSONAR (not a magic number)
  HOUR = 3600000,     // NOSONAR (not a magic number)
  MILLISECOND = 1,    // NOSONAR (not a magic number)
  MINUTE = 60000,     // NOSONAR (not a magic number)
  MONTH = 2628000000, // NOSONAR (not a magic number)
  SECOND = 1000,      // NOSONAR (not a magic number)
  WEEK = 604800000,   // NOSONAR (not a magic number)
  YEAR = 31536000000, // NOSONAR (not a magic number)
}
