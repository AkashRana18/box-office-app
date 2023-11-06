import useStarredShows from '../lib/useStarredShows';
const Starred = () => {
  const [starredShows] = useStarredShows();

  return (
    <div>
      <h1>Starred Page , starred {starredShows.length} </h1>
    </div>
  );
};
export default Starred;
