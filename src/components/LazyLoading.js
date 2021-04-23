import React, { useState, useEffect } from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import ProductService from "../ProductService";


function LazyLoading() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(4);
    const [totalRecords, setTotalRecords] = useState(0);
    const [dataSource, setDataSource] = useState([]);

    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState(1);


    useEffect(() => {
        const productService = new ProductService();
        productService.getProducts()
            .then(data => {
                setDataSource(data);
                setTotalRecords(data.length);
                setProducts(data.slice(0, rows));
                setLoading(false);
            });
    }, []);

    useEffect(()=>{
        dataSource.sort(compare);
        const start = 0;
        const end = rows;
        getData(start, end);
    },[sortField, sortOrder]);
    

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + rows;

            // setFirst(startIndex);
            // setProducts(dataSource.slice(startIndex, endIndex));
            getData(startIndex, endIndex);
            setLoading(false);
        }, 250);
    }

    const getData = (start, end) => {
        setFirst(start)
        setProducts(dataSource.slice(start, end));
    }

    const onSort = (e) => {
        setSortField(e.sortField);
        setSortOrder(e.sortOrder);
    }

    const cString = (s, a, b) => {
        const r = a[s] < b[s]? -1: 1;
        return sortOrder * r;
    }

    const cNumb = (s, a, b) => {
        return sortOrder * (a[s]-b[s]);
    }
    const compare = (a, b) => {
        switch (sortField) {
            case 'code':
            case 'name':
            case 'category':
                return cString(sortField, a, b);
            case 'quantity':
                return cNumb(sortField, a, b);
            default: return 0;
        }
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
                sortField={sortField}
                sortOrder={sortOrder}
                onSort={onSort}
            >
                <Column field="code" header="Code" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="category" header="Category" sortable></Column>
                <Column field="quantity" header="Quantity" sortable></Column>
            </DataTable>
        </div>
    )
}

export default LazyLoading
