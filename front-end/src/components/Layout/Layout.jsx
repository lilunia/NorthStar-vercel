import { CurrencySelector } from '../CurrencySelector/CurrencySelector'
import { Footer } from '../Footer/Footer'
import { GenderMenu } from '../GenderMenu/GenderMenu'
import { IconMenu } from '../IconMenu/IconMenu'
import { MainContent } from '../MainContent/MainContent'
import { MainMenu } from '../MainMenu/MainMenu'
import { TopBar } from '../TopBar/TopBar'
import { Logo } from '../Logo/Logo'
import { useEffect, useLayoutEffect, useState } from 'react'
import { MenuBar } from '../MenuBar/MenuBar'
import { useMediaQuery } from 'react-responsive'
import { MenuList } from '../MenuList/MenuList'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Outlet, useLoaderData, useLocation } from 'react-router-dom'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { CURRENCIES } from '../../constants/currencies'

export function Layout() {
	const location = useLocation()
	const cartProducts = useLoaderData()
	const noOfProductsInCart = cartProducts.length

	const [isShopHovering, setIsShopHovering] = useState(false)
	const [isMenuShowed, setIsMenuShowed] = useState(false)
	const [currency, setCurrency] = useState(localStorage['currentCurrency'] || CURRENCIES.EUR)
	const isMobileOrTablet = useMediaQuery({ maxWidth: 768 })
	isMenuShowed ? disableBodyScroll(document) : enableBodyScroll(document)

	useEffect(() => {}, [noOfProductsInCart])

	useLayoutEffect(() => {
		document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' })
	}, [location.pathname])

	return (
		<>
			<CurrencyContext.Provider value={[currency, setCurrency]}>
				<MainContent>
					<TopBar>
						<Logo />
						{isMobileOrTablet ? (
							''
						) : (
							<MainMenu setIsShopHovering={setIsShopHovering} />
						)}

						<div>
							<CurrencySelector />
							<IconMenu noOfProductsInCart={noOfProductsInCart} />
							{isMobileOrTablet ? (
								<MenuBar setIsMenuShowed={setIsMenuShowed} />
							) : (
								''
							)}
						</div>
					</TopBar>

					{isMenuShowed ? <MenuList setIsMenuShowed={setIsMenuShowed} /> : ''}
					{isShopHovering ? <GenderMenu setIsShopHovering={setIsShopHovering} /> : ''}
					<Outlet />
				</MainContent>
				<Footer />
			</CurrencyContext.Provider>
		</>
	)
}
