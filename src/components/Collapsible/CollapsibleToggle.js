import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CollapsibleToggle = props => {
  const {title, id, isActive, onChangeActive, className} = props
  const classes = classNames(className, {open: isActive})
  return (
    <button
      type="button"
      className={classes}
      id={id}
      onClick={e => {
        onChangeActive(e)
      }}
    >
      {title}
    </button>
  )
}

CollapsibleToggle.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isActive: PropTypes.bool,
}

CollapsibleToggle.defaultProps = {
  children: null,
  id: ``,
  isActive: false,
}

export default CollapsibleToggle
