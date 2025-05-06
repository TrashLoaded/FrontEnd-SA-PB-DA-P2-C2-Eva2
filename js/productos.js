document.addEventListener("DOMContentLoaded", function () {
    const productos = [
      {
        nombre: "Manzana",
        descripcion: "Fruta fresca",
        precio: "$1.000",
        imagen: "assets/manzana.avif"
      },
      {
        nombre: "Zanahoria",
        descripcion: "Verdura",
        precio: "$1.000",
        imagen: "assets/zanahoria.webp"
      },
      {
        nombre: "Lechuga",
        descripcion: "Verdura",
        precio: "$1.000",
        imagen: "assets/lechuga.webp"
      },
      {
        nombre: "Tomate",
        descripcion: "Verdura",
        precio: "$1.000",
        imagen: "assets/tomate.avif"
      }
    ];
  
    const contenedor = document.getElementById("contenedorProductos");
    const modalBody = document.getElementById("modalBody");
  
    productos.forEach((p, index) => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "col-md-4 mb-4";
  
      tarjeta.innerHTML = `
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${p.nombre}</h5>
            <p class="card-text">${p.descripcion} - ${p.precio}</p>
            <button class="btn btn-primary" data-index="${index}" data-bs-toggle="modal" data-bs-target="#productoModal">Ver Detalle</button>
          </div>
        </div>
      `;
  
      contenedor.appendChild(tarjeta);
    });
    contenedor.addEventListener("click", function (e) {
      if (e.target.matches("button[data-bs-target='#productoModal']")) {
        const index = e.target.getAttribute("data-index");
        const producto = productos[index];
        modalBody.innerHTML = `
          <h5>${producto.nombre}</h5>
          <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid mb-3">
          <p>${producto.descripcion}</p>
          <p><strong>Precio:</strong> ${producto.precio}</p>
        `;
      }
    });
  });
  