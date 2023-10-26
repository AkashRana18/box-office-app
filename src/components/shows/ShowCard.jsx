import { Link } from 'react-router-dom';
const ShowCard = ({ name, image, id, summary }) => {
  const SummaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Description';

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <div>
        <h1>{name}</h1>
        <p> {SummaryStripped} </p>
      </div>
      <div>
        <Link to={`/show/${id}`}> Read More </Link>
        <button type="button"> Star me </button>
      </div>
      <div></div>
    </div>
  );
};

export default ShowCard;
