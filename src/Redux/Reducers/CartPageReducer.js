import * as TYPES from '../Type';

const initState = {
  shopItems: {
    "error": 0,
    "total": 0,
    "books": []
  },
  addedItems: [],
  totalSum: 0,
  totalCartItems: 0,
};

const cartPageReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART : {
      const addedItem = state.shopItems.books.find(item => item.isbn13 === action.id);
      const existedItem = state.addedItems.find(item => item.isbn13 === action.id);
      if (existedItem) {
        addedItem.quantity += +action.quantity;

        return {
          ...state,
          totalSum: +state.totalSum + +addedItem.price * +action.quantity,
          totalCartItems: +state.totalCartItems + +action.quantity,
        }
      } else {
        addedItem.quantity = +action.quantity;
        let newTotal = +state.totalSum + +addedItem.price * +action.quantity;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          totalSum: newTotal,
          totalCartItems: +state.totalCartItems + +action.quantity,
        }
      }
    }
    case TYPES.ADD_QUANTITY : {
      let addedItem = state.shopItems.books.find(item => item.isbn13 === action.id);
      addedItem.quantity += 1;
      let newTotal = +state.totalSum + +addedItem.price;
      return {
        ...state,
        totalSum: newTotal,
        totalCartItems: state.totalCartItems + 1,
      }
    }
    case TYPES.SUB_QUANTITY : {
      const addedItem = state.shopItems.books.find(item => item.isbn13 === action.id);
      if (addedItem.quantity === 1) {
        let newItems = state.addedItems.filter(item => item.isbn13 !== action.id);
        let newTotal = +state.totalSum - +addedItem.price;
        return {
          ...state,
          addedItems: newItems,
          totalSum: newTotal,
          totalCartItems: state.totalCartItems - 1,
        }
      } else {
        addedItem.quantity -= 1;
        let newTotal = +state.totalSum - +addedItem.price;
        return {
          ...state,
          totalSum: newTotal,
          totalCartItems: state.totalCartItems - 1,
        }
      }
    }
    case TYPES.REMOVE_ITEM : {
      let itemToRemove = state.addedItems.find(item => item.isbn13 === action.id);
      let newItems = state.addedItems.filter(item => item.isbn13 !== action.id);
      let newTotal = state.totalSum - (itemToRemove.quantity * itemToRemove.price);
      return {
        ...state,
        addedItems: newItems,
        totalSum: newTotal,
        totalCartItems: state.totalCartItems - itemToRemove.quantity,
      }
    }
    case TYPES.SET_ITEMS : {
      return {
        ...state,
        shopItems: action.data
      }
    }
    case TYPES.START_POLLING: {
      return state;
    }
    default : {
      return state
    }
  }
};
export default cartPageReducer;