import { handleActions } from 'redux-actions'
import { ActionConst } from 'react-native-router-flux'

const OBJECT_TYPE   = '[object Object]',
      FUNCTION_TYPE = '[object Function]'

function isNotObjectTypeAndFunctionType(obj) {
  const type = Object.prototype.toString.call(obj)
  return type != OBJECT_TYPE && type != FUNCTION_TYPE
}

const initialState = {
}

const scene = handleActions({
  [ActionConst.FOCUS]: (state, action) => {
    const payload = action.scene
    return Object.keys(payload)
      .filter(key => isNotObjectTypeAndFunctionType(payload[key]))
      .reduce((obj, key) => Object.assign(obj, { [key]: payload[key] }), {})
  },
}, initialState)

export default scene
