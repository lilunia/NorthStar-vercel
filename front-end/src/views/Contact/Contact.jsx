import CONTACT from '../../assets/contactus.jpg'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { ContactInfo } from '../../components/ContactInfo/ContactInfo'

export function Contact() {
	return (
		<>
			<div
				style={{
					backgroundImage: `url(${CONTACT})`,
					width: '100%',
					height: '20rem',
					backgroundSize: 'cover',
					backgroundPosition: 'center -10rem',
					backgroundAttachment: 'fixed',
				}}
			></div>
			<CenteredContent>
				<ContactInfo />
			</CenteredContent>
		</>
	)
}
