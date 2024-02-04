import PropTypes from 'prop-types';

function Card ({title,description}) {
  return (
    <div
    className="rounded h-[21rem] w-full bg-cover relative"
    style={{ 
      backgroundImage: 'url(https://source.unsplash.com/random/800x600)',
    }}
    >
    <div className="absolute bottom-0 bg-white w-full p-6">
      <div className="border-b">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex justify-between">
        <button>Edit</button>
        <button>Hapus</button>
      </div>
    </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card;