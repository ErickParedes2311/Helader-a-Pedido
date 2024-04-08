let sumar = (id) => 
{
        let contador =  document.getElementById(id);
                contador.textContent = parseInt(contador.textContent) + 1;

                if('empastado' === id){
                        empastado = contador.textContent;
                }else if('salcedo' === id){
                        salcedo = contador.textContent;
                }
                actualizarValores(id);
                console.log(empastado + salcedo);
};

let restar = (id) => 
{
        let contador = document.getElementById(id);
                contador.textContent = parseInt(contador.textContent) - 1;
                if('empastado' === id){
                        empastado = contador.textContent;
                }else if('salcedo' === id){
                        salcedo = contador.textContent;
                }
                actualizarValores(id);
                console.log(empastado + salcedo);
}

let actualizarValores = (id) => {

        let contador = document.getElementById(id);
        let compra = document.getElementById(`compra_${id}`);
        let venta = document.getElementById(`venta_${id}`);

        compra.textContent = `$${(contador.textContent * 0.35).toFixed(2)}`;
        venta.textContent = `$${(contador.textContent * 0.50).toFixed(2)}`;
}

function comprar() {
        // Desactivar
        // event.preventDefault();
        const numeroTelefono = +593968123680;

        const empastado = Number(document.getElementById('Empastado').value);
        const cono = Number(document.getElementById('Cono').value);
        const vaso = Number(document.getElementById('Vaso').value);
        const salcedo = Number(document.getElementById('Salcedo').value);


        const dinero = Math.ceil((empastado + cono + vaso + salcedo)* 0.35);
        let mensaje = `Hola me ayudas con: $${dinero} 🍨`;

        if(empastado > 0){
                mensaje += ` ${empastado} empastados,`
        }
        if(cono > 0){
                mensaje += ` ${cono} conos,`; 
        }
        if(vaso > 0){
                mensaje += ` ${vaso} vasos,`;
        }
        if(salcedo > 0){
                mensaje += ` ${salcedo} salcedo,`;
        }

        // Elimina la coma final si hay algún pedido
        if (empastado > 0 || cono > 0 || vaso > 0 || salcedo > 0) 
        {
                mensaje = mensaje.slice(0, -1); // Elimina la coma al final
        }

        const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');

}