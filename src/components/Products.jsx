import React from 'react';
import Card from './Card';

const product = [
    {
        img: 'models/image11.jpg',
        name: 'Shoe',
        price: 50,
        disc: 0.50,
        pcs: '1pc(s)'
    },
    {
        img: 'models/image1.png',
        name: 'Jacket',
        price: 20,
        pcs: '1pc(s)'
    },
    {
        img: 'models/image10.jpg',
        name: 'Wallet',
        price: 15,
        disc: 0.2,
        pcs: '1pc(s)'
    },
    {
        img: 'models/image3.png',
        name: 'Shirt',
        price: 100,
        disc: 0.3,
        pcs: '1pc(s)'
    },
    {
        img: 'models/image9.jpg',
        name: 'Wallet',
        price: 55,
        disc: 0.3,
        pcs: '1pc(s)'
    },
    {
        img: 'models/image12.jpg',
        name: 'Converse',
        price: 150,
        disc: 0.2,
        pcs: '1pc(s)'
    },
    {
        img: 'models/image14.jpg',
        name: 'Laptop Bag',
        price: 40,
        pcs: '1pc(s)'
    },
    {
        img: 'models/image7.png',
        name: 'Cap',
        price: 25,
        disc: 0.1,
        pcs: '1pc(s)'
    }
]


function Products() {
    return (
        <div class="row  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mx-2 my-1">
            {product.map((itm, i) => <Card key={i} item={itm} />)}
        </div>
    )
}

export default Products
