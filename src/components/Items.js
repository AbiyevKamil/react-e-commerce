import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { selectedData, selectedCategorizedData, setCategorizedData, selectedLoading } from '../features/contentSlice'
import Item from './Item'

const Items = () => {
    const isLoading = useSelector(selectedLoading)
    const categorizedData = useSelector(selectedCategorizedData)
    const data = useSelector(selectedData)
    const dispatch = useDispatch()
    const search = new URLSearchParams(useLocation().search);
    const category = search.get('category');
    useEffect(() => {
        dispatch(setCategorizedData(category))
    }, [category, data, dispatch])
    return (
        <div className="itemsContainer container my-5 d-flex flex-wrap justify-content-md-center justify-content-sm-center justify-content-lg-center">
            {isLoading ? (<div className="spinner-border m-5 spinnerComponent" role="status">
                <span className="sr-only"></span>
            </div>) : categorizedData.map(itemInfo => <Item key={itemInfo.id} itemInfo={itemInfo} />)}
            {/* {categorizedData.map(itemInfo => <Item key={itemInfo.id} itemInfo={itemInfo} />)} */}
        </div>
    )
}

export default Items
