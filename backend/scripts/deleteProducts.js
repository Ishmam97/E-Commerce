const mongoose = require('mongoose');
const Product = require('../models/Product');
const fs = require('fs')
// MongoDB connection string
const mongoURI = "mongodb+srv://ishmam:test123@cluster0.engz5.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const productsToDelete = [
    {
        "_id": "6683a665acd8a1ac6159a4ab",
        "filename": "formal1.jpg",
        "pName": "Black Leather Formal Shoe",
        "pDesc": "Elegant black leather formal shoe, perfect for office wear.",
        "pPrice": 120,
        "pQty": 50,
        "pCat": {
            "_id": "602d7d72ca60a211784f9ed8",
            "category": "Formal"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4ac",
        "filename": "formal2.jpg",
        "pName": "Brown Oxford Shoe",
        "pDesc": "Classic brown oxford shoe, crafted from premium leather.",
        "pPrice": 150,
        "pQty": 40,
        "pCat": {
            "_id": "602d7d72ca60a211784f9ed8",
            "category": "Formal"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4ad",
        "filename": "formal3.jpg",
        "pName": "Wingtip Brogues",
        "pDesc": "Stylish wingtip brogues with detailed stitching.",
        "pPrice": 160,
        "pQty": 30,
        "pCat": {
            "_id": "602d7d72ca60a211784f9ed8",
            "category": "Formal"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4ae",
        "filename": "formal4.jpg",
        "pName": "Tan Derby Shoe",
        "pDesc": "Elegant tan derby shoe, ideal for formal occasions.",
        "pPrice": 140,
        "pQty": 35,
        "pCat": {
            "_id": "602d7d72ca60a211784f9ed8",
            "category": "Formal"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4af",
        "filename": "formal5.jpg",
        "pName": "Cap Toe Oxfords",
        "pDesc": "Classic cap toe oxfords with a polished finish.",
        "pPrice": 130,
        "pQty": 25,
        "pCat": {
            "_id": "602d7d72ca60a211784f9ed8",
            "category": "Formal"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4b0",
        "filename": "casual1.jpg",
        "pName": "Canvas Sneakers",
        "pDesc": "Comfortable canvas sneakers for everyday wear.",
        "pPrice": 50,
        "pQty": 100,
        "pCat": {
            "_id": "63a02ebeb00dd75dacdebeb0",
            "category": "Casual"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4b1",
        "filename": "casual2.jpg",
        "pName": "Slip-On Loafers",
        "pDesc": "Easy slip-on loafers with a casual design.",
        "pPrice": 60,
        "pQty": 80,
        "pCat": {
            "_id": "63a02ebeb00dd75dacdebeb0",
            "category": "Casual"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4b2",
        "filename": "casual3.jpg",
        "pName": "Boat Shoes",
        "pDesc": "Stylish boat shoes for a relaxed look.",
        "pPrice": 70,
        "pQty": 90,
        "pCat": {
            "_id": "63a02ebeb00dd75dacdebeb0",
            "category": "Casual"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4b3",
        "filename": "casual4.jpg",
        "pName": "Chukka Boots",
        "pDesc": "Versatile chukka boots for a casual style.",
        "pPrice": 85,
        "pQty": 70,
        "pCat": {
            "_id": "63a02ebeb00dd75dacdebeb0",
            "category": "Casual"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4b4",
        "filename": "casual5.jpg",
        "pName": "Espadrilles",
        "pDesc": "Comfortable espadrilles with a relaxed fit.",
        "pPrice": 55,
        "pQty": 60,
        "pCat": {
            "_id": "63a02ebeb00dd75dacdebeb0",
            "category": "Casual"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4b5",
        "filename": "running1.jpg",
        "pName": "Lightweight Running Shoes",
        "pDesc": "Breathable and lightweight running shoes.",
        "pPrice": 100,
        "pQty": 120,
        "pCat": {
            "_id": "600b480cf6deea22f016f183",
            "category": "Running"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4b6",
        "filename": "running2.jpg",
        "pName": "Trail Running Shoes",
        "pDesc": "Durable shoes for trail running.",
        "pPrice": 130,
        "pQty": 110,
        "pCat": {
            "_id": "600b480cf6deea22f016f183",
            "category": "Running"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4b7",
        "filename": "running3.jpg",
        "pName": "Cushioned Running Shoes",
        "pDesc": "Shoes with extra cushioning for comfort.",
        "pPrice": 120,
        "pQty": 100,
        "pCat": {
            "_id": "600b480cf6deea22f016f183",
            "category": "Running"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4b8",
        "filename": "running4.jpg",
        "pName": "Stability Running Shoes",
        "pDesc": "Shoes designed for stability during runs.",
        "pPrice": 110,
        "pQty": 90,
        "pCat": {
            "_id": "600b480cf6deea22f016f183",
            "category": "Running"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4b9",
        "filename": "running5.jpg",
        "pName": "Minimalist Running Shoes",
        "pDesc": "Lightweight and minimalist design for natural running.",
        "pPrice": 105,
        "pQty": 80,
        "pCat": {
            "_id": "600b480cf6deea22f016f183",
            "category": "Running"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.236Z",
        "updatedAt": "2024-07-02T07:04:05.236Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4ba",
        "filename": "basketball1.jpg",
        "pName": "High-Top Basketball Shoes",
        "pDesc": "High-top shoes for ankle support on the court.",
        "pPrice": 150,
        "pQty": 70,
        "pCat": {
            "_id": "603ed5b00d25c917c80fe476",
            "category": "Basketball"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.237Z",
        "updatedAt": "2024-07-02T07:04:05.237Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4bb",
        "filename": "basketball2.jpg",
        "pName": "Low-Top Basketball Shoes",
        "pDesc": "Low-top shoes for quick movements.",
        "pPrice": 140,
        "pQty": 60,
        "pCat": {
            "_id": "603ed5b00d25c917c80fe476",
            "category": "Basketball"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.237Z",
        "updatedAt": "2024-07-02T07:04:05.237Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4bc",
        "filename": "basketball3.jpg",
        "pName": "Performance Basketball Shoes",
        "pDesc": "Shoes designed for optimal performance.",
        "pPrice": 160,
        "pQty": 50,
        "pCat": {
            "_id": "603ed5b00d25c917c80fe476",
            "category": "Basketball"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.237Z",
        "updatedAt": "2024-07-02T07:04:05.237Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4bd",
        "filename": "basketball4.jpg",
        "pName": "Outdoor Basketball Shoes",
        "pDesc": "Durable shoes for outdoor courts.",
        "pPrice": 155,
        "pQty": 45,
        "pCat": {
            "_id": "603ed5b00d25c917c80fe476",
            "category": "Basketball"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.237Z",
        "updatedAt": "2024-07-02T07:04:05.237Z"
    },
    {
        "_id": "6683a665acd8a1ac6159a4be",
        "filename": "basketball5.jpg",
        "pName": "Indoor Basketball Shoes",
        "pDesc": "Shoes optimized for indoor play.",
        "pPrice": 145,
        "pQty": 55,
        "pCat": {
            "_id": "603ed5b00d25c917c80fe476",
            "category": "Basketball"
        },
        "__v": 0,
        "createdAt": "2024-07-02T07:04:05.237Z",
        "updatedAt": "2024-07-02T07:04:05.237Z"
    }
];

async function removeProducts() {
    for (let product of productsToDelete) {
        const { _id, filename } = product;
        console.log(`Removing product with ID ${_id}...`);
        try {
            const deleted = await Product.findByIdAndDelete(_id);
            console.log(`Product with ID ${deleted} deleted successfully`);
            
        } catch (err) {
            console.error(err);
        }
        
    }
    console.log('Products removed successfully');
    mongoose.disconnect();

}

removeProducts();