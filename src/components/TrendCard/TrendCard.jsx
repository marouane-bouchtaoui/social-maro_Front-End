import React from 'react'
import './TrendCard.css'
import { TrendData } from '../../Data/TrendDate'

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends For You</h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}K Shares</span>
          </div>
        )
      })}
    </div>
  )
}

export default TrendCard