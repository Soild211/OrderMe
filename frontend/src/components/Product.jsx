import React from 'react'
import { Card, CardBody, CardText } from 'react-bootstrap'
const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} varient="top"/>
        </a>
        <CardBody>
        <a href={`/product/${product._id}`}>
            <Card.Title as='div'>
                <strong>{product.name}</strong>
                </Card.Title>
            </a>
        </CardBody>
        <CardText as='h3'>
        ${product.price}
        </CardText>
    </Card>
    
  )
}

export default Product