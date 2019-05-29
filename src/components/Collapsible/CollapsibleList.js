import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import Collapsible from './Collapsible'

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
  }

  return (
    <div className="collapsible-list">
      {Object.keys(state).map((item, i) => {
        const {id, children, isActive, label} = state[item]

        return (
          <div className={`collapsible ${isActive ? 'open' : 'closed'}`}>
            <Collapsible
              id={id}
              label={label}
              isActive={isActive}
              className="collapsible"
              onChangeActive={handleClick}
              content={children}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CollapsibleList
