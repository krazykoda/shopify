import React from 'react';
import Nav from './Nav';
import Products from './Products';


export default function Layout() {
    return (
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-lg-2 col-sm-12">
                    <Nav />
                </div>
                <div class="col-lg-10 col-sm-12 product p-0 mx-auto">
                    <Products />
                </div>
            </div>
        </div>
    )
}

