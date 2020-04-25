const db = require('../../config/database');
const RegistroDao = require('../infra/registro-dao');

module.exports = (app) => {
    app.get('/', function(req, resp){ resp.redirect('/lista') });
    
    app.get('/lista', function(req, resp){

        const registroDao = new RegistroDao(db);
        
        registroDao.lista()
        .then(registros => resp.marko(
            require('../views/registros/lista/lista.marko'),
            { registros: registros }
        ))
        .catch(erro => console.log(erro));
                    
    });
    
    app.get('/lista/form', function(req, resp){
        resp.marko(require('../views/registros/form/form.marko'), { registro: {} });
    });

    app.get('/lista/form/:id', function(req, resp) {
        const id = req.params.id;
        const registroDao = new RegistroDao(db);
    
        registroDao.buscaPorId(id)
            .then(registro => 
                resp.marko(
                    require('../views/registros/form/form.marko'),
                    { registro: registro }
                )
            )
            .catch(erro => console.log(erro));
    
    });

    app.post('/lista', function(req, resp){
        console.log(req.body);
        const registroDao = new RegistroDao(db);
        
        registroDao.adiciona(req.body)
        .then(resp.redirect('/lista'))
        .catch(erro => console.log(erro));
    });

    app.put('/lista', function(req, resp){
        console.log(req.body);
        const registroDao = new RegistroDao(db);
        
        registroDao.atualiza(req.body)
        .then(resp.redirect('/lista'))
        .catch(erro => console.log(erro));
    });

    /*
    app.delete('/lista/:id', function(req, resp){
        const id = req.params.id;
        const registroDao = new RegistroDao(db);

        registroDao.remove(id)
        .then(() => resp.status(200).end())
        .catch(erro => console.log(erro))

    });
    */

};

