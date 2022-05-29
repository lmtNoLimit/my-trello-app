import { useContext } from 'react'
import { BoardContext } from '../views/board'
import Item, { useDragDrop } from './Item'

export default function List(props: any) {
  const { data } = props
  const { title } = data

  const { handleDragStart, handleDragOver, handleDragEnd, handleDrop } = useDragDrop()

  return (
    <div
      className='flex flex-col bg-slate-200 w-72 min-w-[270px] rounded p-2'
      data-list-id={data.id}
      draggable
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div>
        <h3 className='mb-2'>{title}</h3>
        {data?.children.length &&
          data.children.map((child: any) => {
            return <Item data={child} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
          })}
      </div>
    </div>
  )
}
