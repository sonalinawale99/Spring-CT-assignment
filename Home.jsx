import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';

const Home = () => {
  return (
  <div> 
    <Sidebar/>
    <div className='body'>
        <h3>Welcome To New Abhinav School!</h3>
          <img src='https://static01.nyt.com/images/2021/07/12/nyregion/12-THE-MORNING-NL-lede/merlin_187216488_e4583e93-36b2-4109-8458-6ea155710ed0-articleLarge.jpg?quality=75&auto=webp&disable=upscale'/>
    </div>
    </div>
  )
}

export default Home