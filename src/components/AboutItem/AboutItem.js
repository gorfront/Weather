import React from 'react'

import './AboutItem.css'

function AboutItem({ id, icon, title, data, unit }) {
  return (
    <div key={id} className="card">
          <div className="description_card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
  )
}

export default AboutItem