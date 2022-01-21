import {createSlice} from '@reduxjs/toolkit';


const INITIAL_STATE= {
    course: []
  };

export const exchangeSlice_19 = createSlice({    
    name: 'course',
    initialState: INITIAL_STATE,
    reducers:{
        getCourseStatistic19 (){},
        getCourseStatisticSuccess(state, {payload: courseStatistic}){
            state.course = courseStatistic;
        },
        getCourseStatisticError(state, action){},

       
    },
})