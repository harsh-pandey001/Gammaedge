import React from 'react'
import style from "./FoodCategory.module.css"
import FoodCard from '../../components/FoodCategory/FoodCard/FoodCard'

const FoodCategory = (props) => {
  return (
    <div className={style.container}>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
    </div>
  )
}

export default FoodCategory
