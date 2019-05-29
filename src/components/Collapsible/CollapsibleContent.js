import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CollapsibleContent = props => {
  const {content, id, isActive, className} = props
  const classes = classNames(className, {open: isActive})
  return <div className={classes}>{content}</div>
}

CollapsibleContent.propTypes = {
  content: PropTypes.node,
  id: PropTypes.string,
  isActive: PropTypes.bool,
}

CollapsibleContent.defaultProps = {
  content: null,
  id: ``,
  isActive: false,
}

export default CollapsibleContent
