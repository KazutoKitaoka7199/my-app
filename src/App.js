import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Container, Form, Input, InputGroup, Table, } from 'reactstrap'; 
function App() {
  const [value, setValue] = useState('')
  const [todos,setTodos] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = text => {
    const newTodos = [...todos,text]
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <Container>
        <h1 className='mt-4'>ToDoリスト</h1>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input type='text' value={value} onChange={e => setValue(e.target.value)}/>
              <Button type='submit' color='primary'>追加</Button>
          </InputGroup>
        </Form>
      </Container>
      <Container>
        <Table hover>
          <tbody>
            {todos && todos.map((todo,index) =>
            (
              <tr key={index}>
                <th className="text-start">
                  {todo}
                </th>
                <td className='text-end'>
                  <Button color='secondary' className='me-2'>完了</Button>
                  <Button color='danger' onClick={() =>removeTodo(index)}>削除</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
