import React, {Fragment}from 'react';


function Header({titulo, description}) {
    return (
      <Fragment>
        <h1 className="">{titulo}</h1>
        <p>{description}</p>
      </Fragment>
    )
}

export default Header;