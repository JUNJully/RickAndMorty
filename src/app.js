
const  React = require('react')
import {useState,useEffect} from 'react'
import Season from './components/season'
import Search from './components/search'
import Modal from './components/modal'
import './styles/theme.css'


 export default function App() {
	const [state,setState] = useState({loading:false,data:null}) //отображение списка серий на главной странице
	const [inputValue,setInputValue] = useState('начальное значение')//управление input для поиска по списку
	const [heroes,setHeroes] = useState([])//список героев, участвующих в конкретном эпизоде
	const [toMain,setToMain] = useState(false)// показать или скрыть кнопку возврата на главную страницу
	const [backState,setBackState] = useState(false)// вернуть начальное состояние (отобразить список всех серий)
	const [modalShow,setModalShow] = useState(false)// показать или скрыть модальное окно с описанием эпизода
	
	// получаем список серий на главную страницу 
 	useEffect(()=>{
	fetch('https://rickandmortyapi.com/api/episode/')
	.then(res=>res.json())
	.then(result=>setState({loading:true,data:result.results}))
	setBackState(false)
	},[backState])
	
	//поиск по списку серий 
	function clickFind(){
		const find = state.data.filter(item=>item.name.toLowerCase().includes(inputValue.toLowerCase()))	
		setState({loading:true,data:find})
		setToMain(true)
	}
	
	//контролируем инпут поиска
	function inputFind(event) {
	   setInputValue(event.target.value)
	}

   //получаем список героев выбранного эпизода и показываем его в модальном окне при клике на эпизод
   function epsInfo(characters) {
     characters.map(item=>fetch(item)
		.then(res=>res.json())
		.then(result=>setHeroes(result.name)))	
	 setModalShow(true)
   }
   
   // возвращаемся на главную страницу
   function backToMain(){
	   setToMain(false)
	   setBackState(true)
   }
   
   //закрыть модальное окно
   function closeModal(){
	   setModalShow(false)
	   setHeroes([])
   }
	
	return ( <div className='card center'>
	
	<h1>Rick and Morty</h1>
	
	<Search click={clickFind} input={inputFind}/>
	
	<div>{modalShow ? <Modal closeModal={closeModal} characters={heroes}/>:''}</div>
	
	<Season season={'01'} isLoading={state.loading} data={state.data} clickEps={epsInfo} heroes={heroes}/>
	<Season season={'02'} isLoading={state.loading} data={state.data} clickEps={epsInfo} heroes={heroes}/>
	
	<p>{toMain ? <button onClick={backToMain}>To main</button> : ''}</p>
    
	</div>
	)
}



