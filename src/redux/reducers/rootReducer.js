import { combineReducers } from 'redux';

import { compAReducer } from '../../features/CompA/compASlice'
import { compBReducer } from '../../features/CompB/compBSlice'
import { compCReducer } from '../../features/CompC/compCSlice'

export const rootReducer = combineReducers({ compA: compAReducer, compB: compBReducer, compC: compCReducer });
