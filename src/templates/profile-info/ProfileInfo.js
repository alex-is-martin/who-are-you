import React from 'react';
import './profile-info.scss';
import Image from '../../atoms/image/Image';
import MainInfo from '../../organisms/main-info/MainInfo';
import SideInfo from '../../organisms/side-info/SideInfo';
import InfoSections from '../../organisms/info-sections/InfoSections';
import { ProfileInfoProvider } from '../../contexts/profileInfoContext';

function ProfileInfo() {
	return (
		<div id='profile-info'>
			<Image className='user-img' />

			<ProfileInfoProvider>
				<MainInfo className='main-info' />
				<InfoSections className='info-sections' />
			</ProfileInfoProvider>

			<SideInfo className='side-info' />
		</div>
	);
}

export default ProfileInfo;
