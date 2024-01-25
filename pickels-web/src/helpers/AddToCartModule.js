import { useDispatch, useSelector } from "react-redux";
import api from "../api";
import { setShoppingData } from "../store/shoppingSlicer";
import { parseShoppingData } from "./parser";

export const updateCart = async (data, shoppingData, dispatch) => {
  let response = await api.put('/user/updateUserShoppingList', { document: { cart: data } });

  if (response.success) {
    let obj = { ...shoppingData };
    obj.cart = data;
    dispatch(setShoppingData(obj));
  }
}

export const AddProductToCart = async ({ item }) => {
  const dispatch = useDispatch();
  const shoppingData = useSelector((state) => state.shopping);

  try {
    let parsedData = await parseShoppingData(shoppingData);
    const product = { ...item };

    product.cartId = parsedData.cart.length + 1;
    let filtered = parsedData?.cart.filter((x) => x.id === product.id);

    if (filtered.length) {
      let isSameCart = filtered.find((x) => x.selectedQuantity.price === product.selectedQuantity.price);
      if (isSameCart === undefined) {
        let jsonobj = JSON.stringify([product, ...parsedData.cart]);
        await updateCart(jsonobj, shoppingData, dispatch);
      } else {
        // Do something if it's the same cart
      }
    } else {
      let jsonobj = JSON.stringify([product, ...parsedData.cart]);
      await updateCart(jsonobj, shoppingData, dispatch);
    }
  } catch (error) {
    // Handle error
  }
}
