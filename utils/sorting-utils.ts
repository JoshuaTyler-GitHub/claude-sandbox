/**
 * @imports
 */
// config
import { APPLICATION_CONFIG } from '@config/application-config';

// lib - enums
import {
  DEFAULT_SORT_DESCRIPTOR,
  SortDescriptor,
} from '@lib/enums/sort-descriptor';
import { RankedSet } from '@lib/types/ranked-set';

/**
 * @config
 */
const LOCALE: Intl.Locale = APPLICATION_CONFIG.locale;

/**
 * @type
 */
export type Sortable = {
  name: string;
  is_archived?: boolean;
  is_hidden?: boolean;
};

/**
 * @util
 */
export function filterContentSources(
  contentSources: Sortable[] | RankedSet<Sortable>,
  filters: string[],
  searchInput: string,
): Sortable[] {
  const contentSourcesAsArray: Sortable[] = Object.values(contentSources).map(
    (value) => value,
  );

  // filters
  const isArchived: boolean = filters.includes('archived');
  const isDefault: boolean = filters.includes('default');
  const isHidden: boolean = filters.includes('hidden');
  const filteredContentSources = contentSourcesAsArray.filter(
    (contentSource) => {
      if (isArchived && contentSource.is_archived) {
        return true;
      }
      if (isHidden && contentSource.is_hidden) {
        return true;
      }
      if (isDefault && !contentSource.is_archived && !contentSource.is_hidden) {
        return true;
      }
      return false;
    },
  );

  // search
  const lowercaseSearchInput: string = searchInput.toLocaleLowerCase(LOCALE);
  return filteredContentSources.filter((i) =>
    i.name.toLocaleLowerCase(LOCALE).includes(lowercaseSearchInput),
  );
}

/**
 * @util
 */
export function isRankedSet(value: unknown[] | RankedSet<unknown>): boolean {
  return value['0'] !== undefined;
}

/**
 * @util
 */
export function sortContentSources(
  contentSources: Sortable[] | RankedSet<Sortable>,
  sortDescriptor: SortDescriptor = DEFAULT_SORT_DESCRIPTOR,
): { contentSource: Sortable; rank: number }[] {
  // convert to array
  const isContentSourcesRankedSet: boolean = isRankedSet(contentSources);
  const contentSourcesAsArray: {
    contentSource: Sortable;
    rank: number;
  }[] = isContentSourcesRankedSet
    ? Object.entries(contentSources as RankedSet<Sortable>).map(
        ([rank, contentSource]) => ({
          contentSource,
          rank: Number(rank),
        }),
      )
    : (contentSources as Sortable[]).map((contentSource, index) => ({
        contentSource,
        rank: index,
      }));

  // sort by descriptor
  return [...contentSourcesAsArray].sort((a, b) => {
    if (sortDescriptor === SortDescriptor.NameAscending) {
      return b.contentSource.name.localeCompare(a.contentSource.name);
    } else if (sortDescriptor === SortDescriptor.NameDescending) {
      return a.contentSource.name.localeCompare(b.contentSource.name);
    } else if (sortDescriptor === SortDescriptor.RankAscending) {
      return a.rank - b.rank;
    } else {
      return b.rank - a.rank;
    }
  });
}
