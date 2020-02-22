
const tree = document.querySelector('.tree');
const owl = document.querySelector('.owl');

const treePositionX = tree.offsetLeft;
const treePositionY = tree.offsetTop;

const container = document.querySelector('#app');

const containerHeight = container.offsetHeight;
const containerWidth = container.offsetWidth;

document.addEventListener('keydown', handler);

function handler(event) {
    const owlPositionX = owl.offsetLeft;
    const owlPositionY = owl.offsetTop;

    if (event.key === 'ArrowUp' && owlPositionY > 0) {
        owl.style.top = (owlPositionY - 40) + 'px';
    }

    if (event.key === 'ArrowDown' && owlPositionY < containerHeight - 40) {
        owl.style.top = (owlPositionY + 40) + 'px';
    };

    if (event.key === 'ArrowLeft' && owlPositionX > 0) {
        owl.style.left = (owlPositionX - 40) + 'px';
    }

    if (event.key === 'ArrowRight' && owlPositionX < containerWidth - 40) {
        owl.style.left = (owlPositionX + 40) + 'px';
    }

    if (owl.offsetLeft === treePositionX && owl.offsetTop === treePositionY) {
        alert('Wygrałeś!');
    }
}
