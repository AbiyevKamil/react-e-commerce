import React, { useEffect, useState } from 'react'
import { selectedCategories, setCategorizedData } from '../features/contentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'



const NavbarDown = () => {
    const [selectValue, setSelectValue] = useState('')
    const categories = useSelector(selectedCategories)
    const dispatch = useDispatch()
    const history = useHistory();
    const search = new URLSearchParams(useLocation().search);
    const category = search.get('category');
    const handleSelect = (value) => {
        dispatch(setCategorizedData(value))
        history.push(`?category=${value}`);
    }

    useEffect(() => {
        setSelectValue(category || "All")
    }, [category])
    return (
        <div className="navbarDownContainer container py-3 w-25 d-flex input-group mb-3">
            <div className="selectContainer d-flex flex-1 input-group">
                <div className="selectContainer__label input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Filter</label>
                </div>
                <select className="selectContainer__select form-control" value={selectValue} onInput={(e) => {
                    handleSelect(e.target.value)
                    setSelectValue(e.target.value)
                }} id="inputGroupSelect01">
                    <option defaultValue={categories[0]}>{categories[0]}</option>
                    <option value={categories[1]}>{categories[1]}</option>
                    <option value={categories[2]}>{categories[2]}</option>
                    <option value={categories[3]}>{categories[3]}</option>
                    <option value={categories[4]}>{categories[4]}</option>
                </select>
            </div>
        </div>
    )
}

export default NavbarDown
