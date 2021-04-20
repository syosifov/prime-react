import axios from 'axios';

const url = 'https://www.primefaces.org/primereact/showcase/';

class ProductService {
    

    getProductsSmall() {
		return axios.get(url+'showcase/demo/data/products-small.json').then(res => res.data.data);
	}

	getProducts() {
		return axios.get(url+'showcase/demo/data/products.json').then(res => res.data.data);
    }

    getProductsWithOrdersSmall() {
		return axios.get(url+'showcase/demo/data/products-orders-small.json').then(res => res.data.data);
	}
}

export default ProductService
