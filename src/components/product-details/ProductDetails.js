import React, { Component } from 'react';
import axios from 'axios';
import { StyledDisplay, StyledTitle, StyledImgProduct, StyledProdDetailsDescrip, StyledDetailsText } from './styles'
import { StyledGreenButton } from '../buttons/styles';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    componentDidMount() {
        this.getSingleProduct();
    }

    getSingleProduct = () => {
        const { params } = this.props.match;

        axios.get(`https://server-florie.herokuapp.com/api/products/${params.id}`, { withCredentials: true })
            .then(apiResponse => {
                const singleProduct = apiResponse.data;
                this.setState(singleProduct);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    

    render() {
        return (
            <StyledDisplay>
                <StyledImgProduct>
                    <img src={this.state.imageUrl} alt={this.state.name && this.state.brand}></img>
                </StyledImgProduct>
                <StyledProdDetailsDescrip>
                    <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>{this.state.name}</p>
                    <p style={{ color: "#808080" }}>{this.state.brand}</p>

                    <h1>R${(this.state.price).toFixed}</h1>
                    <StyledGreenButton onClick={() => {this.props.addItemToCart(this.state._id)}}>ADICIONAR AO CARRINHO</StyledGreenButton>
                </StyledProdDetailsDescrip>
                <StyledDetailsText> 
                    <StyledTitle>Descrição do Produto</StyledTitle>
                    {this.state.description}
                </StyledDetailsText>
            </StyledDisplay >
        )
    }
}

export default ProductDetails;