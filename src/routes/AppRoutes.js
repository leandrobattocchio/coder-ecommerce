import { Suspense, lazy } from 'react'
import Spinner from '../components/spinner/Spinner';
import { Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('../pages/home/Home'))
const Login = lazy(() => import('../pages/login/Login'))
const Register = lazy(() => import('../pages/register/Register'))
const Categories = lazy(() => import('../pages/categories/Categories'))
const GameInfo = lazy(() => import('../pages/game-info/GameInfo'))
const Cart = lazy(() => import('../pages/cart/Cart'))
const Error = lazy(() => import('../pages/error/Error'))
const UserInfo = lazy(() => import('../pages/user-info/UserInfo'));


const AppRoutes = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/category/:categoryId' element={<Categories />} />
                <Route path='/game/:gameId' element={<GameInfo />} />
                <Route path='/user-info/' element={<UserInfo />} />
                <Route path='/cart-widget' element={<Cart />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes