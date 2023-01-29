import React from 'react';

const Adhesion = () => {
	return (
		<div className='baniere'>
			<article className='container'>
				<div className="mb-2" style={{ backgroundColor: '#1e73be', padding: '1em 2em', width: '100%' }}>
					<h1 className='text-center text-white'>Comment devenir adhérent à EFA 74 ?</h1>
				</div>
				<h2 style={{ color: '#1e73be' }} className='text-center font-weight-bold mb-3'>Adhérer à Enfance & Familles d’Adoption,</h2>
				<section>
					<p>C’est <span style={{ color: '#1e73be' }} className='font-weight-bold'>bénéficier de l’information</span> disponible à l’association, de l’expérience des autres familles, de leur soutien si des difficultés surgissent ;</p>
					<p>C’est aussi <span style={{ color: '#1e73be' }} className='font-weight-bold'>partager son propre parcours</span>, échanger avec ceux qui en ont besoin et pourquoi pas <span style={{ color: '#1e73be' }} className='font-weight-bold'>s’investir</span> dans l’association à son tour ;</p>
					<p>Enfin, c’est <span style={{ color: '#1e73be' }} className='font-weight-bold'>être représenté</span>, au niveau départemental et national, et faire ainsi entendre sa voix pour tout ce qui concerne l’avenir de l’adoption.</p>
				</section>
			</article>
			<section className='container'>
				<h3>Les Possibilités pour Adhérer</h3>
				<article className='d-flex justify-content-around'>
					<div style={{  border: '2px solid #1e73be', padding:'2em 1em'}}>
						<h4 className='text-center'>Par Courriel</h4>
						<p>– Téléchargez et complétez le bulletin d’adhésion ci-dessous ;</p>
						<p>– le bulletin d’adhésion -> <a href="" download>telecharger</a></p>
						<p>– Envoyez-le par mail à l’adresse info.efa74@gmail.com</p>
					</div>
					<div style={{ border: '2px solid #1e73be', padding:'2em 1em' }}>
						<h4 className='text-center'>Par Courrier</h4>
						<p>– Téléchargez et complétez le bulletin d’adhésion ci-dessous ;</p>
						<p>– le bulletin d’adhésion -> <a href="" download>telecharger</a></p>
						<p>–envoyez le tout à notre trésorier dont l’adresse figure sur le bulletin</p>
					</div>
				</article>
			</section>
		</div>
	);
};

export default Adhesion;