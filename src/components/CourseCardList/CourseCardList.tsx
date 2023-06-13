/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { CourseCard } from '../courseCard/CourseCard';
import { ICardList } from './types';
import './styles.scss';

const CourseCardList: React.FC<ICardList> = ({ cards, isLogged, onEnroll }) => {
  const cardList = cards.map((card) =>
    isLogged ? (
      <CourseCard
        key={card.id}
        id={card.id}
        description={card.description}
        duration={card.duration}
        name={card.name}
        review={card.review}
        title={card.title}
        action={{
          buttonLabel: 'enroll',
          onButtonClick: (course) => {onEnroll(course)}
        }}
      />
    ) : (
      <CourseCard
        key={card.id}
        id={card.id}
        description={card.description}
        duration={card.duration}
        name={card.name}
        review={card.review}
        title={card.title}
      />
    ),
  );

  return <div className='course-card-list-component'>{cardList}</div>;
};

// TODO: find the right way a declare a array type of type in propTypes
CourseCardList.propTypes = {
  // cards: PropTypes.arrayOf())
  isLogged: PropTypes.bool,
  onEnroll: PropTypes.func.isRequired,
};

export { CourseCardList };
