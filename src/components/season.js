
import React from 'react'
import Episode from './episode'


export default function Season({isLoading,data,clickEps,season,heroes}) {
	
 if (isLoading) {

	 const array=data.filter(item=>item.episode.includes('S'+season))
	 return (
        <div>
		<h1>{array.length === 0 ? '':'Season '+ season}</h1>
		<ul className='list'>
		{array.map(item=><Episode name={item.name} date={item.air_date} serialNumber={item.episode} key={item.id} clickEps={clickEps} characters={item.characters} heroes={heroes}/>)}
		</ul>
		</div>
       )
	 }
  return (
  <p>Дождитесь окончания загрузки страницы</p>
  )
} 
	