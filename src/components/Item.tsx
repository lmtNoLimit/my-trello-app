import { useContext } from "react"
import { BoardContext } from "../views/board"

const cachePosition = {
  clientX: 0,
  clientY: 0
}

export const useDragDrop = () => {
  const boardContext: any = useContext(BoardContext)
  const { list, setList } = boardContext

  function handleDragStart(event: any) {
    console.log('drag start');
    event.currentTarget.visibility = 'hidden'
    event.dataTransfer.setDragImage(event.currentTarget, 0, 0);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    if(e.clientX !== cachePosition.clientX && e.clientY !== cachePosition.clientY) {
      cachePosition.clientX = e.clientX
      cachePosition.clientY = e.clientY
      console.log(e)
      const el = document.elementsFromPoint(e.clientX, e.clientY)
      console.log(el)
      // const dropTargetId = dropTarget?.dataset.itemId
      // const targetListId = dropTarget.closest('data-list-id')?.dataset.listId
      // console.log('drag over', dropTargetId, targetListId);
    }
  }

  function handleDragEnd() {
    console.log('drag end');
  }

  function handleDrop() {
    console.log('drop');
  }

  return {
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDrop,
  }
}

export default function Item(props: any) {
  const { data } = props

  return (
    <div
      className='bg-white rounded p-2 mb-2 cursor-pointer'
      data-item-id={data.id}
      draggable
      {...props}
    >
      {data.title}
    </div>
  )
}
