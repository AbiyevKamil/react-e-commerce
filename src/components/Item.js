import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCard } from '../features/contentSlice'


const Item = ({ itemInfo }) => {
    const dispatch = useDispatch()

    return (
        <div className="item__card card mb-3 me-md-3 p-4 bg-light" style={{ width: "300px", height: "480px" }}>
            <img width="100" height="200" className="card-img-top" src={itemInfo.image} alt="Card cap" />
            <div className="card-body">
                <Link
                    to={{ pathname: '/items', search: `category=${itemInfo.category}&product=${itemInfo.title}` }}
                    className="text-decoration-none text-dark"
                >
                    <h5 className="card-title">{itemInfo.title}</h5>
                    <p className="card-text text-truncate user-select-none mb-2">{itemInfo.description}</p>
                </Link>
                <div className="item__bottom d-flex align-items-center justify-content-between">
                    <p className="price m-auto">{itemInfo.price}$</p>
                    <button onClick={() => { dispatch(addToCard(itemInfo)) }} className="btn btn-outline-dark">Add to card</button>
                </div>
            </div>
        </div>
    )
}

export default Item
