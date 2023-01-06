import React, { useEffect } from 'react'
import { useState } from 'react'
import Alert from './Alert'
import List from './List'
import {
  FormControl,
  SectionCenter,
  Form,
  GroceryContainer,
} from './styles/Content.styled'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')))
  } else {
    return []
  }
}

export default function Content() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: '', type: '', msg: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      showAlert(true, 'danger', 'please enter value')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item added to the list')

      const newItem = { id: new Date().getTime().toString(), title: name }

      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <SectionCenter>
      <Form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>grocery bud</h3>

        <FormControl>
          <input
            type='text'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit'>{isEditing ? 'edit' : 'submit'}</button>
        </FormControl>
      </Form>

      {list.length > 0 && (
        <GroceryContainer>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button onClick={clearList}>clear items</button>
        </GroceryContainer>
      )}
    </SectionCenter>
  )
}
