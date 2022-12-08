import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { User } from '../user';
import * as AppState from '../../state/app.state';
import * as UserActions from './user.actions'

export interface UserState{
    maskUserCheck: boolean,
    currentUser: User,
    users: User[]
}

const initialState: UserState = {
    maskUserCheck: false,
    currentUser: null,
    users: []
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserCheck = createSelector(
    getUserFeatureState,
    state => state.maskUserCheck
)

export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.currentUser
)

export const getUsers = createSelector(
    getUserFeatureState,
    state => state.users
)

export const maskUserReducer = createReducer(
    initialState,
    on(UserActions.maskUserName, (state): UserState =>{
        console.log('original state' + JSON.stringify(state));

        return {
            ...state,
            maskUserCheck: !state.maskUserCheck
        }
    })
)