import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>

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
    </SearchCard>
  );
};

export default ActorCard;
