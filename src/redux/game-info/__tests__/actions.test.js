import * as actions from '../actions';
import * as types from '../types';
import lowerCase from 'lodash/lowerCase';

describe('#gameInfoActions', () =>{
  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      if(key && state !== undefined) {
        const expectedAction = {
          type: type,
          [key]: state
        };
        expect(action(state)).toEqual(expectedAction);
      } else {
        const expectedAction = {
          type: type
        };
        expect(action(state)).toEqual(expectedAction);
      }
    })
  };

  testActions(actions.fetchGameInfoRequest, types.FETCH_GAME_INFO_REQUEST);
  testActions(actions.fetchGameInfoSuccess, types.FETCH_GAME_INFO_SUCCESS, 'payload', []);
  testActions(actions.fetchGameInfoFailure, types.FETCH_GAME_INFO_FAILURE, 'payload', {});
});