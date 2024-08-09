import { useState } from 'react'
import { Button } from '../Button/Button'
import { CenteredContent } from '../CenteredContent/CenteredContent'
import styles from '../ContactInfo/ContactInfo.module.css'
import { NavLink } from 'react-router-dom'

export function ContactInfo() {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [message, setMessage] = useState('')
	const [error, setError] = useState('')
	const [send, setSend] = useState(false)

	function checkAForm(e) {
		const reName = /^[a-zA-Z]+$/
		const reMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
		e.preventDefault()
		if (email !== '' && name !== '' && message.trim() !== '') {
			if (!reMail.test(email)) {
				setError('Enter a correct email')
			} else if (!reName.test(name)) {
				setError('Enter a correct name')
			} else {
				setError('')
				setSend(true)
				setEmail('')
				setName('')
				setMessage('')
			}
		} else {
			setError('Please fill in the form')
		}
	}

	return (
		<CenteredContent>
			<h3>Contact us</h3>

			<div className={styles.description}>
				<p>We would love to hear from you.</p>
				<p>
					If you have any query or any type of suggestion, you can contact us here. We
					would love to hear from you.
				</p>
			</div>
			<div className={styles.contact}>
				{!send && (
					<form className={styles.form} onSubmit={checkAForm}>
						<div className={styles.formDetails}>
							<div className={styles.formEmail}>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									id='email'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className={styles.formName}>
								<label htmlFor='name'>Name</label>
								<input
									type='name'
									id='name'
									value={name}
									onChange={e => setName(e.target.value)}
								/>
							</div>
						</div>
						<div className={styles.formMessage}>
							<label htmlFor='message'>Message</label>
							<textarea
								type='message'
								id='message'
								value={message}
								onChange={e => setMessage(e.target.value)}
							/>
						</div>
						<p className={styles.error}>{error}</p>
						<Button border={true}>Send a message</Button>
					</form>
				)}

				{send && (
					<div className={styles.send}>
						<p>Message sent. We’ll contact you soon.</p>
						<NavLink to={'/contact'}>
							<Button border={true} onClick={() => setSend(false)}>
								Go back
							</Button>
						</NavLink>
					</div>
				)}

				<div className={styles.detailsInfo}>
					<div className={styles.place}>
						<p className={styles.contactHeader}>Visit us</p>
						<p>Bergen, Norway</p>
						<p>Mon-Fri 11:00 a.m - 6:00 p.m</p>
						<p>Phone: +4703989897</p>
					</div>
					<div className={styles.email}>
						<p className={styles.contactHeader}>Get In Touch</p>
						<p>You can get in touch with us on this provided email. </p>
						<p>Email: contact@northstar.com</p>
					</div>
				</div>
			</div>
		</CenteredContent>
	)
}
