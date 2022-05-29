import React, { useEffect, useState } from 'react'
import List from '../../components/List'
import { mockData } from '../../mock/data'

export const BoardContext = React.createContext({})

function Board() {
  const [list, setList] = useState<any>([])

  useEffect(() => {
    setList(mockData)
  }, [])

  return (
    <BoardContext.Provider value={{ list, setList }}>
      <div className='flex gap-2 p-6'>
        {list.map((col: any, index: number) => {
          return <List data={col} />
        })}
      </div>
    </BoardContext.Provider>
  )
}

Board.defaultProps = {}

export default Board
