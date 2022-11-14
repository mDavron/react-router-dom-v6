import React from 'react'
import { useLocation } from 'react-router-dom'

const Generic = () => {
  const location = useLocation();
  return (
    <div><h3>Comming soon: {location.pathname}</h3></div>
  )
}

export default Generic