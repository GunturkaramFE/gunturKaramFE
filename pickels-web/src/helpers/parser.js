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
  export function parseProduct(data) {
    const newData = { ...data };

    if (typeof newData.pricelist === 'string') {
        try {
            // Parse the JSON string and assign it to the pricelist property of the new object
            newData.pricelist = JSON.parse(newData.pricelist);
        } catch (error) {
            console.error('Error parsing JSON string:', error);
            // Handle the error as needed, e.g., set pricelist to an empty array
            newData.pricelist = [];
        }
    }

    // Return the modified or original object
    return newData;
}