import React from 'react'

const HeaderD = ({header}) => {
  return (
    <div className="d-flex justify-content-between align-items-center p-4">
      <h6 className="">{header}</h6>
      <h6 className="Sidebar">Welcome Back, Clint</h6>
    </div>
  );
}

export default HeaderD
