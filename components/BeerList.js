import {Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Content } from 'antd/lib/layout/layout';
import beerListStyle from './beerListStyle.module.css'

export default function BeerList({ beerData }){
	const dataSource = beerData.map( (beer) => {
			return {
				id: beer.id,
				name: beer.name,
				description: beer.description,
				image: beer.image_url
			}
		})
	;


	return (
		<Content className={beerListStyle.container}>
				{dataSource.map( (data) => (
					<Card
						title={data.name}
						key={data.id}
						cover={
							<img
								alt={data.name}
								src={data.image}
								className={beerListStyle.imageCard}
							/>
						}
						className={beerListStyle.card}
					>
						<Meta
							description={data.description}
						/>
					</Card>
				))}
		</Content>
	)
}