import React from 'react'
import { Helmet } from 'react-helmet'


const Meta = (props) => {
  return (
  
   <Helmet>
    <Meta charSet='utf-8'/>
    <title>{"props"}</title>
   </Helmet>
 
  )
}

export default Meta