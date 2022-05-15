function firstTask() {
    const firstElement = document.getElementById('seven');
    const eightElement = document.querySelector('#eight');

    const changeStyle = e => {
        e.target.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }

    firstElement.addEventListener('click', changeStyle)
    eightElement.addEventListener('click', changeStyle)
}

function secondTask() {
    let scaleUp = 1;
    let scaleDown = 1;

    const wrap = document.querySelector('.wrap');

    const image = document.getElementById('image');
    const addElement = document.getElementById('add');
    const increaseElement = document.getElementById('increase');
    const reduceElement = document.getElementById('reduce');
    const deleteElement = document.getElementById('delete');

    addElement.addEventListener('click', () => {
        wrap.appendChild(image);
    });

    increaseElement.addEventListener('click', () => {
        scaleUp++;
        image.style.transform = 'scale('+scaleUp+')';
        scaleDown = scaleUp;
    });

    reduceElement.addEventListener('click', () => {
        if(scaleDown > 1) {
            scaleDown--;
            image.style.transform = 'scale('+scaleDown+')';
            scaleUp = scaleDown;
        }
    });

    deleteElement.addEventListener('click', () => {
        image.remove();
    });
}

firstTask();
secondTask();
