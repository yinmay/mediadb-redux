# mediadb-redux
a media database built by react and redux

* provider accepts the store and its' children. 
```
<Provider store={store} >//connect redux to react
...

</provider>
```
* redux-dev-tool
```
import {composeWithDevTools} from  'redux-devtools-extension'


// const hello=() =>('hello')
const store = createStore(
  rootReducer,
  {}, //initial state
  composeWithDevTools(),
)
```
###mapStateToProps
* pick which aspect of your store to get into the component and return object

###dispatch
take the dispatch as a prop because of the connect
* pick which aspect of your store to get into the component
* 