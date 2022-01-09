const arr = [
	'The quick brown fox jumps over the lazy dog',
	'Oozy rat in a sanitary zoo',
	'The quick brown fox jumps over the lazy dog',
]

function Palindrome(arr) {
	arr.forEach((element) => {
		element = element.toLowerCase()
		element = element.replace(/\s/g, '')
		const newElement = element.split('').reverse().join('')

		if (newElement === element) {
			console.log('This is a palindrome')
			return true
		} else {
			console.log('This is not a palindrome')
			return false
		}
	})
}

Palindrome(arr)
