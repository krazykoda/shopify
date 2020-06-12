import React from 'react'

function Nav() {
    return (
        <div class="p-1">
            <ul class="nav flex-lg-column flex-sm-row border-right border-bottom " >
                <li class="nav-item">
                    <a class="nav-link shop-list active" href="#">
                    <i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
                        Clothes
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link shop-list" href="#">
                    <i class="fa fa-tag mr-2" aria-hidden="true"></i>
                        Shoes
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link shop-list" href="#">
                    <i class="fa fa-graduation-cap mr-2" aria-hidden="true"></i>
                        Cap
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link shop-list" href="#">
                    <i class="fa fa-google-wallet mr-2" aria-hidden="true"></i>
                        Wallet
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link shop-list" href="#">
                    <i class="fa fa-shopping-bag mr-2" aria-hidden="true"></i>
                        Bags
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Nav
