import React from 'react'
import { connect } from 'react-redux'
import { setMastersAC } from '../../Redux/MastersPageReducer'
import Masters from './Masters'



const mapStateToProps = (state) => {
    return {
        masters: state.mastersPageReducer.masters
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setMasters: (masters) => {
            dispatch(setMastersAC(masters))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Masters)