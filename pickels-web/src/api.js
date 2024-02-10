import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8008",
});
const adminRoutes=["/user/Order/sort", "/user/create-order", "/user/verifyVoucher"]
const authenticatedRoutes = [
  '/user/getShoppingData',
  '/user/updateUserShoppingList',
  '/user/getShippingAddress',
  '/user/removeShippingAddress',
  '/user/saveAddress',
  '/user/setDefaultAddress',
  "/user/addShippingAddress",
  "/user/create-order",
  "/user/Order/sort",
  "/user/verifyVoucher",
  "/user/updateVoucher",
  "/user/getVoucher",
  "/user/addVoucher",
  "/user/updateVoucher",
 "/user/order/update",
 "/user/getUser",
 '/user/myorders',
 "/user/getorder",
 "/user/order/update",
 "/user/requestUserName",
 "/user/getShippingAddress",
 "/user/usersdata",
 "/user/get-items",
 "/user/delete-Item",
 "/user/Order/get"
]
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Auth');
    // Check if the current route is in the array of authenticated routes
    if (token && authenticatedRoutes.some(route => config.url===route)) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
