import PropTypes from 'prop-types';

import React from 'react'

const FirstApp = ( {saludo,subtitle} ) => {
    return (
        <>
          <h1>{saludo}!!!</h1>  
          <p>{subtitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'Soy un pinche subtitulo'
}

export default FirstApp
