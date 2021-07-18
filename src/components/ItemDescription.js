import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { addToCard, selectedData } from '../features/contentSlice';

const ItemDescription = () => {
    const dispatch = useDispatch()
    const [currentItem, setCurrentItem] = useState([])
    const search = new URLSearchParams(useLocation().search);
    const title = search.get('product');
    const data = useSelector(selectedData)
    useEffect(() => {
        let itemInfo = []
        data.filter(item => {
            if (item.title.toString().toLowerCase().trim() === title.toString().toLowerCase().trim()) {
                itemInfo = item
            }
            return 0;
        })
        setCurrentItem(itemInfo)
    }, [data, title])
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="my-3 w-100 row bg-light">
                <div className="col-sm-4 col-md-5 col-lg-4 p-4 d-flex flex-column align-items-center">
                    <img className="description__image mb-3" src={currentItem.image} alt="" />
                    <p className="description__title">{currentItem.title}</p>
                </div>
                <div className="col-md-7 col-lg-8 col-sm-8 p-4">
                    <p className="description__category">
                        <span>Category:</span> {currentItem.category}
                    </p>
                    <p className="description__description">
                        <span>Description:</span> {currentItem.description}
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="description__price mb-0">
                            <span>Price:</span> {currentItem.price}$
                        </p>
                        <button onClick={() => { dispatch(addToCard(currentItem)) }} className="btn btn-outline-dark">Add to cart</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemDescription
