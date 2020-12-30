import React, { useContext } from 'react';
import './main-info.scss';
import Pin from '../../atoms/pin/Pin';
import Bookmark from '../../atoms/bookmark/Bookmark';
import user from '../../assets/user-info/user.json';
import skillsList from './skillsList';
import Button from '../../atoms/button/Button';
import { FaCommentAlt } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
import { FaAward } from 'react-icons/fa';
import { FaRegNewspaper } from 'react-icons/fa';
import { FaRegHandshake } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaBan } from 'react-icons/fa';
import { ProfileInfoContext } from '../../contexts/profileInfoContext';

function MainInfo(props) {
	const [profileInfo, setProfileInfo] = useContext(ProfileInfoContext);

	return (
		<div className={props.className}>
			{/* Top */}
			<div className='top-line'>
				<div className='left'>
					<div className='name-pin'>
						<h1 className='user-name'>{user.basics.name}</h1>
						<Pin />
					</div>
					<span className='user-label'>{user.basics.label}</span>
				</div>
				<div className='right'>
					<Bookmark />
				</div>
			</div>

			{/* Center Top */}
			<div className='center-top-line'>
				<span className='skills-text'>SKILLS</span>
				<ul className='skills-list'>{skillsList}</ul>
			</div>

			{/* Center Bottom */}
			<div className='center-bottom-line'>
				<div className='profile-button'>
					<FaCommentAlt className='message-icon' />
					<Button href='' className='btn-blank' text='Message' />
				</div>

				<div className='profile-button'>
					<FaPlus className='plus-icon' />
					<Button href='' className='btn-blank' text='Add Contact' />
				</div>

				<div className='profile-button'>
					<FaBan className='report-icon' />
					<Button
						href=''
						className='btn-blank report-button'
						text='Report User'
					/>
				</div>
			</div>

			{/* Bottom */}
			<div className='bottom-line'>
				<div className='profile-tabs'>
					<div
						onClick={() => setProfileInfo('About')}
						className={profileInfo === 'About' ? 'selected-tab' : 'tab'}>
						<FaUserAlt className='icon' />
						<Button className='btn-blank' text='About' />
						<div
							style={{ width: '75px' }}
							id='marker'
							className={profileInfo === 'About' ? '' : 'hide'}></div>
					</div>
					<div
						onClick={() => setProfileInfo('Socials')}
						className={profileInfo === 'Socials' ? 'selected-tab' : 'tab'}>
						<FaUsers className='icon' />
						<Button className='btn-blank' text='Socials' />
						<div
							style={{ width: '84px' }}
							id='marker'
							className={profileInfo === 'Socials' ? '' : 'hide'}></div>
					</div>
					<div
						onClick={() => setProfileInfo('Awards')}
						className={profileInfo === 'Awards' ? 'selected-tab' : 'tab'}>
						<FaAward className='icon' />
						<Button className='btn-blank' text='Awards' />
						<div
							style={{ width: '85px' }}
							id='marker'
							className={profileInfo === 'Awards' ? '' : 'hide'}></div>
					</div>
					<div
						onClick={() => setProfileInfo('Publications')}
						className={profileInfo === 'Publications' ? 'selected-tab' : 'tab'}>
						<FaRegNewspaper className='icon' />
						<Button className='btn-blank' text='Publications' />
						<div
							style={{ width: '125px' }}
							id='marker'
							className={profileInfo === 'Publications' ? '' : 'hide'}></div>
					</div>
					<div
						onClick={() => setProfileInfo('Volunteer')}
						className={profileInfo === 'Volunteer' ? 'selected-tab' : 'tab'}>
						<FaRegHandshake className='icon' />
						<Button className='btn-blank' text='Volunteer' />
						<div
							style={{ width: '105px' }}
							id='marker'
							className={profileInfo === 'Volunteer' ? '' : 'hide'}></div>
					</div>
					<div
						onClick={() => setProfileInfo('References')}
						className={profileInfo === 'References' ? 'selected-tab' : 'tab'}>
						<FaLink className='icon' />
						<Button className='btn-blank' text='References' />
						<div
							style={{ width: '115px' }}
							id='marker'
							className={profileInfo === 'References' ? '' : 'hide'}></div>
					</div>
				</div>
				<div id='horizontal-line'></div>
			</div>
		</div>
	);
}

export default MainInfo;
