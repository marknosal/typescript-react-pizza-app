import React, { createRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartCSS from "../../styles/Cart.module.css";
import { AppStateContext } from "./AppState";

interface Props {}

interface State {
    isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
    #containerRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        this.#containerRef = createRef();
    }

    handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    handleOutsideClick = (e: MouseEvent) => {
        if (
            this.#containerRef.current && 
            !this.#containerRef.current.contains(e.target as Node)
        ) {
            this.setState({ isOpen: false })
        }
    }

    componentDidMount(): void {
        document.addEventListener('mousedown', this.handleOutsideClick);
    }

    componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleOutsideClick);
    }

    render() {
        return (
            <AppStateContext.Consumer>
                {(state) => {
                    const totalPizzas = state.cart.items.reduce((total, item) => {
                        return total + item.quantity
                    }, 0);

                    return (
                        <div className={CartCSS.cartContainer} ref={this.#containerRef}>
                            <button 
                                className={CartCSS.button} 
                                type="button" 
                                onClick={this.handleClick}
                            >
                                <FiShoppingCart />
                                <span>{totalPizzas} pizza(s)</span>
                            </button>
                            <div className={CartCSS.cartDropDown} style={{
                                display: this.state.isOpen ? 'block' : 'none',
                            }}>
                                <ul>
                                    {state.cart.items.map(item => {
                                        return <li key={item.id}>
                                            {item.name} &times; {item.quantity}
                                            </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                }}
            </AppStateContext.Consumer>
        );
    }
}

export default Cart;