

var svg = document.querySelector('#rect');
var rect = svg.removeChild(svg.querySelector('rect'));

var prev = function (n, a) {
    var max = Math.sqrt(n) * Math.sqrt(a);
    return [max, n / max].map(Math.round);
};

const mousePosText = document.getElementById('mouse-pos');
let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
    // mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;

    var grid = prev(parseInt(mousePos.y, 10), innerWidth / innerHeight);
    svg.innerHTML = '';
    svg.setAttribute('viewBox', `0 0 ${grid[0]} ${grid[1]}`);

    var size = grid.reduce((n, a) => n * a, 1);


    for (let i = 0; i < size; i++) {
        let r = svg.appendChild(rect.cloneNode());
        r.setAttribute('x', (i % grid[0]));
        r.setAttribute('y', Math.floor(i / grid[0]));
        r.setAttribute('fill-opacity', Math.random());
    }
});

function draw() {

}

draw();
