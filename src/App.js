import Demo1 from './components/Demo1';
import Template from "./components/Template";
import ColGroup from "./components/ColGroup";
import Paginator from "./components/Paginator";
import PageControlled from "./components/PageControlled";

// https://www.primefaces.org/primereact/showcase/showcase/demo/data/products-orders-small.json
// https://www.primefaces.org/primereact/showcase/showcase/demo/data/products-small.json
// https://www.primefaces.org/primereact/showcase/showcase/demo/data/products.json

import './App.css';

function App() {
  
  
  return (
    <div >
        {false && <Demo1 />}
        {false && <Template />}
        {false && <ColGroup />}
        {false && <Paginator />}
        {true && <PageControlled />}
    </div>
  );
}

export default App;
