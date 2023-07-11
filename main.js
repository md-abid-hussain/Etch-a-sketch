
const initApp = () => {

    const container = document.getElementById('container')
    const changeGridButton = document.getElementById('changeGrid')
    const colorpalete = document.getElementById('colorpalet')
    const blockRange = document.getElementById('blockRange')
    const rangeValue = document.getElementById('rangeValue')
    let numberOfBlocks = 16
    let color = 'black'

    const onHover = (e) => {
        e.target.style.backgroundColor = color
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
        generateCanvas(Number(e.target.value), onHover)
    })

    colorpalete.addEventListener('change', (e) => {
        color = e.target.value
    })

    changeGridButton.addEventListener('click', () => {
        numberOfBlocks = prompt('Enter number of block\nIt should be integer and greater than 0')
        try {
            numberOfBlocks = BigInt(numberOfBlocks)
            if (numberOfBlocks <= 0 || numberOfBlocks > 64) {
                throw new Error('Enter number greater than 0 and less than 64')
            }
            console.log(numberOfBlocks)
            removeOldCanvas(container)
            generateCanvas(Number(numberOfBlocks), onHover)
        } catch (err) {
            alert(err.message)
            return
        }
    })


    const removeOldCanvas = (container) => {
        console.log(container.childNodes)
        while (container.firstChild) {
            container.firstChild.remove()
        }
    }
}

document.addEventListener("DOMContentLoaded", initApp);