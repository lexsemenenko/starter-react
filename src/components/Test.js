import React from 'react'
import CollapsibleList from './Collapsible/CollapsibleList'
import Collapsible from './Collapsible/Collapsible'
import Button from './Button'

const Test = () => {
  const name = 'Poodle'
  return (
    <div>
      <CollapsibleList>
        <Collapsible id="project1" label="One Toggle">
          <Button>Button</Button>
        </Collapsible>

        <Collapsible id="project2" label="Two Toggle">
          Two Content
        </Collapsible>

        <Collapsible id="project3" label="Three Toggle">
          Three Content
        </Collapsible>
      </CollapsibleList>
    </div>
  )
}

export default Test
