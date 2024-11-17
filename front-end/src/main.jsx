import './styles/theme.css'
import './styles/globals.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Cart } from './views/Cart/Cart'
import { Favourites } from './views/Favourites/Favourites'
import { Home } from './views/Home/Home'
import { ProductsList } from './views/ProductsList/ProductsList'
import { SingleProduct } from './views/SingleProduct/SingleProduct'
import { productListLoader } from './api/productListLoader'
import { productAndCartLoader } from './api/productAndCartLoader'
import { addToFavourites } from './api/addToFavourites'
import { favouritesLoader } from './api/favouritesLoader'
import { deleteFromFavourites } from './api/deleteFromFavourites'
import { addToCart } from './api/addToCart'
import { cartLoader } from './api/cartLoader'
import { deleteFromCart } from './api/deleteFromCart'
import { newsAndBestsLoader } from './api/newsAndBestsLoader'
import { About } from './views/About/About'
import { Contact } from './views/Contact/Contact'
import { Error } from './components/Error/Error'

const router = createBrowserRouter([
	{
		path: '/add-to-favourites/:productId/:size?',
		action: addToFavourites,
	},
	{
		path: '/delete-from-favourites/:favouriteId',
		action: deleteFromFavourites,
	},
	{
		path: '/add-to-cart/:productId/:size/:quantity?',
		action: addToCart,
	},
	{
		path: '/delete-from-cart/:productId',
		action: deleteFromCart,
	},
	{
		path: '',
		element: <Layout />,
		loader: cartLoader,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: newsAndBestsLoader,
			},
			{
				path: 'about-us',
				element: <About />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'cart',
				element: <Cart />,
				loader: cartLoader,
			},
			{
				path: 'favourites',
				element: <Favourites />,
				loader: favouritesLoader,
			},
			{
				path: '/:category/:gender?/:subcategory?',
				element: <ProductsList />,
				loader: productListLoader,
			},
			{
				path: '/:category/:gender?/:subcategory/:productId',
				element: <SingleProduct />,
				loader: productAndCartLoader,
			},
		],
	},
])
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)
