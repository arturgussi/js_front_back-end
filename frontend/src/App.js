import React/*, {useState}*/ from 'react';
//import Header from './Header';
import Routes from './routes';

import './global.css';

//Live Reload -> Recarrega automaticamente a págima html quando salva o arquivo
//Estado -> Informação que será armazenada pela aplicação. Faz um novo render na tela
    //Imutabilidade -> Não pode mudar a variavel como quisermos no React. Devemos sobrepor o valor.

function App() {
  return (
    <Routes />
  );
}

export default App;


// function App() { //função que retorna html
//   const [counter, setCounter] = useState(0); //retorna um array //Array [valor, functionAtualização]


//   function increment(){
//     setCounter(counter +1);
//   }

//   return ( 
//     <div>
//       <Header>
//         Semana OmniStack:
//       </Header>
//       <Header>Contador: {counter}</Header>
//       <button onClick={increment}>Incrementar</button>
//     </div>
//   );
// }

