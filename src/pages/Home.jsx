import { useState } from 'react';
const Home = () => {
  const [searchStr, setSearchstr] = useState('');
  const onSearchInputChange = ev => {
    setSearchstr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault(); // prevent the form from refreshing the page .
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q= ${searchStr}`
    );
    const body = await response.json();
    console.log(body);
  };

  return (
    <div>
      <form onSubmit={onSearch} action="">
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit"> Search </button>
      </form>
    </div>
  );
};
export default Home;
