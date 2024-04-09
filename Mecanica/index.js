let sumar = (id) => 
{
        let contador =  document.getElementById(id);
                contador.textContent = parseInt(contador.textContent) + 1;

                actualizarValores(id);
                compra();
                venta();
                ganancia();
};

let restar = (id) => 
{
        let contador = document.getElementById(id);
                contador.textContent = parseInt(contador.textContent) - 1;

                actualizarValores(id);
                compra();
                venta();
                ganancia();
}

let actualizarValores = (id) => 
{

        let contador = document.getElementById(id);
        let compra = document.getElementById(`compra_${id}`);
        let venta = document.getElementById(`venta_${id}`);

        compra.textContent = `$${(contador.textContent * 0.35).toFixed(2)}`;
        venta.textContent = `$${(contador.textContent * 0.50).toFixed(2)}`;
}

let compra = () => 
{
        let empastado = (document.getElementById('compra_empastado').textContent).slice(1);
        let  salcedo = (document.getElementById('compra_salcedo').textContent).slice(1);
        let vaso = (document.getElementById('compra_vaso').textContent).slice(1);
        let cono = (document.getElementById('compra_cono').textContent).slice(1);

        let total = (Number(empastado) + Number(salcedo) + Number(vaso) + Number(cono)).toFixed(2);
        document.getElementById('total_compra').innerHTML = `$${total}`
}

let venta = () => 
{
        let empastado = (document.getElementById('venta_empastado').textContent).slice(1);
        let  salcedo = (document.getElementById('venta_salcedo').textContent).slice(1);
        let vaso = (document.getElementById('venta_vaso').textContent).slice(1);
        let cono = (document.getElementById('venta_cono').textContent).slice(1);

        let total = (Number(empastado) + Number(salcedo) + Number(vaso) + Number(cono)).toFixed(2);
        document.getElementById('total_venta').innerHTML = `$${total}`
}

let ganancia = () =>
{
        let compra = (document.getElementById('total_compra').textContent).slice(1);
        let venta = (document.getElementById('total_venta').textContent).slice(1);

        let ganancia = (Number(venta) - Number(compra)).toFixed(2);
        document.getElementById('ganancia').innerHTML = `$${ganancia}`
}


function pedido() {
        // Desactivar
        event.preventDefault();
        const numeroTelefono = +593968123680;

        const empastado = document.getElementById('empastado').textContent;
        const salcedo = document.getElementById('salcedo').textContent;
        const vaso = document.getElementById('vaso').textContent;
        const cono = document.getElementById('cono').textContent;

        let compra = (document.getElementById('total_compra').textContent).slice(1);
                compra = Math.ceil(compra)

        let mensaje = `Hola me ayudas con: $${compra} 🍨:\n`;

        if(empastado > 0){
                mensaje += `${empastado} empastados,\n`
        }
        if(salcedo > 0){
                mensaje += ` ${salcedo} salcedo,\n`;
        }
        if(vaso > 0){
                mensaje += ` ${vaso} vasos,\n`;
        }
        if(cono > 0){
                mensaje += ` ${cono} conos,\n`; 
        }

        // Elimina la coma final si hay algún pedido
        if (empastado > 0 || cono > 0 || vaso > 0 || salcedo > 0) 
        {
                mensaje = mensaje.slice(0, -1); // Elimina la coma al final
        }

        const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');

}