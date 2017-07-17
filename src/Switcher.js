import React from 'react'
import PropTypes from 'prop-types'

import URI from 'urijs'

import './Switcher.css'

const resolveUrlToIcon = (urlToResources, selectedType, anatomogramType, ) =>
  URI(`${selectedType === anatomogramType ? `` : `un`}selected${anatomogramType}.png`, urlToResources).toString()

const Switcher = (props) =>
  <div style={props.style}>
    {props.anatomogramTypes.map((anatomogramType) =>
      <img key={anatomogramType}
           className={`gxa-selection-icon`}
           onClick={() => {props.onClick(anatomogramType)}}
           src={resolveUrlToIcon(props.urlToResources, props.selectedType, anatomogramType)} />
    )}
  </div>

Switcher.propTypes = {
  anatomogramTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  urlToResources: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default Switcher
