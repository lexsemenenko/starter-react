import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CollapsibleToggle = props => {
  const {label, id, isActive, onChangeActive, className, content} = props
  const classes = classNames({open: isActive}, 'collapsible')
  return (
    <div className={classes}>
      <button
        type="button"
        className={`${classes}__toggle`}
        id={id}
        onClick={e => {
          onChangeActive(e)
        }}
      >
        {label}
      </button>

      <div className={`${classes}__content`}>{content}</div>
    </div>
  )
}

CollapsibleToggle.propTypes = {
  content: PropTypes.node,
  label: PropTypes.string,
  id: PropTypes.string,
  isActive: PropTypes.bool,
}

CollapsibleToggle.defaultProps = {
  content: null,
  label: PropTypes.string,
  id: ``,
  isActive: false,
}

export default CollapsibleToggle
