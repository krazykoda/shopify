import React from 'react'

export default function Card(props) {
    let price;
    let discount;

    if(props.item.disc) {
        price = (props.item.price - (props.item.price * props.item.disc)).toFixed(2)
        discount = (props.item.disc * 100) + '%'
    } else {price = null}



    return (
        <div style={{width: '100%'}}>
            <div className="item my-2">
                <div className="item-img">
                    <div className="disc">{ discount }</div>
                    <img src={props.item.img} alt='' />
                </div>
                <div className="item-text">
                    <h5 className="title mb-1">{props.item.name }</h5>
                    <div className="qty mb-1"> { props.item.pcs } </div>
                    <div className="old-price m-0 ">{ discount? '$' + props.item.price : '' }</div>
                    <div className="buy"><span className="price">${ price || props.item.price.toFixed(2) }</span> <span className="cart"><i class="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
 Cart</span></div>
                </div>
            </div>
        </div>
    )
}
