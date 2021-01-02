import React, { useContext } from 'react';
import './awards.scss';
import user from '../../assets/user-info/user.json';
import { ProfileInfoContext } from '../../contexts/profileInfoContext';

function Awards() {
	const [profileInfo, setProfileInfo] = useContext(ProfileInfoContext);
	return (
		<div className={profileInfo === 'Awards' ? 'section' : 'hide'}>
			<span className='section-single-title'>AWARDS</span>
			{user.awards.map((award) => (
				<div className='sub-section' key={award.title}>
					<div className='info-line'>
						<span className='info-line-title'>Award:</span>
						<span className='info-line-user-info'>{award.title}</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Awarder:</span>
						<span className='info-line-user-info'>{award.awarder}</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Date:</span>
						<span className='info-line-user-info'>{award.date}</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Website:</span>
						<span className='info-line-user-info color'>{award.website}</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Summary:</span>
						<span className='info-line-user-info'>{award.summary}</span>
					</div>
					<div className='spacer'></div>
				</div>
			))}
		</div>
	);
}

export default Awards;
