import{put, call, takeLatest} from "redux-saga/effects"
import { exchangeSlice_18 } from "../redux/slices"
import { apiInstance } from "../services/api";

function* watchGetCourse(){
    const response = yield call(apiInstance.getCourse_18);
    
    if(response.ok && response.data){
        console.tron.log('AllData', response.data);
        yield put(exchangeSlice_18.actions.getCourseStatisticSuccess(response.data))
    } else{
        yield put(exchangeSlice_18.actions.getCourseStatisticError('statisticError'))
    }
}
export function* courseSaga_18(){
yield takeLatest(exchangeSlice_18.actions.getCourseStatistic18, watchGetCourse);
}
