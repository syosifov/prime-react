import Demo1 from './components/Demo1';
import Template from "./components/Template";
import ColGroup from "./components/ColGroup";
import Paginator from "./components/Paginator";
import PageControlled from "./components/PageControlled";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import PrimeReact from 'primereact/api';



// https://www.primefaces.org/primereact/showcase/showcase/demo/data/products-orders-small.json
// https://www.primefaces.org/primereact/showcase/showcase/demo/data/products-small.json
// https://www.primefaces.org/primereact/showcase/showcase/demo/data/products.json

import './App.css';

function App() {
    // active ripple effect
    PrimeReact.ripple = true;

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
