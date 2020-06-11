import React from 'react'

export default function Card(props) {
    return (
        <div>
            <div className="item my-2">
                <div className="item-img">
                    <div className="disc">{ props.item.disc }</div>
                    <img src={props.item.img} alt='' />
                </div>
                <div className="item-text">
                    <h5 className="title mb-1">{props.item.name }</h5>
                    <div className="qty mb-2"> { props.item.pcs } </div>
                    <div className="old-price ">{ props.item.oldPrice }</div>
                    <div className="buy"><span className="price">{ props.item.price }</span> <span className="cart">Cart</span></div>
                </div>
            </div>
        </div>
    )
}
