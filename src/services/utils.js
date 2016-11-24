import { Actions } from 'react-native-router-flux'

export function moveTo(key, args) {
  return Actions[key](args)
}
