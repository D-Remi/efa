import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Contact = () => {

	const [formField, setFormField] = useState({});
	const [errorForm, setErrorForm] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormField({
			...formField,
			[name]: value
		})
	}

	const submitForm = (event) => {
		event.preventDefault();
		let errorForm = {};

		if (!formField.name) {
			errorForm = {
				...errorForm,
				name: true
			}
		}

		if (!formField.firstname) {
			errorForm = {
				...errorForm,
				firstname: true
			}
		}

		if (!formField.email) {
			errorForm = {
				...errorForm,
				email: true
			}
		}

		if (!formField.message) {
			errorForm = {
				...errorForm,
				message: true
			}
		}

		if (Object.keys(errorForm).length > 0) {
      setErrorForm(errorForm);
    } else {
      setErrorForm({});
			fetchForm()
    }
	}

	const fetchForm = () => {
		axios.post('/api/contact', formField).then((response) => {
			console.log(response);
		})
	}

	return (
		<div className='baniere link'>
			<article className='container'>
				<h2>Formulaire de Contact</h2>
				<p>
					<address>Par le biais de cette page en remplissant le formulaire ci-dessous</address>
					<address>ou en nous écrivant à l’adresse email : info.efa74@gmail.com</address>
					<address>EFA74 3 RUE LEON REY GRANGE, 74960 ANNECY</address>
				</p>
				<Form className='p-2' onSubmit={submitForm}>
					<Form.Group className="mb-3">
						<Form.Label>Votre Nom</Form.Label>
						<Form.Control type="text" name='name' onChange={handleChange} />
						{
							errorForm && errorForm['name'] ?
								(
									<span style={{ color: 'red' }}>Un probleme sur le champ veuillez le corriger</span>
								) : ""
						}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Votre Prénom</Form.Label>
						<Form.Control type="text" name='firstname' onChange={handleChange} />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Votre Email</Form.Label>
						<Form.Control type="email" placeholder="name@example.com" name='email' onChange={handleChange} />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Votre telephone</Form.Label>
						<Form.Control type="text" name='phone' onChange={handleChange} />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Votre Message</Form.Label>
						<Form.Control as="textarea" rows={3} name='message' onChange={handleChange} />
					</Form.Group>
					<button type='submit' className='btn btn-primary'>Envoyer</button>
				</Form>
			</article>
		</div>
	);
}

export default Contact;