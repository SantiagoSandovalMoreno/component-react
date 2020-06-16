import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Drag from "./Drag"

const DrapContainer = ({items, setSelected}) => (
    <DndProvider backend={HTML5Backend}>
        <Drag items={items} setSelected={setSelected} />
    </DndProvider>
)

export default DrapContainer;