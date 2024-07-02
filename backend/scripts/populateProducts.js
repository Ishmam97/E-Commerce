const mongoose = require('mongoose');
const Product = require('../models/Product');

// MongoDB connection string
const mongoURI = "mongodb+srv://ishmam:test123@cluster0.engz5.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const products = [
    {
        "filename": "formal1.jpg",
        "pName": "Black Leather Formal Shoe",
        "pDesc": "Elegant black leather formal shoe, perfect for office wear.",
        "pPrice": 120,
        "pQty": 50,
        "pCat": "602d7d72ca60a211784f9ed8",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "formal2.jpg",
        "pName": "Brown Oxford Shoe",
        "pDesc": "Classic brown oxford shoe, crafted from premium leather.",
        "pPrice": 150,
        "pQty": 40,
        "pCat": "602d7d72ca60a211784f9ed8",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "formal3.jpg",
        "pName": "Wingtip Brogues",
        "pDesc": "Stylish wingtip brogues with detailed stitching.",
        "pPrice": 160,
        "pQty": 30,
        "pCat": "602d7d72ca60a211784f9ed8",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "formal4.jpg",
        "pName": "Tan Derby Shoe",
        "pDesc": "Elegant tan derby shoe, ideal for formal occasions.",
        "pPrice": 140,
        "pQty": 35,
        "pCat": "602d7d72ca60a211784f9ed8",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "formal5.jpg",
        "pName": "Cap Toe Oxfords",
        "pDesc": "Classic cap toe oxfords with a polished finish.",
        "pPrice": 130,
        "pQty": 25,
        "pCat": "602d7d72ca60a211784f9ed8",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "casual1.jpg",
        "pName": "Canvas Sneakers",
        "pDesc": "Comfortable canvas sneakers for everyday wear.",
        "pPrice": 50,
        "pQty": 100,
        "pCat": "63a02ebeb00dd75dacdebeb0",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "casual2.jpg",
        "pName": "Slip-On Loafers",
        "pDesc": "Easy slip-on loafers with a casual design.",
        "pPrice": 60,
        "pQty": 80,
        "pCat": "63a02ebeb00dd75dacdebeb0",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "casual3.jpg",
        "pName": "Boat Shoes",
        "pDesc": "Stylish boat shoes for a relaxed look.",
        "pPrice": 70,
        "pQty": 90,
        "pCat": "63a02ebeb00dd75dacdebeb0",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "casual4.jpg",
        "pName": "Chukka Boots",
        "pDesc": "Versatile chukka boots for a casual style.",
        "pPrice": 85,
        "pQty": 70,
        "pCat": "63a02ebeb00dd75dacdebeb0",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "casual5.jpg",
        "pName": "Espadrilles",
        "pDesc": "Comfortable espadrilles with a relaxed fit.",
        "pPrice": 55,
        "pQty": 60,
        "pCat": "63a02ebeb00dd75dacdebeb0",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "running1.jpg",
        "pName": "Lightweight Running Shoes",
        "pDesc": "Breathable and lightweight running shoes.",
        "pPrice": 100,
        "pQty": 120,
        "pCat": "600b480cf6deea22f016f183",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "running2.jpg",
        "pName": "Trail Running Shoes",
        "pDesc": "Durable shoes for trail running.",
        "pPrice": 130,
        "pQty": 110,
        "pCat": "600b480cf6deea22f016f183",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "running3.jpg",
        "pName": "Cushioned Running Shoes",
        "pDesc": "Shoes with extra cushioning for comfort.",
        "pPrice": 120,
        "pQty": 100,
        "pCat": "600b480cf6deea22f016f183",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "running4.jpg",
        "pName": "Stability Running Shoes",
        "pDesc": "Shoes designed for stability during runs.",
        "pPrice": 110,
        "pQty": 90,
        "pCat": "600b480cf6deea22f016f183",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "running5.jpg",
        "pName": "Minimalist Running Shoes",
        "pDesc": "Lightweight and minimalist design for natural running.",
        "pPrice": 105,
        "pQty": 80,
        "pCat": "600b480cf6deea22f016f183",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "basketball1.jpg",
        "pName": "High-Top Basketball Shoes",
        "pDesc": "High-top shoes for ankle support on the court.",
        "pPrice": 150,
        "pQty": 70,
        "pCat": "603ed5b00d25c917c80fe476",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "basketball2.jpg",
        "pName": "Low-Top Basketball Shoes",
        "pDesc": "Low-top shoes for quick movements.",
        "pPrice": 140,
        "pQty": 60,
        "pCat": "603ed5b00d25c917c80fe476",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "basketball3.jpg",
        "pName": "Performance Basketball Shoes",
        "pDesc": "Shoes designed for optimal performance.",
        "pPrice": 160,
        "pQty": 50,
        "pCat": "603ed5b00d25c917c80fe476",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "basketball4.jpg",
        "pName": "Outdoor Basketball Shoes",
        "pDesc": "Durable shoes for outdoor courts.",
        "pPrice": 155,
        "pQty": 45,
        "pCat": "603ed5b00d25c917c80fe476",
        "createdBy": "606ac83f9c3df5c3d0798973"
    },
    {
        "filename": "basketball5.jpg",
        "pName": "Indoor Basketball Shoes",
        "pDesc": "Shoes optimized for indoor play.",
        "pPrice": 145,
        "pQty": 55,
        "pCat": "603ed5b00d25c917c80fe476",
        "createdBy": "606ac83f9c3df5c3d0798973"
    }
];

async function populateProducts() {
    try {
        await Product.insertMany(products);
        console.log('Products inserted successfully');
        mongoose.disconnect();
    } catch (err) {
        console.error(err);
        mongoose.disconnect();
    }
}

populateProducts();
