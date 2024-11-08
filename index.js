const btn = document.querySelector('button')
const rect = document.querySelector('.rect')
const p = document.createElement('p')

for (let i = 0; i < 7; i++) {
	for (let j = 0; j < 7; j++) {
		var cell = document.createElement('div')
		cell.classList.add('cell')
		cell.style.backgroundColor = `transparent`
		rect.append(cell)
	}
}

if (cell.style.backgroundColor === `transparent`) {
	p.textContent = 'Сгенерируйте лого'
	rect.append(p)
}

const randomFill = () => {
	p.remove()

	rect.querySelectorAll('.cell').forEach(cell => {
		cell.style.backgroundColor = `transparent`
	})

	const color = Math.floor(Math.random() * 16777215).toString(16)

	const numCells = Math.floor(Math.random() * 49) + 1

	for (let i = 0; i < numCells; i++) {
		const x = Math.floor(Math.random() * 7)
		const y = Math.floor(Math.random() * 7)
		const cell = document.querySelector(`.cell:nth-child(${y * 7 + x + 1})`)

		cell.style.backgroundColor = `#${color}`
	}
}

btn.addEventListener('click', randomFill)
