import React from 'react'
import CollapsibleList from './Collapsible/CollapsibleList'
import CollapsibleToggle from './Collapsible/CollapsibleToggle'
import CollapsibleContent from './Collapsible/CollapsibleContent'
import Button from './Button'

const Test = () => {
  const name = 'Poodle'
  return (
    <div>
      <CollapsibleList>
        <CollapsibleToggle id="project1" label="One Toggle">
          <Button>Button</Button>
        </CollapsibleToggle>

        <CollapsibleToggle id="project2" label="Two Toggle">
          Two Content
        </CollapsibleToggle>

        <CollapsibleToggle id="project3" label="Three Toggle">
          Three Content
        </CollapsibleToggle>
      </CollapsibleList>
    </div>
  )
}

export default Test
