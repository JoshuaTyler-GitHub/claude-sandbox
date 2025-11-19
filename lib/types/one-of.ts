/**
 * @type
 */
export type OneOf<T, K extends keyof T> = Pick<T, K> & {
  [P in keyof Omit<T, K>]?: never;
};
