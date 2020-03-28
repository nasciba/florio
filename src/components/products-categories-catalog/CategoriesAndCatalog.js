import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { StyledTitle } from './styles';
import { StyledGreenButton } from '../buttons/styles';
import {
  StyledDisplay, StyledCardProduct, StyledTextTitle, 
  StyledTextBrand, StyledPrice, StyledMessage
} from '../../styles-catalog';

export default class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <StyledDisplay>
        {this.props.history.location.pathname === '/catalog' ?
          <StyledTitle style={{ width: '80%' }}><span>CATÁLOGO</span></StyledTitle> :
          <StyledTitle style={{ width: '80%' }}><span>{this.props.listOfProducts[0].type}</span></StyledTitle>}
        {this.props.listOfProducts.map(product => {
          return (
            <StyledCardProduct key={product._id}>
              <Link to={`/products/${product._id}`}>
                <img src={product.imageUrl} alt={product.title && product.brand}></img>
              </Link>
              <StyledTextTitle>{product.name}</StyledTextTitle>
              <StyledTextBrand>
                {product.brand}
              </StyledTextBrand>
              <StyledPrice>
                R${parseFloat(product.price).toFixed(2).replace('.', ',')}
              </StyledPrice>
              <StyledGreenButton onClick={() => { this.props.addItemToCart(product._id) }}>ADICIONAR AO CARRINHO</StyledGreenButton>
              {product.stock <= 5 && product.stock >= 2 ? <StyledMessage> Últimas {product.stock} unidades   </StyledMessage> : null}
              {product.stock === 1 ? <StyledMessage> Última unidade!   </StyledMessage> : null}
            </ StyledCardProduct>
          )
        })
        }
      </StyledDisplay>
    )
  }
}

