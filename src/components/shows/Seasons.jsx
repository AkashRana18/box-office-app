
const Seasons = ({ seasons }) => {
  if (!seasons) {
    // Handle the case when 'seasons' is undefined
    return <div>Loading...</div>; // You can replace this with your preferred loading indicator or message.
  }

  return (
    <div>
      <p>Seasons in total: {seasons.length}</p>
      <p>
        Episodes in total:
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>
      <div>
        {seasons.map(season => (
          <div key={season.id}>
            <p>Season {season.number}</p>
            <p>Episodes: {season.episodeOrder}</p>

            <div>
              Aired: {season.premiereDate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Seasons;
