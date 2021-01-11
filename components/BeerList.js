/* import Table from 'antd'; */

export default function BeerList({ beerData }){
	const dataSource = beerData.map( (beer) => {
			return {
				id: beer.id,
				name: beer.name,
				description: beer.description,
				image_url: beer.image_url
			}
		})
	;
	return (
		<ul>
			{dataSource.map( (data) => (
				<li key={data.id}>{data.id}
					{data.name}
					{data.description}
					{data.image_url}</li>
			) )}
		</ul>
	)
}