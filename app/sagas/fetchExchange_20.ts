import{put, call, takeLatest} from "redux-saga/effects"
import { exchangeSlice_20 } from "../redux/slices"
import { apiInstance } from "../services/api";

function* watchGetCourse(){
    const response = yield call(apiInstance.getCourse_20);
    
    if(response.ok && response.data){
        console.tron.log('AllData', response.data);
        yield put(exchangeSlice_20.actions.getCourseStatisticSuccess(response.data))
    } else{
        yield put(exchangeSlice_20.actions.getCourseStatisticError('statisticError'))
    }
}
export function* courseSaga_20(){
yield takeLatest(exchangeSlice_20.actions.getCourseStatistic20, watchGetCourse);
}