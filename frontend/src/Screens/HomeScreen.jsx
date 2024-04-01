import React from 'react'
import axios from 'axios';
import { useEffect ,useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
const HomeScreen = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts = async () => {
            const {data}=await axios.get("/api/products");
            setProducts(data);
        };
        fetchProducts();
    },[]);
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