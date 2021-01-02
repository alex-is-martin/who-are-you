import React from 'react';
import './side-info.scss';
import workList from './workList';
import educationList from './educationList';

function SideInfo(props) {
	return (
		<div className={props.className}>
			<div className='side-container'>
				<div className='text-line'>
					<span className='text-line-text'>WORK</span>
					<div id='horizontal-line'></div>
				</div>
				<ul className='side-list'>{workList}</ul>
			</div>

			<div className='side-container'>
				<div className='text-line'>
					<span className='text-line-text'>EDUCATION</span>
					<div id='horizontal-line'></div>
				</div>
				<ul className='side-list'>{educationList}</ul>
			</div>
		</div>
	);
}

export default SideInfo;
