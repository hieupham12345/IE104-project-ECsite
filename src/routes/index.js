import HomePage from '../pages/HomePage/HomePage';
import OrderPage from '../pages/OrderPage/OrderPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';

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
        path:'/product',
        page: ProductsPage,
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
        path: "*",
        page: NotFoundPage
    }
]