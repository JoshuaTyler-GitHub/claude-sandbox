/**
 * @constants
 */
const UUID_V4_LENGTH: number = 36;
const UUID_V4_REGEX = RegExp(
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/i,
);

/**
 * Generates a UUID v4
 * @see uuidV4()
 * @returns {string}
 */
export function uid(): string {
  return uuidV4();
}

/**
 * Paraphrased from RFC-4122:
 * UUid =
 *  time-low "-"
 *  time-mid "-"
 *  time-high-and-version "-"
 *  clock-seq-and-reserved
 *  clock-seq-low "-"
 *  node
 *
 * where:
 *  time-low               = 4hexOctet
 *  time-mid               = 2hexOctet
 *  time-high-and-version  = 2hexOctet
 *  clock-seq-and-reserved = hexOctet
 *  clock-seq-low          = hexOctet
 *  node                   = 6hexOctet
 *  hexOctet               = hexDigit hexDigit
 *  hexDigit =
 *        "0" / "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" /
 *        "a" / "b" / "c" / "d" / "e" / "f" /
 *        "A" / "B" / "C" / "D" / "E" / "F"
 * The version 4 UUID is meant for generating UUids from truly-random or
 * pseudo-random numbers.
 *
 * The algorithm is as follows:
 * -  Set the two most significant bits (bits 6 and 7) of the
 *    clock-seq-and-reserved to zero and one, respectively.
 * -  Set the four most significant bits (bits 12 through 15) of the
 *    time-high-and-version field to 0100
 * -  Set all the other bits to randomly (or pseudo-randomly) chosen
 *    values.
 * @see RFC-4122
 * @return {string}
 */
export function uuidV4(): string {
  const array = new Uint8Array(UUID_V4_LENGTH);
  crypto.getRandomValues(array);

  // set bits 12-15 of time-high-and-version to 0100
  array[14] = 4;

  // set bit 6 of clock-seq-and-reserved to zero
  array[19] = array[19] &= ~(1 << 2);

  // set bit 7 of clock-seq-and-reserved to one
  array[19] = array[19] |= 1 << 3;

  // join the array into a string with dashes
  const uuid: string[] = [];
  array.forEach((value, index) => {
    if (index === 8 || index === 13 || index === 18 || index === 23) {
      uuid.push('-');
    } else {
      uuid.push((value % 16).toString(16));
    }
  });
  return uuid.join('');
}

/**
 * @param {string} uuid
 * @returns {boolean}
 */
export function validateUUIDv4(uuid: string): boolean {
  try {
    return UUID_V4_REGEX.test(uuid);
  } catch {
    return false;
  }
}
