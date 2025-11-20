import './foodItem.css'
import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { useCartStore} from "../../stores/cartStore"

const FoodItem = ({id,name,price,description,image}) => {

    const cartItems = useCartStore((s) => s.cartItems);
    const addToCart = useCartStore((s) => s.addToCart);
    const removeFromCart = useCartStore((s) => s.removeFromCart);

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-img" src={image} alt="" />
                {!cartItems[id]
                    ?<img className="add" onClick={() =>addToCart(id)} src={assets.add_icon_green} alt="" />
                    :<div className="food-item-counter">
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem