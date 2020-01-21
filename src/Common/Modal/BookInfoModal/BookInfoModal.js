import React from 'react';
import Modal from "../Modal";
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import styles from './../Modal.module.css'

class BookInfoModal extends React.Component {
    state = {
        quantity: 1,
    };

    render() {
        const handleAddToCart = () => {
            this.props.addToCart(this.props.books[this.props.index].isbn13, this.state.quantity)
            this.setState({...this.state, quantity: 1})
        };
        const handleQuantityChange = (ev) => {
            this.setState({...this.state, quantity: ev.target.value})
        };
        return (
            <Modal show={this.props.show}>
                <div className={styles.bookModal}>
                    <div className={styles.bookModalInfo}>
                        <div>{this.props.books[this.props.index].title}</div>
                        <img src={this.props.books[this.props.index].image} alt=""/>
                        <div>{this.props.books[this.props.index].subtitle}</div>
                    </div>
                    <div className={styles.bookModalControl}>
                        <input type="number" min="1" max="99" value={this.state.quantity}
                               onChange={(ev) => handleQuantityChange(ev)}/>
                        <button
                            onClick={() => handleAddToCart()}
                        >
                            <AddShoppingCartTwoToneIcon/>
                        </button>
                    </div>
                    <div>
                        <button
                            className={styles.closeButton}
                            onClick={() => this.props.hideModal()}
                        >Close
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default BookInfoModal;