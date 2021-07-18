import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectedCard } from '../features/contentSlice'
import CardItem from './CardItem'
import { AiOutlineClose } from 'react-icons/all'

const Card = () => {
    const [visible, setVisible] = useState(false)
    const card = useSelector(selectedCard)
    const getTotalCost = () => {
        let cost = 0;
        card.map(item => {
            cost += (item.count * item.price)
        })
        return cost
    }
    return (
        <div className="container my-3 d-flex flex-column align-items-center justify-content-center">
            {card.map(item => item.count !== 0 && (
                <CardItem key={item.id} itemInfo={item} />
            )
            )}
            <div className="card__bottom p-3 d-flex align-items-center justify-content-end">
                <p className="totalCostLabel card__cost me-3 mb-0">
                    Total cost: {getTotalCost().toFixed(2)}$
                </p>
                <button onClick={() => setVisible(true)} className="payBtn btn btn-outline-dark">Pay and end shopping</button>
            </div>
            <div className={`alert-box-container ${visible ? "visible" : "unvisible"}`}>
                <div className="alert-box">
                    <div onClick={() => setVisible(false)} className="close"><AiOutlineClose /></div>
                    <p>Sorry, Payment doesn't work now.</p>
                </div>
            </div>
        </div>
    )
}

export default Card
