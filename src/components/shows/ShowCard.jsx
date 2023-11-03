const ShowCard = ({ name, image, id, summary, onStarMeClick }) => {
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
        <a href={`/show/${id}`} target="_blank" rel="noreferrer ">
          {' '}
          Read More{' '}
        </a>
        <button type="button" onClick={() => onStarMeClick(id)}>
          Star me
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default ShowCard;
