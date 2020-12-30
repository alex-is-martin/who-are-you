import React from 'react';
import './info-sections.scss';
import About from '../../molecules/about/About';
import Socials from '../../molecules/socials/Socials';
import Awards from '../../molecules/awards/Awards';
import Publications from '../../molecules/publications/Publications';
import Volunteer from '../../molecules/volunteer/Volunteer';
import References from '../../molecules/references/References';

function InfoSections(props) {
	return (
		<div className='info-sections'>
			<About />
			<Socials />
			<Awards />
			<Publications />
			<Volunteer />
			<References />
		</div>
	);
}

export default InfoSections;
