import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'
dotenv.config();

import connectDB from './config/db.js';
connectDB();
const port=process.env.PORT || 5000;
const app=express();
app.get('/',(req,res)=>{
    res.send("Running");
})
app.use('/api/products',productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})
