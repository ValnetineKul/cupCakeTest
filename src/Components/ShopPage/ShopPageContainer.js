import React from 'react';
import ShopPage from "./ShopPage";
import {connect} from "react-redux";
import { addToCart } from '../../Redux/Actions';
import Preloader from "../../Common/Preloader/Preloader";

class ShopPageContainer extends React.Component {
    render() {
        if(this.props.books.length < 1) {
            return <Preloader/>
        }
        return (
        <ShopPage
          books={this.props.books}
          addedItems={this.props.addedItems}
          addToCart={this.props.addToCart}
        />
    )}
}
const mapStateToProps = (state) => ({
    books: state.cartPage.shopItems.books,
    addedItems: state.cartPage.addedItems,
});

export default connect(mapStateToProps, { addToCart })(ShopPageContainer);