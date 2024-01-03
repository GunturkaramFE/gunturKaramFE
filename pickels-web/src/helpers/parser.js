export const parseShoppingData = (shoppingData) => {
    let parsedCart = [];
    let parsedWishlist = [];
  
    // Check if cart is a non-empty string and try to parse it
    if (shoppingData.cart && typeof shoppingData.cart === 'string') {
      try {
        parsedCart = JSON.parse(shoppingData.cart);
      } catch (error) {
        console.error('Error parsing cart:', error.message);
      }
    } else if (Array.isArray(shoppingData.cart)) {
      // If cart is already an array, retain it
      parsedCart = shoppingData.cart;
    }
  
    // Check if wishlist is a non-empty string and try to parse it
    if (shoppingData.wishlist && typeof shoppingData.wishlist === 'string') {
      try {
        parsedWishlist = JSON.parse(shoppingData.wishlist);
      } catch (error) {
        console.error('Error parsing wishlist:', error.message);
      }
    } else if (Array.isArray(shoppingData.wishlist)) {
      // If wishlist is already an array, retain it
      parsedWishlist = shoppingData.wishlist;
    }
  
    return {
      ...shoppingData,
      cart: parsedCart,
      wishlist: parsedWishlist,
    };
  };
  