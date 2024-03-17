import React from 'react'
import { Card, CardBody, CardText } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top"/>
        </Link>
        <CardBody>
        <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
                <strong>{product.name}</strong>
                </Card.Title>
            </Link>
        </CardBody>
        <CardText as='h3'>
        ${product.price}
        </CardText>
    </Card>
    
  )
}

export default Product