var cantidad = 0;
var  total = 0;

    function comprar(nombre, precio) {
      cantidad++;
      total += precio;

      document.getElementById("cantidad").innerText = cantidad;
      document.getElementById("total").innerText = total;

      var li = document.createElement("li");
      li.textContent = `${nombre} - $${precio}`;
      document.getElementById("detalle").appendChild(li);
    }

    function vaciarCarrito() {
      cantidad = 0;
      total = 0;
      document.getElementById("cantidad").innerText = cantidad;
      document.getElementById("total").innerText = total;
      document.getElementById("detalle").innerHTML = "";
    }
    function comprarcarrito() {
          alert("Total hasta ahora: $" + total);
    }