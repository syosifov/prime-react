import React, {useState, useEffect} from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';

import ProductService, {url} from "../ProductService";

function Template() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const productService = new ProductService();
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={url+`showcase/demo/images/product/${rowData.image}`} alt={rowData.image} className="product-image" />;
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        // return <Rating value={rowData.rating} readonly cancel={false} />;
        return rowData.rating
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    }

    const header = (
        <div className="table-header">
            Products
            <Button icon="pi pi-refresh" />
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;


    return (
        <div>
            <DataTable value={products} header={header} footer={footer}>
            <Column field="name" header="Name"></Column>
            <Column header="Image" body={imageBodyTemplate}></Column>
            <Column field="price" header="Price" body={priceBodyTemplate}></Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
            <Column header="Status" body={statusBodyTemplate}></Column>
        </DataTable>
        </div>
    )
}

export default Template
