import React, { useContext } from 'react';
import './volunteer.scss';
import user from '../../assets/user-info/user.json';
import { ProfileInfoContext } from '../../contexts/profileInfoContext';

function Volunteer() {
	const [profileInfo, setProfileInfo] = useContext(ProfileInfoContext);
	return (
		<div className={profileInfo === 'Volunteer' ? 'section' : 'hide'}>
			<span className='section-single-title'>VOLUNTEER</span>
			{user.volunteer.map((volunteer) => (
				<div className='sub-section' key={volunteer.organization}>
					<div className='info-line'>
						<span className='info-line-title'>Organization:</span>
						<span className='info-line-user-info'>
							{volunteer.organization}
						</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Position:</span>
						<span className='info-line-user-info'>{volunteer.position}</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Date:</span>
						<span className='info-line-user-info'>
							{volunteer.startDate.substr(0, 4) +
								' - ' +
								volunteer.endDate.substr(0, 4)}
						</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Website:</span>
						<span className='info-line-user-info color'>
							{volunteer.website}
						</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Highlights:</span>
						<span className='info-line-user-info'>
							{volunteer.highlights.map(
								(highlight) =>
									highlight +
									(highlight ===
									volunteer.highlights[volunteer.highlights.length - 1]
										? ''
										: ', ')
							)}
						</span>
					</div>
					<div className='info-line'>
						<span className='info-line-title'>Summary:</span>
						<span className='info-line-user-info'>{volunteer.summary}</span>
					</div>
					<div className='spacer'></div>
				</div>
			))}
		</div>
	);
}

export default Volunteer;
