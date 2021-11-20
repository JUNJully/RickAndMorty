import React from 'react'
import SearchInput from './searchInput'
import SearchButton from './searchButton'

export default function Search({click,input}){
	return (
	<div>
	<SearchInput input={input}/><SearchButton click={click}/>
	</div>
	)
}