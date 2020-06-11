import React from 'react'

function Nav() {
    return (
        <div class="p-1">
            <ul class="nav flex-column border-right border-bottom">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Clothes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Shoes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cup</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Wallet</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Laptop Bags</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav
