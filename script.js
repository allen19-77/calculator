const charButtons = ['+-', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
buttons.onclick = function (e) {
	if (charButtons.includes(e.target.dataset.id)) {
		calcScreen.innerText = assertInput(calcScreen.innerText, e.target.dataset.id)
	}
}

function assertInput(value, input) {
	if (input == '.') {
		if (value.includes('.')) return value
		return value + '.'
	} else if (input == 0) {
		if (value == 0) return 0
		return value + '0'
	} else if (input == '+-') {
		return value * -1
	} else {
		if (value == 0) return input
		return value + input
	}
}