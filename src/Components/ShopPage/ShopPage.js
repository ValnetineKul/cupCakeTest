import React from 'react';
import styles from './ShopPage.module.css';
import ShopPageBookList from "./ShopPageBookList/ShopPageBookList";
import BookInfoModal from '../../Common/Modal/BookInfoModal/BookInfoModal'

class ShopPage extends React.Component {

    state = {
        show: false,
        currentBook: 0,
    };

    showModal = (index) => {
        this.setState({
            show: true,
            currentBook: index,
        });
    };

    hideModal = () => {
        this.setState({show: false});
    };

    render() {
        return (
            <div
                className={styles.shopPage}>
                <ShopPageBookList
                    books={this.props.books}
                    currentBook={this.state.currentBook}
                    showModal={this.showModal}
                />
                <BookInfoModal
                    show={this.state.show}
                    books={this.props.books}
                    addedItems={this.props.addedItems}
                    index={this.state.currentBook}
                    hideModal={this.hideModal}
                    addToCart={this.props.addToCart}
                    setTotalCartItems={this.props.setTotalCartItems}
                />
            </div>)
    }
}

export default ShopPage;
