import React from 'react'

export default function MaCards(props) {
    return(
        <div className="div-main">
        <div className = "card">
          <img src={`./images/${props.img}`} alt=""/>
          <div className="card-content">
            <h2>
              {props.title}
            </h2>
            <p>
                {props.desc}
            </p>
            <a href="#" className="button">
              Find out more 
              <span className="material-symbols-outlined">
                arrow_right_alt
              </span>
            </a>
          </div>
        </div>
      </div>
    )
}