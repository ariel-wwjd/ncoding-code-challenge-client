import PropTypes from 'prop-types';
import { Icons } from '../icons';
import { IconsType } from '../icons/types';
import { Button } from '../button';
import { ButtonType } from '../button/types';
import { ICourseCard } from './types';
import './styles.scss';

const CourseCard: React.FC<ICourseCard> = ({
  id,
  name,
  title,
  description,
  review,
  duration,
  action,
}) => {
  return (
    <div key={id} className='course-card-component'>
      <div className='image-container'>
        <div className='name'>{name}</div>
      </div>
      <div className='content-container'>
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
        <div className='review'>
          <Icons icon={IconsType.star} />
          <span className='stars'>{review.stars}</span>
          <span className='people'>({review.people})</span>
        </div>
        <div className='duration'>
          <Icons icon={IconsType.clock} />
          <span className='time'>{duration}</span>
        </div>
      </div>
      {action && (
        <div className='action-container'>
          <Button
            label={action?.buttonLabel}
            onClick={() => {action.onButtonClick(title)}}
            type={ButtonType.spherical}
          />
        </div>
      )}
    </div>
  );
};

CourseCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  review: PropTypes.shape({
    stars: PropTypes.number.isRequired,
    people: PropTypes.number.isRequired,
  }).isRequired,
  duration: PropTypes.string.isRequired,
  action: PropTypes.shape({
    buttonLabel: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
  }),
};

export { CourseCard };
