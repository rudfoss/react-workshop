/**
 * Returns a promise that will resolve after the specified number of milliseconds
 * @param {number} delayMs Number of milliseconds to delay the promise
 * @param {any} data Optional data to resolve the promise with 
 */
export const delay = (delayMs, data) => new Promise((resolve) => {
	setTimeout(() => resolve(data), delayMs)
})