export function* myFirstGenerator() {
	console.log("myFirstGenerator step 1")
	yield 1
	console.log("myFirstGenerator step 2")
	yield 2
	console.log("myFirstGenerator step 3")
	const newValue = yield 3
	console.log("myFirstGenerator finished with data", newValue)
	return "END"
}