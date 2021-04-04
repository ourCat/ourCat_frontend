import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'actions';
import { HomeTemplate } from 'templates';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login());
  }, []);

  return <HomeTemplate />;
};

export default Home;
