import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Collapsible = props => {
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

Collapsible.propTypes = {
  content: PropTypes.node,
  label: PropTypes.string,
  id: PropTypes.string,
  isActive: PropTypes.bool,
}

Collapsible.defaultProps = {
  content: null,
  label: PropTypes.string,
  id: ``,
  isActive: false,
}

export default Collapsible
