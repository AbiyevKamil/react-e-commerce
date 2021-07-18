import React from 'react'

const CardItem = ({ itemInfo }) => {
    return (
        <div className="container p-3 my-3 bg-light d-flex row">
            <div className="col-sm-12 col-md-5 col-lg-4 d-flex align-items-sm-center justify-content-sm-center align-items-center justify-content-center">
                <img className="cardItem__img" src={itemInfo.image} alt="" />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8">
                <div className="cardItem__title">
                    {itemInfo.title}
                </div>
                <p className="cardItem__description">
                    {itemInfo.description}
                </p>
                <p className="cardItem__count">
                    Count: {itemInfo.count}
                </p>
                <p className="cardItem__cost">
                    Cost: {(itemInfo.count * itemInfo.price).toFixed(2)}$
                </p>
            </div>
        </div>
    )
}

export default CardItem
