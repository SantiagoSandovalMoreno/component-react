import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../types'
import FontAwesome from "react-fontawesome"
const style = {
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  textAlign: "left",
  cursor: 'move',
  margin: "11px 0px 10px"
}
const Item = ({ id, text, index, moveItem }) => {
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) return
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return
      moveItem(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  return (
      <div ref={ref} style={{ ...style, opacity }}>
        <FontAwesome
            className="super-crazy-colors"
            name="align-justify"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginRight: "10px" }}
          />{text}
      </div>
  )
}
export default Item