import styled from '@emotion/styled';
import { getBgColorEmotion } from '@/utils/getBackgroundColor.js';

export const List = styled.ul`
	margin-left: 10px;
	margin-right: 10px;
	padding: 10px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(445px, 1fr));
	gap: 32px;
	outline: 1px solid red;
`
//todo: backgroundColor: '#ffdb92', ---> "year" до 1946
//todo: backgroundColor: '#d2fdbd', ---> "year" від 1946 і до 1999
//todo: backgroundColor: '#d6f1ff', ---> "year" від 2000  */
//! Функція для зміни кольору фону
//todo: var.2
// function getBgColorEmotion({ yearOfManufacture }) {
//     // console.log("@emotion/styled_yearOfManufacture:", yearOfManufacture); //!
//     let bgColor = '#ffdb92';
//     if (yearOfManufacture > 1945) bgColor = '#d2fdbd';
//     if (yearOfManufacture > 1999) bgColor = '#d6f1ff';
//     return bgColor;
// };

export const Item = styled.li`
	display: grid;
	gap: 12px;
	padding: 10px;
	// background-color: #ffdb92;

	/*//! Пропси від: <PlanesItem key={item.id} yearOfManufacture={item.info.year}>*/
    ${(props) => console.log("props:", props)}
		//todo: var.2
    background-color: ${getBgColorEmotion};
`

