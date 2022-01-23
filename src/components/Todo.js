import React, { useEffect, useRef, useState } from 'react';
import { StyledDiv } from './Todo.styled';
import List from './List';
import Alert from './Alert';

const Todo = ({ numberOfChar }) => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState(() => {
    return localStorage.getItem('list')
      ? JSON.parse(localStorage.getItem('list'))
      : [];
  });
  const [editFlag, setEditFlag] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });

  const focusRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      showAlert(true, 'danger', 'Please enter Value');
    } else if (editFlag && inputValue) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, inputValue };
          }
          return item;
        })
      );
      showAlert(true, 'success', 'Item edited');
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        inputValue,
      };
      setList((prev) => {
        return [...prev, newItem];
      });
      showAlert(true, 'success', 'item added');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    setList([]);
    showAlert(true, 'danger', 'List cleared');
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, 'danger', 'Item removed');
  };

  const editItem = (id) => {
    const editItem = list.filter((item) => item.id === id);
    setEditID(id);
    setInputValue(editItem[0].inputValue);
    setEditFlag(true);
    focusRef.current.focus();
  };

  useEffect(() => {
    focusRef.current.focus();
    setEditFlag(false);
    setInputValue('');
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <StyledDiv>
      <section className='wrapper'>
        <Alert {...alert} showAlert={showAlert} list={list} />
        <h2>Todo App</h2>
        <form action='' onSubmit={handleSubmit}>
          <input
            type='text'
            ref={focusRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {editFlag ? 'Edit' : 'Submit'}
          </button>
        </form>
        {list.length > 0 && (
          <List
            list={list}
            clearList={clearList}
            deleteItem={deleteItem}
            editItem={editItem}
            numberOfChar={numberOfChar}
          />
        )}
      </section>
    </StyledDiv>
  );
};

export default Todo;
