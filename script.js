const charButtons = ['+-', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operButtons = ['+', '-', '*', '/']
let oper
let oldInput
let prevValue
let equalOper
let equalPrevValue

buttons.onclick = function (e) {
	const btn = e.target.dataset.id
	if (charButtons.includes(btn)) {
		calcScreen.innerText = assertInput(calcScreen.innerText, btn)
	} else if (btn == 'CE') {
		calcScreen.innerText = 0
	} else if (btn == 'C') {
		calcScreen.innerText = 0
		oper = null
		prevValue = null
		oldInput = false
	} else if (operButtons.includes(btn)) {
		if (oper && !oldInput) calcScreen.innerText = eval(prevValue + oper + calcScreen.innerText)
		prevValue = calcScreen.innerText
		oper = btn
		oldInput = true
	} else if (btn == '=') {
		if (!oper && !equalOper) return
		if (oper) {
			equalPrevValue = calcScreen.innerText
			calcScreen.innerText = eval(prevValue + oper + calcScreen.innerText)
			equalOper = oper
		} else {
			calcScreen.innerText = eval(calcScreen.innerText + equalOper + equalPrevValue)
		}
		oper = null
		prevValue = null
	}

}

function assertInput(value, input) {
	if (oldInput) {
		value = '0'
		oldInput = false
	}
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

