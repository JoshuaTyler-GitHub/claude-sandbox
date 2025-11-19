/**
 * @type
 */
export type RankedSet<T = string> = { [key: number]: T };

/**
 * @helper
 */
export function addOrReplaceObjectToRankedSet<T extends { id: string }>(
  rankedSet: RankedSet<T>,
  object: T,
): RankedSet<T> {
  const newRankedSet: RankedSet<T> = { ...rankedSet };
  const values: T[] = Object.values(newRankedSet);
  const index: number = values.findIndex((i) => i.id === object.id);
  if (index !== -1) {
    newRankedSet[index] = object;
  } else {
    newRankedSet[values.length] = object;
  }
  return newRankedSet;
}

/**
 * @helper
 */
export function addOrReplaceValueToRankedSet<T = string>(
  rankedSet: RankedSet<T>,
  value: T,
): RankedSet<T> {
  const newRankedSet: RankedSet<T> = { ...rankedSet };
  const values: T[] = Object.values(newRankedSet);
  const index: number = values.findIndex((i) => i === value);
  if (index !== -1) {
    newRankedSet[index] = value;
  } else {
    newRankedSet[values.length] = value;
  }
  return newRankedSet;
}

/**
 * @helper
 */
export function rankedSetFromArray<T = string>(array: T[]): RankedSet<T> {
  const newRankedSet: RankedSet<T> = {};
  array.forEach((value, index) => {
    newRankedSet[index] = value;
  });
  return newRankedSet;
}

/**
 * @helper
 */
export function removeObjectFromRankedSet<T extends { id: string }>(
  rankedSet: RankedSet<T>,
  object: T,
): RankedSet<T> {
  const newRankedSet: RankedSet<T> = { ...rankedSet };
  let index: number = -1;
  Object.entries(newRankedSet).forEach(([rank, value]) => {
    if (object.id === value.id) {
      index = Number(rank);
    }
  });
  if (index !== -1) {
    delete newRankedSet[index];
  }
  return rankedSetFromArray(Object.values(newRankedSet));
}

/**
 * @helper
 */
export function removeValueFromRankedSet<T = string>(
  rankedSet: RankedSet<T>,
  value: T,
): RankedSet<T> {
  const newRankedSet: RankedSet<T> = { ...rankedSet };
  let index: number = -1;
  Object.entries(newRankedSet).forEach(([rank, compare]) => {
    if (value === compare) {
      index = Number(rank);
    }
  });
  if (index !== -1) {
    delete newRankedSet[index];
  }
  return rankedSetFromArray(Object.values(newRankedSet));
}
