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
### `connect()(toggle)`
* connecting toggle to our redux store and exporting all of that as toggle so when we use toggle in the context 

### mapStateToProps
* return an object
* pick which aspect of your store to get into the component and return object

###dispatch： run our actions and pass in an obj into it and goes what we tell it to do
take the dispatch as a prop because of the connect
* pick which aspect of your store to get into the component
* ` bindActionCreators` repale` onClick = {()=>dispatch(toggleMessage())} `to just `onClick={toggleMessage}`
```
//adding
const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleMessage,// toggleMessage: toggleMessage
},dispatch)
```
### middleware--logger
* `redux-logger` clear log output
* `redux-thunk` return a function in our action
* action creator:reusing action`getMovies(){}`
* then reducer add case `GET_MOVIES`

### combineReducer
* combine several reducers into one 
```
const rootReducer = combineReducers({
    toggle,
    movies,
})
```
