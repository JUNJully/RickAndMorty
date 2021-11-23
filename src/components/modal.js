import React from 'react'
import {useState} from 'react'

export default function Modal({characters,modalShow,closeModal}){
     console.log(characters)
	  return ( <div className='modal'>
	<p>В эпизоде снимались:</p>
	<p>{}</p>
	<button onClick={closeModal}>Close</button>
	</div>
	)	
}