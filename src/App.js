import React from 'react';
import './App.css';
import ShopPageContainer from "./Components/ShopPage/ShopPageContainer";
import DrawerLeft from "./Components/Drawer/DrawerLeft";
import {Route, withRouter} from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import {connect} from 'react-redux';
import {startPollingAction} from './Redux/Actions';

class App extends React.Component {

  componentDidMount() {
    this.props.startPollingAction()
  }
  render() {
    return (
      <div className="app-wrapper">
        <DrawerLeft />
        <div className='app-wrapper-content'>
          <Route path='/shop'
                 render={() => <ShopPageContainer/>}/>
          <Route path='/cart'
                 render={() => <Cart/>}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { books: state.cartPage.shopItems.books }
};

export default withRouter(connect(mapStateToProps, { startPollingAction })(App));
