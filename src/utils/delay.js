/**
 * Returns a promise that will resolve with the provided data after the given number of milliseconds
 * @param timeoutMs
 * @param withData
 */
export const delay = async (timeoutMs, withData) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(withData)
		}, timeoutMs)
	})
}
