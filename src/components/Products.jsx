import React from 'react';
import Card from './Card';

const product = [
    {
        img: 'models/image11.jpg',
        name: 'Shoe',
        price: '$25',
        disc: '50%',
        oldPrice: '$50',
        pcs: '1pc(s)'
    },
    {
        img: 'models/image1.png',
        name: 'Jacket',
        price: '$20',
        pcs: '1pc(s)'
    },
    {
        img: 'models/image10.jpg',
        name: 'Wallet',
        price: '$10',
        disc: '20%',
        oldPrice: '$15',
        pcs: '1pc(s)'
    },
    {
        img: 'models/image3.png',
        name: 'Shirt',
        price: '$70',
        disc: '30%',
        oldPrice: '$100',
        pcs: '1pc(s)'
    },
    {
        img: 'models/image9.jpg',
        name: 'Wallet',
        price: '$35',
        disc: '30%',
        oldPrice: '$55',
        pcs: '1pc(s)'
    },
    {
        img: 'models/image12.jpg',
        name: 'Converse',
        price: '$150',
        disc: '20%',
        oldPrice: '$200',
        pcs: '1pc(s)'
    },
    {
        img: 'models/image14.jpg',
        name: 'Laptop Bag',
        price: '$40',
        pcs: '1pc(s)'
    },
    {
        img: 'models/image7.png',
        name: 'Cup',
        price: '$15',
        disc: '10%',
        oldPrice: '$25',
        pcs: '1pc(s)'
    }
]


function Products() {
    return (
        <div class="row row-cols-4 mx-2 my-1">
            {product.map((itm) => <Card item={itm} />)}
        </div>
    )
}

export default Products
