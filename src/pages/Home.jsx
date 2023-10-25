import { useState } from 'react';
import { searchForShows } from './../api/tvmaze';
const Home = () => {
  const [searchStr, setSearchstr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearchInputChange = ev => {
    setSearchstr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();

    try {
      const result = await searchForShows(searchStr);
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError)
      return (
        <div>
          {' '}
          Error Occured:
          {apiDataError.message}
        </div>
      );

    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch} action="">
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit"> Search </button>
      </form>
      <div> {renderApiData()} </div>
    </div>
  );
};
export default Home;
