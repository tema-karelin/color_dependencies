function rgb2hex(rgb) {
    var rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
};

// array of colors
const colorsArr = ['#FF462D', '#FF7C3D', '#FFAE57', '#FFD46B', '#FF9A2D', '#FFD42D', '#939B62', '#B5D5C5', '#ABC270', '#025464', '#454545', '#B1D7B4', '#FFF9B0', '#D6E4E5', '#A3BB98', '#000000', '#FAC9AA', '#979C8A', '#C9CAA8', '#FED8AA', '#E3A782', '#000000', '#FFDE59', '#FFBD5B', '#FF914B', '#000000', '#EFC4B3', '#E0A49A', '#EEB560', '#A6AEB2', '#B19CAE', '#000000', '#F18642', '#F4B76F', '#FFE1AE', '#6BA5C4', '#557B9A', '#E3E3E3', '#000000', '#C2D9CC', '#EBA2A2', '#EF9C5B', '#B2BA8A', '#E97D68', '#FFFFFF']

// root
const doc = document.getElementById('root');

// const colorLayout = ''

colorsArr.forEach((el, i) => {
    const color = document.createElement('div');
    color.classList.add("color");
    color.id = i;
    color.style.backgroundColor = el;
    const input = document.createElement('input');
    // input.classList.add('color-input');
    input.type = 'color';
    input.id = 'i_' + i; 
    input.value = el;

    const button = document.createElement('button');
    button.innerHTML = "Change background";
    button.id = 'b_' + i; 

    const p = document.createElement('p');
    p.innerHTML = el;

    color.appendChild(input);
    color.appendChild(p);
    color.appendChild(button);
    doc.appendChild(color);

    input.addEventListener('change', changeColor);
})

function changeColor(el) {
    const clicked = el.target;
    if (clicked.id.slice(0, 1) === 'b') {
        const color = document.getElementById('i'+ clicked.id.slice(1)).value;
        doc.style.backgroundColor = color;
    };
    if (clicked.id.slice(0, 1) === 'i') {
        const color = clicked.value;
        document.getElementById(clicked.id.slice(2)).style.backgroundColor = color;
        // doc.style.backgroundColor = color;
    };
}




doc.addEventListener('click', changeColor);