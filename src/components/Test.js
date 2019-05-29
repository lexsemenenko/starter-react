import React from 'react'
import CollapsibleList from './Collapsible/CollapsibleList'
import CollapsibleToggle from './Collapsible/CollapsibleToggle'
import CollapsibleContent from './Collapsible/CollapsibleContent'

const Test = () => {
  const name = 'Poodle'
  return (
    <div>
      <CollapsibleList>
        <CollapsibleToggle id="project1">One Toggle</CollapsibleToggle>
        <CollapsibleContent id="project1">One Content</CollapsibleContent>

        <CollapsibleToggle id="project2">Two Toggle</CollapsibleToggle>
        <CollapsibleContent id="project1">Two Content</CollapsibleContent>

        <CollapsibleToggle id="project3">Three Toggle</CollapsibleToggle>
        <CollapsibleContent id="project1">Three Content</CollapsibleContent>
      </CollapsibleList>
    </div>
  )
}

export default Test
