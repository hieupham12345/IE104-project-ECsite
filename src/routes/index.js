import HomePage from '../pages/HomePage/HomePage';
import OrderPage from '../pages/OrderPage/OrderPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';
import RegisterPage from './../pages/RegisterPage/RegisterPage';
import ProductCategory from './../pages/ProductsCategory/ProductsCategory';
import AccountInfo from './../pages/Profile/AccountInfo';
import AccountEdit from './../pages/Profile/AccountEdit';
import AccountAddress from '../pages/Profile/AccountAddress';
import Order from '../pages/Profile/Order';
import LikeProduct from '../pages/Profile/LikeProduct';
import refund from '../pages/Profile/refund';

export const routes=[
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path:'/product-category',
        page: ProductCategory,
        isShowHeader: true
    },
    {
        path:'/product-details',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path:'/login',
        page: LoginPage,
        isShowHeader: true
    },
    {
        path:'/register',
        page: RegisterPage,
        isShowHeader: true
    },

    {
        path:'/profile/account',
        page: AccountInfo,
        isShowHeader: true
    },
    {
        path:'/profile/account/edit',
        page: AccountEdit,
        isShowHeader: true
    },
    {
        path:'/profile/account/address',
        page: AccountAddress,
        isShowHeader: true
    },
    {
        path:'/profile/account/order',
        page: Order,
        isShowHeader: true
    },
    {
        path:'/profile/account/like-product',
        page: LikeProduct,
        isShowHeader: true
    },
    {
        path:'/profile/account/refund',
        page: refund,
        isShowHeader: true
    },
    {
        path: "*",
        page: NotFoundPage
    }
]