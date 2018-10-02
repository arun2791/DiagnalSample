/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import contentsSaga from './contentsSaga';

export default function* watch() {
    yield all([takeEvery(types.CONTENTS_REQUEST, contentsSaga)]);
}
