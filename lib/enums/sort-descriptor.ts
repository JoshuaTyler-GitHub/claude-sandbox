/**
 * @enum
 */
export enum SortDescriptor {
  NameAscending = 'NameAscending',
  NameDescending = 'NameDescending',
  RankAscending = 'RankAscending',
  RankDescending = 'RankDescending',
}

/**
 * @constants
 */
export const DEFAULT_SORT_DESCRIPTOR: SortDescriptor =
  SortDescriptor.RankAscending;
