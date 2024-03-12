import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartCSS from "../../styles/Cart.module.css";

interface Props {}

interface State {
    isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    // handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    //     this.setState({ isOpen: !this.state.isOpen });
    // }

    render() {
        return (
            <div className={CartCSS.cartContainer}>
                <button 
                    className={CartCSS.button} 
                    type="button" 
                    onClick={this.handleClick}
                >
                    <FiShoppingCart />
                    <span>2 pizza(s)</span>
                </button>
                <div className={CartCSS.cartDropDown} style={{
                    display: this.state.isOpen ? 'block' : 'none',
                }}>
                    <ul>
                        <li>Napoletana</li>
                        <li>Marinara</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Cart;