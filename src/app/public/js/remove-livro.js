/*

let tabelaRegistros = document.querySelector('#registros');
tabelaRegistros.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let registroId = elementoClicado.dataset.ref;
        fetch(`localhost:3000/lista/${registroId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#registro_${registroId}`);
                tr.remove();

            })
            .catch(erro => console.log(erro));

    }

});

*/