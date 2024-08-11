import { Hero } from '../../components/Hero/Hero'
import HERO_IMG from '../../assets/hero.jpg'
import { NewArrivals } from '../../components/NewArrivals/NewArrivals'
import { Baner } from '../../components/Baner/Baner'
import { SpecialOffer } from '../../components/SpecialOffer/SpecialOffer'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { Products } from '../../components/Products/Products'
import { Button } from '../../components/Button/Button'
import { FlexCenter } from '../../components/FlexCenter/FlexCenter'
import { NavLink, useLoaderData } from 'react-router-dom'

export function Home() {
	const products = useLoaderData()
console.log(products);
	const news = products[0]
	const bestsellers = products[1]

	return (
		<>
			<Hero heroImage={HERO_IMG} />
			<CenteredContent>
				<NewArrivals products={news} />
				<Baner />
				<SpecialOffer />
				<Products
					headerText='Top Sellers'
					textInfo='Browse our top-selling products'
					products={bestsellers}
				/>
				<FlexCenter>
					<NavLink to={'/shop/woman'}>
						<Button border={true}>Buy now</Button>
					</NavLink>
				</FlexCenter>
			</CenteredContent>
		</>
	)
}
