const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const REG_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS registros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    telefone TEXT NOT NULL, 
    status TEXT NOT NULL, 
    nome TEXT NOT NULL, 
    assunto TEXT NOT NULL, 
    textos_b TEXT DEFAULT ('') NOT NULL,
    perguntas TEXT DEFAULT ('') NOT NULL,
    assunto_r TEXT NOT NULL, 
    observacoes TEXT DEFAULT ('') NOT NULL
)
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(REG_SCHEMA);

});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;