import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css'

interface Props {
	postsPerPage: number;
	totalPosts: number;
	paginate: (p: number) => void;
}

const Paggination = ({ postsPerPage, totalPosts, paginate }: Props) => {

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

    return (
		<div className='new'>
		  <ul >
			{pageNumbers.map(number => (
			  <li key={number}  onClick={() => paginate(number)}>
				<Link to='#' className='page-link'>
				  {number}
				</Link>
			  </li>
			))}
		  </ul>
		</div>
	  );
}

export default Paggination;