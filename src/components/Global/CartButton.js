
//asset import
import CartIcon from '../../assets/svg/cart.svg';

const CartButton = ({ style, onClick }) => {
    return (
        <button onClick={onClick} style={style} className='flex justify-center items-center py-2 px-4 bg-transparent border-2 border-blue-700 rounded-[10px] hover:border-blue-500 transition-all'>
            <img src={CartIcon} alt={"cart-icon"} />
        </button>
    )
}

export default CartButton;