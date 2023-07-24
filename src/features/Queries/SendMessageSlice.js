import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        name: '',
        email: '',
        message: '',
        isLoading: false,
    },
    reducers: {
        setMessage: (state, action) => {
            state.value = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const sendMessage = (name, email, message) => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        const response = await fetch('http://localhost:5000/api/v1/queries/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        const data = await response.json();
        console.log(data);
        //dispatch(setMessage(data.message, data.name, data.email));

    } catch (error) {
        console.error(error);
    } finally {
        dispatch(setLoading(false));
    }
};

export const { setMessage, setLoading } = messageSlice.actions;

export default messageSlice.reducer;
