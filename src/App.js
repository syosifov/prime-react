import Demo1 from './components/Demo1';
import Template from "./components/Template";
import ColGroup from "./components/ColGroup";

// https://www.primefaces.org/primereact/showcase/showcase/demo/data/products-orders-small.json
// https://www.primefaces.org/primereact/showcase/showcase/demo/data/products-small.json
// https://www.primefaces.org/primereact/showcase/showcase/demo/data/products.json

import './App.css';

function App() {
  
  
  return (
    <div >
        {false && <Demo1 />}
        {false && <Template />}
        {true && <ColGroup />}
    </div>
  );
}

export default App;
