import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { GroceryItem, BtnContainer } from './styles/List.styled'

export default function List({ items, removeItem, editItem }) {
  return (
    <>
      {items.map((item) => {
        const { id, title } = item

        return (
          <GroceryItem key={id}>
            <p>{title}</p>
            <BtnContainer>
              <button onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </BtnContainer>
          </GroceryItem>
        )
      })}
    </>
  )
}
