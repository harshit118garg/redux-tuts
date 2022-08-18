import {connect} from 'react-redux'
import Home from '../components/Home'
import { addToCart, removeFromCart } from '../services/actions/actions';

const mapStateToProps = (state) => ({
    cartData: (state.cartItems)
})

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: (data) => dispatch(addToCart(data)),
    removeCartHandler: (data) => dispatch(removeFromCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);