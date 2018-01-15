import React, {Component} from 'react'
import {connect} from 'react-redux'
import{toggleMessage} from './actions'
import {bindActionCreators} from 'redux'

const  Toggle = ({messageVisibility, dispatch}) =>(
        <div>
            {messageVisibility && 
            <p>You will be seeing this if redux action is toggled</p>
            }
            <button onClick={()=>dispatch(toggleMessage())}>Toggle Me </button>
        </div>
        
    )

const mapStateToProps = (state) => ({
    messageVisibility: state.message.messageVisibility,
})
//pick which aspect of your store to get into the component

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleMessage,// toggleMessage: toggleMessage
},dispatch)
   

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)
//connecting toggle to our redux store and exporting all of that as toggle so when we use toggle in the context
//