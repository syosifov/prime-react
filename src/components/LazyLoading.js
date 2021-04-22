import React, { useState, useEffect } from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import ProductService from "../ProductService";


function LazyLoading() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [dataSource, setDataSource] = useState([]);

    // useEffect((() => {
    //     productService = new ProductService();
    //     productService.getProducts().then(data => {
    //         setDataSource(data);
    //         setTotalRecords(data.length);
    //         setProducts(datasource.slice(0, rows));
    //         setLoading(false);
    //     });
    // }, []);
    useEffect(() => {
        const productService = new ProductService();
        productService.getProducts()
            .then(data => {
                setDataSource(data);
                setTotalRecords(data.length);
                setProducts(dataSource.slice(0, rows));
                setLoading(false);
            });
    }, []);

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + rows;

            setFirst(startIndex);
            setProducts(dataSource.slice(startIndex, endIndex));
            setLoading(false);
        }, 250);
    }

    return (
        <div>
            <h3>Lazy loading</h3>
            <DataTable 
                value={products} 
                paginator 
                rows={rows} 
                totalRecords={totalRecords}
                lazy 
                first={first} 
                onPage={onPage} 
                loading={loading}
            >
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    )
}

export default LazyLoading
