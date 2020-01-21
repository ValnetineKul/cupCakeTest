import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {addQuantity, removeItem, subtractQuantity} from '../../Redux/Actions';
import Divider from '@material-ui/core/Divider';

class Cart extends React.Component {

  render() {
    let addedItems = this.props.addedItems.length >= 1 ? (this.props.addedItems.map(item => (
        <div>
          <div>
            {item.title}
          </div>
          <div>
            {item.subtitle}
          </div>
          <img src={item.image} alt=''/>
          <div>
            {item.price}$
          </div>
          <div>
            <div>
                <div>
                    Quantity : {item.quantity}
                </div>
                <div>
                    Total for this item: {parseFloat(item.price * item.quantity).toFixed(2)}$
                </div>
            </div>
            <button onClick={() => (this.props.addQuantity(item.isbn13))}>+</button>
            <button onClick={() => (this.props.subtractQuantity(item.isbn13))}>-</button>
          </div>
            <div>
                <button onClick={() => (this.props.removeItem(item.isbn13))}>Remove</button>
            </div>
          <Divider/>
        </div>)))
      : (
        <div>
          Nothing
        </div>);


    return (
      <div>
        <div>
          <NavLink to='/shop'>back</NavLink>
        </div>
        <div>
          {addedItems}
        </div>
        <div>
          Total : {parseFloat((this.props.totalSum).toFixed(2))}$
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.cartPage.addedItems,
      totalSum: state.cartPage.totalSum,
  }
};


export default connect(mapStateToProps, {removeItem, addQuantity, subtractQuantity})(Cart);
