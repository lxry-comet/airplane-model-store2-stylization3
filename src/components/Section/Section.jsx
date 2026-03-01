import PropTypes from 'prop-types';
import css from "./Section.module.css"; 
// import css from "@/components/Section/Section.module.css"; 
import { TitleLugrasimoBold, GlobalSection } from './Section.styled';


function Section({ title, children }) {
  return (
    <GlobalSection>
      {title
        &&
        <TitleLugrasimoBold
        // className={`${css.title} ${css.lugrasimoBold}`}
        // className={css.titleLugrasimoBold}
        >
          {title}
        </TitleLugrasimoBold>} 
      {children}
    </GlobalSection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;