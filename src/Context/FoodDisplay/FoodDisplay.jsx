import './foodDisplay.css'
import React from 'react'
import { useCartStore } from '../../stores/cartStore'
import FoodItem from '../../components/FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const food_list = useCartStore((s) => s.food_list)
    return (
        <div className="food-display" id="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item,index) => {
                    if (category==="All" || category===item.category){
                        return <FoodItem key={index} id={item._id} name={item.name}  description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay