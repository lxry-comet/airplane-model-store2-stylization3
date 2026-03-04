import PropTypes from 'prop-types'
import Planes from '@/components/Planes/Planes.jsx' 

// import { getBgColor, } from '@/utils'
// import css from "./PlanesList.module.css"

import { List, Item } from './PlanesList.styled.jsx'

function PlanesList({ items }) {
	return (
		<List>
			{items.map(item => (
				<Item
					// className={getBgColor(item.info.year)}
					// className={css[getBgColor(item.info.year)]}
					key={item.id} yearOfManufacture={item.info.year}
				>
					<Planes
						urlWiki={item.url.wikipedia}
						urlMain={item.url.main}
						urlPromotional={item.url.promotional}
						urlActual={item.url.actual}
						nameBrief={item.name.brief}
						nameFull={item.name.full}
						nickname={item.name.nickname}
						year={item.info.year}
						country={item.info.country}
						type={item.info.type}
						price={item.info.price}
						description={item.info.description}
						start={item.manufacturing.start}
						end={item.manufacturing.end}
					/>
				</Item>
			))}
		</List>
	)
}

PlanesList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired
		})
	)
}

export default PlanesList
