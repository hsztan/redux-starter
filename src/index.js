import configureStore from './store/configureStore'
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getBugsByUser,
  getUnresolvedBugs,
} from './store/bugs'
import { projectAdded } from './store/projects'
import { userAdded } from './store/users'

const store = configureStore()

// store.subscribe(() => {
//   console.log('Store changed!')
// })

store.dispatch((dispatch, getState) => {
  //
  dispatch({ type: 'bugsReceived', bugs: [1, 2, 3] })
  console.log(getState())
})
// store.dispatch(userAdded({ name: 'User 1' }))
// store.dispatch(userAdded({ name: 'User 2' }))
// store.dispatch(projectAdded({ name: 'Project 1' }))
// store.dispatch(projectAdded({ name: 'Project 1' }))
// store.dispatch(bugAdded({ description: 'Bug 1' }))
// store.dispatch(bugAdded({ description: 'Bug 2' }))
// store.dispatch(bugAdded({ description: 'Bug 3' }))
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }))
// store.dispatch(bugResolved({ id: 1 }))
