/**
 * @constants
 */
const POLLING_INTERVAL: number = 100;

/**
 * @param {Function} evaluate
 * @param {number} params.timeout
 * @param {number} params.cooldown
 * @returns {Promise<void>}
 *
 * @default
 * cooldown = 100
 * timeout = Number.MAX_SAFE_INTEGER
 */
export function waitUntil(
  evaluate: () => Promise<boolean>,
  params?: {
    cooldown?: number;
    timeout?: number;
  },
): Promise<void> {
  // handle parameters
  const cooldown = params?.cooldown ?? POLLING_INTERVAL;
  const timeout = params?.timeout ?? Number.MAX_SAFE_INTEGER;

  // create the promise
  return new Promise((resolve, reject) => {
    // start the interval
    const start = Date.now();
    let isRunning = false;
    const interval = setInterval(async () => {
      // avoid overlapping runs
      if (isRunning) {
        return;
      }
      isRunning = true;

      // evaluate the wait condition
      try {
        const value = await evaluate();
        if (value === true) {
          clearInterval(interval);
          resolve();
          return;
        }

        // catch errors from the evaluate function
      } catch (error) {
        clearInterval(interval);
        reject(error as Error);
        return;
      }

      // check for timeout
      if (Date.now() - start > timeout) {
        clearInterval(interval);
        reject(
          new Error(`[TimeUtils.waitUntil()] - timed out after ${timeout}ms`),
        );
        return;
      }

      // reset the running flag
      isRunning = false;
    }, cooldown);
  });
}
