import { NumberCollectionDispatches } from '../reducers/number-collection.reducer'
import { store } from '../store'
``
export const numberCollectionProvider = () => {
  return new NumberCollectionDispatches(store.dispatch)
}