import React, { useState, useEffect } from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import ProductService from "../ProductService";


function PageControlled() {
    const [products, setProducts] = useState([]);
    const [first, setFirst] = useState(0);
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState(null);

    useEffect(() => {
        const productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, [])

    const onSort = (e) => {
        setSortField(e.sortField);
        setSortOrder(e.sortOrder);
    }

    return (
        <>
            <DataTable value={products} paginator rows={3}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
            <p> </p>
            <DataTable value={products} paginator rows={4} first={first}
                paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
            <p> </p>
            <DataTable value={products} sortField={sortField} sortOrder={sortOrder} onSort={onSort}>
                <Column field="code" header="Code" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="category" header="Category" sortable></Column>
                <Column field="quantity" header="Quantity" sortable></Column>
            </DataTable>
        </>
    );

}

export default PageControlled
