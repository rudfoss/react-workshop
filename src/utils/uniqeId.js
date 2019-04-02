export const uniqueId = (prefix) => {
	let counter = 0
	return () => `${prefix}-${counter++}`
}