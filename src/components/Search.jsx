import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const handleChange = (e) => {
		e.preventDefault();
		const { value } = e.target;
		setInput(value)
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/search/'+input)
	}
    return (
        <form className="relative mx-auto text-white bg-gradient-to-r from-[#494949] to-[#313131] w-[80%] h-[50px] border-2 rounded-2xl my-10 px-10"
		  onSubmit={handleSubmit}>
			<input className="border-gray-300  bg-gradient-to-r from-[#494949] to-[#313131] w-full h-10 px-5 mt-1 pr-16 text-sm focus:outline-none"
			  type="search" value={input} onChange={handleChange} />
			<button type="submit" className="absolute right-0 top-0 mt-4 mr-6">
				<FaSearch />
			</button>
      	</form>
    )
}
