import React, { useEffect, useState } from 'react'
import {
    Link
} from "react-router-dom";
import { RiShoppingBasketFill } from 'react-icons/ri'
import { SiMarketo } from 'react-icons/si'
import { selectedCard } from '../features/contentSlice';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const card = useSelector(selectedCard)
    const [countOfItems, setCountOfItems] = useState(0)
    useEffect(() => {
        let count = 0
        card.map(item => {
            return count += item.count
        })
        setCountOfItems(count)
    }, [card])
    return (
        <div className="navbar-light bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="logo d-flex align-items-md-center navbar-brand align-items-sm-center align-items-center">TrendWay <SiMarketo /></Link>
                    <Link to="/user/card" className="position-relative myBtn btn btn-outline-dark outline-none my-2 mx-3 my-sm-0">
                        <RiShoppingBasketFill />
                        <div className={`${countOfItems !== 0 ? "d-block" : "d-none"} countLabel position-absolute mb-0`}>{countOfItems}</div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
