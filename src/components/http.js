import {useCallback} from 'react'

export const useHttp = () => {

	const array=[]
	
	const request = useCallback(async (url) => {
				
			const response = await fetch(url)
			const data = await response.json()
			await data.results.map(item=>array.push(item))
			if (data.info.next===null) {	
				return array
			}
		
		return request(data.info.next)
								
	},[])

	return {request}
}

