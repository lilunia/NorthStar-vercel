import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import HERO_IMG from '../../assets/aboutus.jpg'
import { AboutUsInfo } from '../../components/AboutUsInfo/AboutUsInfo'

export function About() {
	return (
		<>
			<div
				style={{
					backgroundImage: `url(${HERO_IMG})`,
					width: '100%',
					height: '20rem',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
				}}
			></div>
			<CenteredContent>
				<AboutUsInfo />
			</CenteredContent>
		</>
	)
}
