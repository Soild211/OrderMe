import React from 'react'
import { useState,useEffect } from 'react';
import {useParams } from 'react-router-dom'
import {Row,Col,Image,ListCard,Card,Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating'
import axios from 'axios';
const ProductScreen = () => {
    const [product,setProducts]=useState([]);
    
    const {id: productId }= useParams();
    useEffect(()=>  { 
        const fetchProducts= async () =>{
            const {data}= await axios.get(`/api/products/${productId}`);
            setProducts(data);
        }
        fetchProducts();
    },[])
    return (
     <>
     <Link className="btn btn-light my-3" to='/'> 
     Go Back
     </Link>
     <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={4}>
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h3>
                      {product.name}  
                  </h3>
                    </ListGroupItem>
                <ListGroupItem> Rating: {product.rating} <Rating 
            value={product.rating}
            text={`${product.numReviews} reviews`}/>

            </ListGroupItem>
                <ListGroupItem>
             Description {product.description}
                    </ListGroupItem>
           
            </ListGroup>
        </Col>

        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <Row>
                            <Col>
                            Price:
                            </Col>
                            <Col>
                            <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                            Status:
                            </Col>
                            <Col>
                            <strong>{product.countInStock>0?'In stock':
                            'Out of stock'
                            }</strong>
                            </Col>
                        </Row>
                    </ListGroupItem >
                    <ListGroupItem className="d-flex justify-content-center">
                        <Button
                        className='btn-block'
                        type='button'
                        disabled={product.countInStock===0}
                        >
                            Add to Cart
                        </Button>
                    </ListGroupItem>

                </ListGroup>
            </Card>
        </Col>
     </Row>
     </>
  )
}

export default ProductScreen