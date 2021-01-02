import React, { useContext } from 'react';
import './socials.scss';
import user from '../../assets/user-info/user.json';
import { ProfileInfoContext } from '../../contexts/profileInfoContext';

function Socials() {
	const [profileInfo, setProfileInfo] = useContext(ProfileInfoContext);
	return (
		<div className={profileInfo === 'Socials' ? 'section' : 'hide'}>
			<span className='section-single-title'>SOCIALS</span>
			{user.basics.profiles.map((profile) => (
				<div className='sub-section' key={profile.network}>
					<div className='info-line'>
						<span className='info-line-title'>Network:</span>
						<span className='info-line-user-info'>{profile.network}</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Username:</span>
						<span className='info-line-user-info'>
							{'@' + profile.username}
						</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Url:</span>
						<span className='info-line-user-info color'>{profile.url}</span>
					</div>
					<div className='spacer'></div>
				</div>
			))}
		</div>
	);
}

export default Socials;
