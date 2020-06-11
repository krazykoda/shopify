import React from 'react';
import Nav from './Nav';
import Products from './Products';


export default function Layout() {
    return (
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-2 ">
                    <Nav />
                </div>
                <div class="col-10 product p-0">
                    <Products />
                </div>
            </div>
        </div>
    )
}
