const grid = new Muuri('.grid', {//punto hace referencia a las clases de htmls
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => { //load cuando la ventana carge
    grid.refreshItems().layout(); // acomoda el tamaño
    document.getElementById('grid').classList.add('imagenes-cargadas')//abrimos lista de clases y agregmos 
    // enlaces de filtrado
    const enlaces = document.querySelectorAll('#categorias a');//todos los enlaces de categorias
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();//evitar el elemento por comportamiento 
            enlaces.forEach((enlace) => {
                enlace.classList.remove('activo');// quitamos las clases activo a las q no esten seleccionado
            });

            evento.target.classList.add('activo');// cambiamos la clase de html para colorar enlaces
            const categoria = evento.target.innerHTML;
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria=${categoria}`);//filtra
        });
    });
    // enlaces de filtrado 

    //barra de busqueda
    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter((item) =>  item.getElement().dataset.etiquetas.includes(busqueda));//accedemos a cada uno de los elemtnos  data
    });
    //barra de busqueda
});
