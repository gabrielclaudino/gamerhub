import PropTypes from 'prop-types';
import Link from 'next/link';

const CardGroup = ({ name, game, description, numMembers, id }) => {
  console.log(id);
  return (
    <div className='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl'>
      <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-purple-400 group-hover:scale-x-100' />
      <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-purple-400 group-hover:scale-y-100' />
      <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-purple-400 group-hover:scale-x-100' />
      <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-purple-400 group-hover:scale-y-100' />
      <div className='relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row'>
        <div className='flex flex-col justify-between flex-grow'>
          <div>
            <h6 className='mb-2 font-bold leading-5'>{name}</h6>
            <p className='mb-2 leading-4'>{game}</p>
            <p className='mb-2 leading-4'>{numMembers} membros</p>
            <p className='mb-2 text-sm text-gray-900'>{description}</p>
          </div>
          <Link href={`/group/${id}`}>
            <a className='inline-flex items-center text-sm font-semibold text-purple-600 transition-colors duration-200 hover:text-purple-800'>
              Acessar grupo
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

CardGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  game: PropTypes.string,
  description: PropTypes.string,
  numMembers: PropTypes.number,
};

export default CardGroup;
