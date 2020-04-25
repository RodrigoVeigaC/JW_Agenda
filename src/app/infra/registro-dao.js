class RegistroDao {

    constructor(db) {
        this._db = db;
    }

    adiciona(registro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
            INSERT INTO registros(
                    telefone,
                    status,
                    nome,
                    assunto,
                    textos_b,
                    perguntas,
                    assunto_r,
                    observacoes
                ) values (?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [
                registro.telefone,
                registro.status,
                registro.nome,
                registro.assunto,
                registro.textos_b,
                registro.perguntas,
                registro.assunto_r,
                registro.observacoes
            ],
            function (err) {
                if (err) {
                    console.log(err);
                    return reject('Não foi possível adicionar!');
                }

                resolve();
            }  
        )        
        });
    } 

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM registros',
                function(erro, resultados) {
                    if (erro) return reject("Não foi possível listar!");
                    return resolve(resultados);
                }        
            )
        });
   
    }

    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM registros
                    WHERE id = ?
                `,
                [id],
                (erro, registro) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o registro!');
                    }
                    return resolve(registro);
                }
            );
        });
    }

    atualiza(registro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE registros SET
                telefone = ?,
                status = ?,
                nome = ?,
                assunto = ?,
                textos_b = ?,
                perguntas = ?,
                assunto_r = ?,
                observacoes = ?
                WHERE id = ?
            `,
            [
                registro.telefone,
                registro.status,
                registro.nome,
                registro.assunto,
                registro.textos_b,
                registro.perguntas,
                registro.assunto_r,
                registro.observacoes,
                registro.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar!');
                }

                resolve();
            });
        });
    }
    
    /*
    remove(id) {

        return new Promise((resolve, reject) => {
            this._db.run(
                `
                    DELETE 
                    FROM registros
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover!');
                    }
                    return resolve();
                }
            );
        });

    }

    */
}

module.exports = RegistroDao;