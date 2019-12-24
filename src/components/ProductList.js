import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
// import { storeProducts } from '../data'
import { ProductConsumer } from '../context'

export default class ProductList extends Component {
// state ={
//   products:storeProducts
// }

getToken = () => {
  fetch('https://adidas.com/api/checkout/baskets', {
    method: 'POST'
  })
  .then(r => r.json())
  .then(r => console.log(r))
  .catch(e => {
    console.log(e)
  })
}
  render () {
    //console.log(this.state.products)
    return (
      <React.Fragment>
         <div className="py-5">
            <div className="container">
              <Title name="our" title="products"/>
              <button onClick={this.getToken}>Get token</button>
              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map( product => {
                      return <Product key={product.id} product={product}  />
                    })
                  }}
                </ProductConsumer>
              </div>
             </div>
           </div> 
      
      </React.Fragment>
      
              
      
    )
  }
}
