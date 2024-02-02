import api from "../api"

export const updateUserWishList = async(items)=>{
await api.put('/user/updateUserShoppingList', { document: { wishlist: items } })
}