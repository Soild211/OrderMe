import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'
const HomeScreen = () => {
  return (
    <>
        <h1>
            Latest products
            <Row>
                {
                    products.map((product)=>(
                        <Col key={product._id} sm={12} md={6} lg={4} xl={4}>                        
                        <Product product={product}/>
                        
                        </Col>
                    ))
                }
            </Row>
        </h1>
    </>
  )
}

export default HomeScreen