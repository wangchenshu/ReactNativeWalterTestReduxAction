
import { createAction, handleActions } from 'redux-actions'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const initialState = 10

/*
 * action creator
 */
export const onIncrement = createAction(INCREMENT)
export const onDecrement = createAction(DECREMENT)

/*
 * reducer
 */
const reducer = handleActions({
  INCREMENT: (state, action) => state + 1,
  DECREMENT: (state, action) => state - 1
}, initialState);

export default reducer;