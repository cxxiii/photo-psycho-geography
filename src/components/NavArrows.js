import React from 'react'

const NavArrows = ({ color }) => {
  return (
    <>
      <div
        id="arrow-left"
        className="nav-arrow nav-btn-inactive"
        title="View previous image"
        style={{ color: color }}
      >
        ‹
      </div>
      <div
        id="arrow-right"
        className="nav-arrow nav-btn-active"
        title="View next image"
        style={{ color: color }}
      >
        ›
      </div>
    </>
  )
}

export default NavArrows
