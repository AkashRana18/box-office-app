import { useQuery } from 'react-query';
import useStarredShows from '../lib/useStarredShows';
import { getShowByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';
import { TextCenter } from '../components/common/TextCenter';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),

    refetchOnWindowFocus: false,
  });
  console.log({ starredShows });

  if (starredShows?.length === 0) {
    return <TextCenter> No Shows Were Starred </TextCenter>;
  }
  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShowsError) {
    return (
      <div>
        Error Occured:
        {starredShowsError.message}
      </div>
    );
  }

  return <TextCenter> Shows are Loading... </TextCenter>;
};
export default Starred;
