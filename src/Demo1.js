import React, {useState, useEffect} from 'react';
import ProductService from './ProductService';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


function Demo1() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, [])

    return (
        <DataTable value={products}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    );
}

export default Demo1
