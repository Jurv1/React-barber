import React from 'react'
import { connect } from 'react-redux'
import OnlineForm from './OnlineForm'

const mapStateToProps = (state) => {
    
    return {masters: state.mastersPageReducer.masters, time: state.onlinePageReducer.times, name: state.onlinePageReducer.name}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OnlineForm)