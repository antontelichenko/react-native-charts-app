import{put, call, takeLatest} from "redux-saga/effects"
import { exchangeSlice_19 } from "../redux/slices"
import { apiInstance } from "../services/api";

function* watchGetCourse(){
    const response = yield call(apiInstance.getCourse_19);
    
    if(response.ok && response.data){
        console.tron.log('AllData', response.data);
        yield put(exchangeSlice_19.actions.getCourseStatisticSuccess(response.data))
    } else{
        yield put(exchangeSlice_19.actions.getCourseStatisticError('statisticError'))
    }
}
export function* courseSaga_19(){
yield takeLatest(exchangeSlice_19.actions.getCourseStatistic19, watchGetCourse);
}