import React, { useEffect } from 'react';
import GlobalStyle from 'components/GlobalStyles';
import { AppCont, Button, Cards } from './App.styled';
import Card from './card/card';

const API = 'https://6446e5977bb84f5a3e3494b9.mockapi.io';
const LIMIT = 3;

const App = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [following, setFollowing] = React.useState([]);

  const toggleFollowing = id => {
    if (following.includes(id)) {
      setFollowing(prevState => prevState.filter(item => item !== id));
    } else {
      setFollowing(prevState => [...prevState, id]);
    }
  };

  const getData = async () => {
    const response = await fetch(`${API}/users?page=${page}&limit=${LIMIT}`);
    const newItems = await response.json();
    if (newItems.length > 0) {
      setPage(prevState => prevState + 1);
      setData(prevState => {
        return [...prevState, ...newItems];
      });
    }
  };

  useEffect(() => {
    const storedFollowing = JSON.parse(localStorage.getItem('following'));
    if (storedFollowing) {
      setFollowing(storedFollowing);
    }
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem('following', JSON.stringify(following));
  }, [following]);

  return (
    <AppCont>
      <Cards>
        {data.map(item => (
          <Card
            active={following.includes(item.id)}
            toggleFollowing={toggleFollowing}
            key={item.id}
            item={item}
          />
        ))}
      </Cards>
      <Button onClick={() => getData()}>Load more</Button>
      <GlobalStyle />
    </AppCont>
  );
};

export default App;
