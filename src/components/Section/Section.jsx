import PropTypes from 'prop-types';
import css from "./Section.module.css"; 
// import css from "@/components/Section/Section.module.css"; 
import { TitleLugrasimoBold } from './Section.styled';


function Section({ title, children }) {
  return (
    <section>
      {title
        &&
        <TitleLugrasimoBold
        // className={`${css.title} ${css.lugrasimoBold}`}
        // className={css.titleLugrasimoBold}
        >
          {title}
        </TitleLugrasimoBold>} 
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;