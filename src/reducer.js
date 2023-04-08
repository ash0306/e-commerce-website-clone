export const initialState = {
    details : [],
    basket : [],
    wishlist : [],
    user : 'false'
};

export const getBasketTotal = (basket) => basket?.reduce((amount, product) => product.price + amount, 0);

const reducer = (state,action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
              ...state,
                user: action.user
            }
        case 'DELETE_USER':
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket : [...state.basket, action.product],
            };
        case 'ADD_TO_WISHLIST':
            return{
                ...state,
                wishlist : [...state.wishlist, action.product],
            }
        
        case 'SHOW_DESCRIPTION':
            return{
                ...state,
                details: [...state.details, action.product],
            };
        case 'CLEAR_DESCRIPTION':
            return {
                ...state,
                details: []
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];

            if(index>=0){
                newBasket.splice(index,1);
            }
            else{
                console.warn('Cannot remove product as its not in basket')
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'REMOVE_FROM_WISHLIST':
            const ind = state.wishlist.findIndex(
                (wishlistItem) => wishlistItem.id === action.id);
            let newWishlist = [...state.wishlist];
    
            if(ind>=0){
                newWishlist.splice(ind,1);
            }
            else{
                console.warn('Cannot remove product as its not in wishlist')
            }
            return {
                ...state,
                wishlist: newWishlist
        }
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        default:
            return state;
    }
};

export default reducer;