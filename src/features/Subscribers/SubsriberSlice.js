import { createSlice } from '@reduxjs/toolkit';

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    subscribers: [],
  },
  reducers: {
    addSubscriber: (state, action) => {
      state.subscribers.push(action.payload);
    },
    removeSubscriber: (state, action) => {
      const emailToRemove = action.payload;
      state.subscribers = state.subscribers.filter((subscriber) => subscriber !== emailToRemove);
    },
  },
});

export const { addSubscriber, removeSubscriber } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;

export const sendSubscribe = (email) => async (dispatch) => {
  try {
    dispatch(addSubscriber(email));
    const response = await fetch('https://backend-ep1x.onrender.com/api/v1/subscribers/subscribe', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    console.log(data, response.status);
  } catch (error) {
    console.error(error);
  }
};

export const sendUnsubscribe = (email) => async (dispatch) => {
  try {
    dispatch(removeSubscriber(email)); // Now dispatch the email directly
    const response = await fetch('http://localhost:5000/api/v1/subscribers/unsubscribe', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
