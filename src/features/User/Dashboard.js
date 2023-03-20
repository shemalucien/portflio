import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, fetchUserBytoken, clearState } from './UserSlice';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
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
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      ) : (
        <Fragment>
          
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
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
