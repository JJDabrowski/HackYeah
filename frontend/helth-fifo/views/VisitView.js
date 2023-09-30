import React from 'react'
import TitleBar from '../components/TitleBar'

const VisitView = ({route, navigation}) => {
   const {visit} = route.params

  return (
    <TitleBar subtitle={visit.name} title="Twoje sdf" hideBackBtn={true}/>
  )
}

export default VisitView