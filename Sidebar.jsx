import React from 'react'
import {Link} from 'react-router-dom';


const Sidebar = () => {
    
  return (
    <div>
          
        <div className='sidebar'>
            <Link to={"/login"} className='a'>Add</Link>
            <Link to={"/login"} className='a'>View</Link>

          </div>
  
    </div>
  )
}

export default Sidebar;