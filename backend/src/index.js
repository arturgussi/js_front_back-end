const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //-> importando as rotas de outro arquivo

const app = express();

app.use(cors());
app.use(express.json()); //-> o Express converte o JSon em JavaScript 
app.use(routes);

app.listen(3333);


/** ROTA:
 * - Endereço da página
 * - localhost:3333
 */ 

/** RECURSO:
 * - O que se deseja acessar na página
 * - É o primeiro parâmetro " '/' "
 */

/** MÉTODOS HTTP:
 * - Como mexer nas informações do back-end
 *      .get = buscar/listar uma informação do back-end
 *      .post = criar uma informação no back-end
 *      .put = alterar uma informação no back-end
 *      .delete = deletar uma informação no back-end
 */

 /** TIPOS DE PARÂMETROS:
  *     Query Params: parâmetros nomeados enviados na rota após o simbolo de '?'. Serve para filtros, paginação, etc
  *     Route Params: parâmetros utilizados para identificar únicos recursos. 
  *     Request Body: corpo da requisição utilizado para criar ou alterar recursos (usuários)
  * 
  *     const params = request.query; //QueryParams -> todos os parâmetros que vem de querys salvos na variavel params
        const id = request.params; //RouteParams -> procura por parâmetros '/:id'
        const body = request.body; //RequestBody -> parâmetros repassados no corpo da requisição
        console.log(params); //mostra no terminal os parâmetros
  */

  /** BANCO DE DADOS
   * SQL => MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL => MongoDB, CouchDB, ...
   */

   /** SQLite
    * Driver: SELECT * FROM users -> Abordagem em SQL
    * Query Builder : table('users').select('*').where(); -> Abordagem em JS
    */
