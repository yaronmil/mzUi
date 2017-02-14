import {Action, combineReducers} from 'redux';
import { CounterActions } from './app.actions';
import {routerReducer} from "@angular-redux/router";

export interface IAppState {
  count: number;
 // tab:number;

}
export default combineReducers<IAppState>({
  // your reducers..
  router: routerReducer
})

export const INITIAL_STATE: IAppState = {
  count: 0,
//  tab:1
};



export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch(action.type) {
    case CounterActions.INCREMENT: return { count: lastState.count + 1 };
    case CounterActions.DECREMENT: return { count: lastState.count - 1 };
  }

  // We don't care about any other actions right now.
  return lastState;
}
