var isValidBrackets = function (s) {
	if (s.length === 1) return false
	let stack = []
	let map = {
		'(': ')',
		'[': ']',
		'{': '}'
	}
	for (let i = 0, len = s.length; i < len; i++) {
		let ele = s[i]
		if (map[ele]) {
			stack.push(map[ele])
			continue
		}
		if (stack.pop() !== ele) return false
	}
	return !stack.length
}