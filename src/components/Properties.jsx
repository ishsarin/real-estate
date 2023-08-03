import React from 'react'
import { Search_Properties } from './Search_Properties'
import { Display_Properties } from './Display_Properties'
import property from '../data/data'
import { useState } from 'react'

export const Properties = () => {

  
  const [house,setHouse] = useState(property);

  return (
    <div style={{paddingBottom:"8rem"}}>
        <Search_Properties   house={house} setHouse={setHouse} />
        <Display_Properties house={house} setHouse={setHouse}/>
    </div>
  )
}
