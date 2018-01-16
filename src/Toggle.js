import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import{toggleMessage, getMovies} from './actions'


const  Toggle = ({messageVisibility, toggleMessage, getMovies}) =>(
        <div>
            {messageVisibility && 
            <p>You will be seeing this if redux action is toggled</p>
            }
            <button onClick={toggleMessage}>Toggle Me </button>
            <button onClick={getMovies}>Load Movies</button>

        </div>
        
    )

const mapStateToProps = (state) => ({
    messageVisibility: state.message.messageVisibility,
})
//pick which aspect of your store to get into the component

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleMessage,// toggleMessage: toggleMessage
    getMovies,
},dispatch)
   

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)
//connecting toggle to our redux store and exporting all of that as toggle so when we use toggle in the context
//