import React, {  useCallback } from 'react'
import Item from './Item'
import update from 'immutability-helper'

const Drag = ({items, setSelected}) => {
    const moveItem = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = items[dragIndex]
        setSelected(
          update(items, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          }),
        )
      },
      [items, setSelected],
    )
    const renderCard = (item, index) => {
      return (
        <Item
          key={item.id}
          index={index}
          id={item.id}
          text={item.test}
          moveItem={moveItem}
        />
      )
    }
    return (
        <div>{items.map((item, i) => renderCard(item, i))}</div>
    )
}
export default Drag