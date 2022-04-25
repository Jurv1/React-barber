import React from 'react'
import { connect } from 'react-redux'
import Online from './Online'



const mapStateToProps = (state) => {
    return {name: 'Заполните форму', textBody:"Чтобы записаться на прием - укажите всю нужную для этого информацию"}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Online)