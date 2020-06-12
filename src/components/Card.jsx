import React from 'react'

export default function Card(props) {
    return (
        <div style={{width: '100%'}}>
            <div className="item my-2">
                <div className="item-img">
                    <div className="disc">{ props.item.disc }</div>
                    <img src={props.item.img} alt='' />
                </div>
                <div className="item-text">
                    <h5 className="title mb-1">{props.item.name }</h5>
                    <div className="qty mb-1"> { props.item.pcs } </div>
                    <div className="old-price m-0 ">{ props.item.oldPrice }</div>
                    <div className="buy"><span className="price">{ props.item.price }</span> <span className="cart"><i class="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
 Cart</span></div>
                </div>
            </div>
        </div>
    )
}
