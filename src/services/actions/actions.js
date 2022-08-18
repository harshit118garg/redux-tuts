import { ADDTOCART, REMOVEFROMCART } from "../Constants"

export const addToCart = (data) => {
    // console.log('action',data);
    return {
        type: ADDTOCART,
        data: data
    }
}

export const removeFromCart = (data) => {
    // console.log('action', data);
    return {
        type: REMOVEFROMCART,
        data: data
    }
}