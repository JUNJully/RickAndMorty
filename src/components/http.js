//let url = 'https://rickandmortyapi.com/api/episode'
export default async function* useHttp(url) {
	let u = url
	while (u) {
		const response = await fetch(u)

		const body = await response.json();

		let nextPage = body.info.next ? body.info.next.slice(url.length) : null;

		u = nextPage ? url + nextPage : null;

		for(let commit of body.results) {
			yield commit;
		}
	}
}




