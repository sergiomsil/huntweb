import React, { Component } from "react";
import api from '../../services/api';

export default class Main extends Component {
    state = {
        products: [],
    }
    componentDidCatch() {
        this.loadProducts();
    }

    loadProducts =async () => {
        const response = await api.get("/products");

        this.setState({ products: response.data.docs });
    };

    render() {
       return <h1>Contagem de produtos: {this.state.products.lenght}</h1>;
    }
}