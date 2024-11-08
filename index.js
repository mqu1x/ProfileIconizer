const btn = document.querySelector('button')
const rect = document.querySelector('.rect')

for (let i = 0; i < 7; i++) {
	for (let j = 0; j < 7; j++) {
		const cell = document.createElement('div')
		cell.classList.add('cell')
		rect.append(cell)
	}
}

const randomFill = () => {
	rect
		.querySelectorAll('.cell')
		.forEach(cell => cell.classList.remove('active'))

	const numCells = Math.floor(Math.random() * 49) + 1

	for (let i = 0; i < numCells; i++) {
		const x = Math.floor(Math.random() * 7)
		const y = Math.floor(Math.random() * 7)
		const cell = document.querySelector(`.cell:nth-child(${y * 7 + x + 1})`)

		cell.classList.add('active')
	}
}

randomFill()

btn.addEventListener('click', randomFill)
