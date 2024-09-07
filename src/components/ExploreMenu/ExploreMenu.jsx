import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose a variety of delicious dishes made with quality ingredients. Whether for delivery or takeout, our menu has something for every craving. Order now and enjoy a great meal!</p>

        <div className='explore-menu-list'>
            {menu_list.map((item, index) => {
                return(
                    <div onClick={() => setCategory(prev => prev===item.menu_name ? "All": item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name ? "active" :""} src={item.menu_image} alt='Image'/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>

        <hr />

    </div>
  )
}

export default ExploreMenu