import PropTypes from 'prop-types';
import CardGroup from '../CardGroup';

const GroupList = ({ groups }) => {
  return (
    <div className='grid gap-8 md:grid-cols-2'>
      {groups.map(({ name, game, description, numMembers, id }) => (
        <CardGroup
          key={id}
          id={id}
          name={name}
          game={game}
          numMembers={numMembers}
          description={description}
        />
      ))}
    </div>
  );
};

GroupList.propTypes = {
  groups: PropTypes.array,
};

export default GroupList;
