import  { create } from "zustand";
import { food_list } from "../assets/frontend_assets/assets";

export const useCartStore = create((set, get) => ({
    food_list,

    cartItems: {},
    addToCart: (itemId) => {
        const { cartItems } = get();
        if (!cartItems[itemId]) {
            set({cartItems: {...cartItems, [itemId]: 1}});
        }
        else {
            set({
                cartItems: {
                    [itemId]: cartItems[itemId] + 1,
                }
            })
        }
    },

    removeFromCart: (itemId) => {
        const { cartItems } = get();
        set({
            cartItems: {
                ...cartItems,
                [itemId]: cartItems[itemId] - 1,
            }
        })
    },

    getTotalCartAmount: () => {
        const { cartItems } = get();
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0){
                const itemInfo = food_list.find(
                    (product) => product._id === item
                );
                totalAmount += itemInfo.price * cartItems[item];
            }
        }

        return totalAmount
    },
}));

