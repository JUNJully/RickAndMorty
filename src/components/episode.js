import React from 'react'

export default function Episode ({clickEps,name,date,serialNumber,characters}){

	return (
	<li onClick={()=>clickEps(characters)} className='list-item'><h3>{name}</h3>  
	<p>Release: {date}</p>  
	<p>season {serialNumber.slice(1,3)} episode {serialNumber.slice(4)}</p>
	</li>
		
	)
}