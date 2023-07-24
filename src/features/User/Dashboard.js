import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, fetchUserBytoken, clearState } from './UserSlice';
import { Audio } from 'react-loader-spinner'
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  const history = useHistory();

  const dispatch = useDispatch();
  const { isFetching, isError } = useSelector(userSelector);
  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem('token') }));
  }, []);

  const { username, email } = useSelector(userSelector);
  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      history.push('/login');
    }
  }, [isError]);

  const onLogOut = () => {
    localStorage.removeItem('token');

    history.push('/login');
  };

  return (
    <div className="container mx-auto">
      {isFetching ? (
        <Audio
          height="100"
          width="100"
          color='grey'
          ariaLabel='loading'
        />
      ) : (
        <Fragment>
          <div className={darkMode ? 'dark bg-gray-800 text-white' : 'bg-white text-black'}>
            <Navbar toggleDarkMode={toggleDarkMode} />

            <div className="flex flex-col items-center justify-center py-2">
              <h1 className="text-3xl font-bold text-white">
                Welcome back </h1>
              <h1 className="text-2xl font-bold text-white">{username}</h1>
            </div>

            <div className="flex flex-col items-center justify-center  py-2">
              <button
                onClick={onLogOut}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
              >
                Log Out
              </button>
            </div>
          </div>
          <Footer />
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
