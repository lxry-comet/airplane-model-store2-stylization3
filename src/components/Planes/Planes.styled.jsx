import styled from '@emotion/styled';

export const ItemTitle = styled.h3`
	display: flex;
  align-items: center;
	justify-content: center;
	align-items: center;
  gap: 10px;

	// margin-bottom: 12px;
	/*//! Налаштування відступів - spacing */
  margin-bottom: ${props => props.theme.spacing(3)};

	padding: 12px 16px;
	font-size: 32px;
	text-align: center;
	border-radius: 8px;
	background-color: yellow;
	color: blue;
`
export const MainImage = styled.img`

`
export const TextField = styled.p`
  display: flex;
  // align-items: center;
  gap: 8px;        
  margin-bottom: 10px;
	font-size: 18px;
	font-weight: 700; 
	
	// стилізація іконки:
	svg{
  	color: purple;          
		// min-width: 28px;
		min-width: ${props => props.theme.iconSize.md}px;

	}
`
export const Span = styled.span`
	font-weight: 400;
	font-style: italic;
`
export const ImageTitles = styled.h4`
	text-align: center;
	color: blue;
`

export const ImageContainer = styled.div`
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	padding: 8px;
	border-radius: 8px;
	background-color: gray;
`
export const ActualImage = styled.img`
	max-width: calc((100% - 10px) / 2);
	border-radius: 4px;
`
export const Button = styled.button`
	display: flex;
  justify-content: center;
  align-items: center;

	width: 70%;
	margin: 20px auto;
	padding: 16px 32px;
	display: block;
	align-items: center;
	font-family:
		'Franklin Gothic Medium',
		Arial Narrow;
	font-weight: 700;
	font-size: 1.5rem;
	border-radius: 12px;
	color: #ffffff;
	cursor: pointer;
	background-color: #008080;
	text-shadow:
		1px 1px 2px rgba(0, 0, 0, 0.4),
		2px 2px 4px rgba(0, 0, 0, 0.2),
		4px 4px 8px rgba(0, 0, 0, 0.1);
	box-shadow:
		inset 0 0 16px 8px rgba(0, 0, 0, 0.3),
		0 8px 16px rgba(0, 0, 0, 0.9);

		:hover{
		color: #008080;
		background-color: #ffffff;
		}
`