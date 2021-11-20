import React from 'react'

export default function SearchInput({input}) {
	return (
	<input className='form-control input' type='text' onChange={input}/>
	)
}