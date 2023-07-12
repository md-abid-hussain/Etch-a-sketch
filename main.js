
const initApp = () => {

    const container = document.getElementById('container')
    const colorpalete = document.getElementById('colorpalet')
    const blockRange = document.getElementById('blockRange')
    const rangeValue = document.getElementById('rangeValue')
    const clearCanvas = document.getElementById('clear')
    const toggleRandom = document.getElementById('random')

    let randomColor = false
    let numberOfBlocks = 16
    let color = 'black'

    const getRandomColor = () => {
        const randomNumber = () => Math.floor(Math.random() * 256)
        return `#${randomNumber()}${randomNumber()}${randomNumber()}`
    }

    const onHover = (e) => {
        e.target.style.backgroundColor = randomColor ? getRandomColor() : color
    }

    const generateCanvas = (numberOfBlocks, onHover) => {
        for (let i = 0; i < numberOfBlocks; i++) {
            const rowDiv = document.createElement('div')
            rowDiv.style.display = 'flex'
            rowDiv.style.flex = '1'
            for (let j = 0; j < numberOfBlocks; j++) {
                const blockDiv = document.createElement('div')
                blockDiv.style.flex = '1'
                blockDiv.addEventListener('mousemove', onHover)
                rowDiv.appendChild(blockDiv)
            }

            container.appendChild(rowDiv)

        }
    }

    generateCanvas(16, onHover)

    blockRange.addEventListener('change', (e) => {
        removeOldCanvas(container)
        rangeValue.innerText = e.target.value
        numberOfBlocks = Number(e.target.value)
        generateCanvas(numberOfBlocks, onHover)
    })

    colorpalete.addEventListener('change', (e) => {
        color = e.target.value
    })

    const removeOldCanvas = (container) => {
        while (container.firstChild) {
            container.firstChild.remove()
        }
    }

    clearCanvas.addEventListener('click', () => {
        removeOldCanvas(container)
        generateCanvas(numberOfBlocks, onHover)
    })

    toggleRandom.addEventListener('click', () => {
        randomColor = !randomColor
    })
}

document.addEventListener("DOMContentLoaded", initApp);