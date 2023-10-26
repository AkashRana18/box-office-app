const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <div>
        <h1>
          {name} {!!gender && `(${gender})`}
        </h1>
        <p> {country ? ` From ${country}` : 'No Country Known'} </p>
      </div>
      <div>
        {!!birthday && <p>Born {birthday} </p>}
        <p> {deathday ? `Died ${deathday}` : 'Alive'} </p>
      </div>
    </div>
  );
};

export default ActorCard;
