import PropTypes from 'prop-types';
import defaultImage from "../default.jpg"; 
// import css from "./Planes.module.css";

import {ItemTitle, MainImage, TextField, Span, ImageTitles, ImageContainer, ActualImage, Button} from './Planes.styled.jsx'


//! Бібліотека react-icons
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { AiOutlineFlag, AiOutlineInfoCircle, AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { GiArmoredBoomerang, GiCeremonialMask, GiAirplaneDeparture, GiCommercialAirplane, GiCurlyMask, GiAbstract021 } from "react-icons/gi";
import { CiBadgeDollar, CiGlobe, CiAirportSign1 } from "react-icons/ci";
import { TbClockHour4Filled } from "react-icons/tb";
import { FcTrademark } from "react-icons/fc";

//! Реекспорт з папки constants та utils
import { iconSize, iconColor } from '@/constants';
import { getManufacturingYears } from '@/utils/';

export default function Planes({
  urlWiki,
  urlMain = defaultImage, 
  urlPromotional,
  urlActual = [],
  nameBrief,
  nameFull,
  nickname = "не відомо",
  year,
  country,
  type,
  price,
  description,
  start,
  end
}) {
  
  const different = getManufacturingYears(start, end);
  console.log('urlWiki:', urlWiki)
  return (
 
    <>
      <ItemTitle>
        <GiAbstract021 size={iconSize.lg} />
        {nameBrief}
      </ItemTitle>
      
      <a href={urlWiki} target="_blank" rel="noreferrer noopener
"><MainImage src={urlMain} alt={nameBrief} /></a>

      <TextField>
        <FcTrademark size={iconSize.md} /> 
        Повна назва: <Span>{nameFull}</Span>
      </TextField>

      <TextField>
        {/* Логіка: якщо тип містить "літак" — одна іконка, інакше — бумеранг */}
        {type.toLowerCase().includes('літак') ? 
          <GiCommercialAirplane size={iconSize.md} /> : 
          <GiArmoredBoomerang size={iconSize.md} />
        } 
        Тип: <Span>{type}</Span>
      </TextField>

      <TextField>
        <GiCeremonialMask size={iconSize.md} /> 
        Прізвисько: <Span>{nickname}</Span>
      </TextField>

      <TextField>
        <AiOutlineFlag size={iconSize.md} /> 
        Країна виробник: <Span>{country}</Span>
      </TextField>

      <TextField>
        <AiOutlineClockCircle size={iconSize.md} /> 
        Рік випуску: <Span>{year}</Span>
      </TextField>

      {different && (
  <TextField>
    <TbClockHour4Filled size={iconSize.md} /> 
    Тривалість виробництва (в роках): <Span>{different}</Span>
  </TextField>
)}

      <TextField>
        <CiBadgeDollar size={iconSize.md} /> 
        Ціна: <Span>{price}</Span>
      </TextField>

      <TextField>
        <AiOutlineInfoCircle size={iconSize.md} /> 
        Опис: <Span>{description}</Span>
      </TextField>

      <ImageTitles>
        <GiAirplaneDeparture size={iconSize.md} /> 
        Рекламна модель:
      </ImageTitles>
      <img src={urlPromotional} alt="Promotional model"/>

      <ImageTitles>
        <CiAirportSign1 size={iconSize.md} /> 
        Реальна модель:
      </ImageTitles>
      
      <ImageContainer>
        {urlActual.map((item, index) => (
          <ActualImage
            key={index} 
            src={item}
            alt={`${nameBrief} actual view ${index + 1}`}
          />
        ))}
      </ImageContainer>

      <Button type="button">
        Додати до кошику
      </Button>
    </>
  );
}

Planes.propTypes = {
  urlWiki: PropTypes.string,
  urlMain: PropTypes.string,
  urlPromotional: PropTypes.string.isRequired,
  urlActual: PropTypes.arrayOf(PropTypes.string).isRequired,
  nameBrief: PropTypes.string.isRequired,
  nameFull: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  start: PropTypes.number,
  end: PropTypes.number
};