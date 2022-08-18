import {ADDTOCART, REMOVEFROMCART} from '../Constants'

const cartItems = (state = [], action) => {
    switch (action.type) {
        case ADDTOCART:
            // console.log('reducer' ,action);
            return [
                ...state,
                {cartData: action.data}
            ]
        case REMOVEFROMCART:
            // console.log('reducer' ,action);
            state.pop();
            return [
                ...state,
            ]
        default:
            return state;
    }
}

export default cartItems;