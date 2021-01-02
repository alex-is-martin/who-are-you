import React, { useContext } from 'react';
import './publications.scss';
import user from '../../assets/user-info/user.json';
import { ProfileInfoContext } from '../../contexts/profileInfoContext';

function Publications() {
	const [profileInfo, setProfileInfo] = useContext(ProfileInfoContext);
	return (
		<div className={profileInfo === 'Publications' ? 'section' : 'hide'}>
			<span className='section-single-title'>PUBLICATIONS</span>
			{user.publications.map((publication) => (
				<div className='sub-section' key={publication.name}>
					<div className='info-line'>
						<span className='info-line-title'>Title:</span>
						<span className='info-line-user-info'>{publication.name}</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Publisher:</span>
						<span className='info-line-user-info'>{publication.publisher}</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Release Date:</span>
						<span className='info-line-user-info'>
							{publication.releaseDate}
						</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Website:</span>
						<span className='info-line-user-info color'>
							{publication.website}
						</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Summary:</span>
						<span className='info-line-user-info'>{publication.summary}</span>
					</div>
					<div className='spacer'></div>
				</div>
			))}
		</div>
	);
}

export default Publications;
