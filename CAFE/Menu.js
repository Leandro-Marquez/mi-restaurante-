document.addEventListener("DOMContentLoaded", () =>{
    const menuItems =
    [
        {
            nombre: "Espresso",
            descripcion:"Espresso puro (agua y granos de café molidos).",
            imagen:"Assets/Images/Clasico.png",
            precio: "300",
        },
        {
            nombre:"Americano",
            descripcion:"Cafe Classico diluido con agua.",
            imagen:"Assets/Images/Americano.png",
            precio: "300",
        },
        {
            nombre:"Cafe Frio",
            descripcion:"Cafe,hielo triturado, leche al vapor y un toque de vainilla.",
            imagen:"Assets/Images/Cafe Frio.png",
            precio: "500",
        },
        {
            nombre:"Cappuccino",
            descripcion:"Partes iguales de espresso, leche al vapor y espuma densa.",
            imagen:"Assets/Images/Cappuccino.png",
            precio: "500",

        },
        {
            nombre:"Cortado",
            descripcion:"Un shot de espresso con un toque de leche al vapor.",
            imagen:"Assets/Images/Cortado.png",
            precio: "400",
        },
        {
            nombre:"Frappuccino",
            descripcion:"Café frío, leche, hielo triturado, endulzante y crema batida.",
            imagen:"Assets/Images/Frappuccino.png",
            precio: "700",
        }
    ]
    function crearItemMenu(item) {
        const div = document.createElement('div');
        div.className = 'menu-item'; 
        
        div.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p>${item.descripcion}</p>
            <span class="precio">$${item.precio}</span>
        `;
        
        return div;
    }

    const contenedor = document.getElementById('menu-container'); // Asegúrate de tener este ID en tu HTML
    
    menuItems.forEach(item => {
        contenedor.appendChild(crearItemMenu(item));
    });
});