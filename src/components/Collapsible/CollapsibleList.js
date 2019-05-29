import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import CollapsibleToggle from './CollapsibleToggle'
import CollapsibleContent from './CollapsibleContent'

const CollapsibleList = props => {
  const {children} = props
  const generateState = array =>
    array.reduce((obj, item) => {
      obj[item.props.id] = item.props
      return obj
    }, {})

  const [state, setState] = useState(generateState(children))

  const handleClick = e => {
    const updateState = () => {
      const newobj = {...state}
      Object.keys(newobj).map(key => {
        if (newobj[key].id === e.target.id) {
          // Open currently clicked
          newobj[key].isActive = true
        } else {
          // Close all
          newobj[key].isActive = false
        }
      })
      return newobj
    }
    setState(updateState())
    // console.log(state)
  }

  return (
    <div className="collapsible-list">
      {Object.keys(state).map(item => {
        const {id, children, isActive} = state[item]

        return (
          <div className={`collapsible ${isActive ? 'open' : 'closed'}`}>
            <CollapsibleToggle
              id={id}
              title={children}
              isActive={isActive}
              className="collapsible__toggle"
              onChangeActive={handleClick}
            />
            <CollapsibleContent
              id={id}
              content={children}
              isActive={isActive}
              className="collapsible__content"
            />
          </div>
        )
      })}
    </div>
  )
}

export default CollapsibleList
