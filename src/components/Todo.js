import React, { useEffect, useState } from 'react';
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
  };

  useEffect(() => {
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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const Todo = () => {
//   const [submittedValue, setSubmittedValue] = useState('');
//   const [list, setList] = useState(() => {
//     const saved = localStorage.getItem('listItemKey');
//     const initialValue = JSON.parse(saved);
//     return initialValue || [];
//   });
//   const [editFlag, setEditFlag] = useState(false);
//   const [editID, setEditID] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const listItem = {
//       id: new Date().getTime().toString(),
//       submittedValue,
//     };

//     if (editFlag && submittedValue) {
//       // !continue here
//       // list.filter((item, index) => {
//       //   if (item.id === editID) {
//       //     list[index] = listItem;
//       //   }
//       //   localStorage.setItem('listItemKey', JSON.stringify(list));
//       // });
//       setList(
//         list.map((item) => {
//           if (item.id === editID) {
//             return { ...item, submittedValue };
//           }
//           return item;
//         })
//       );

//       setEditFlag(false);
//     } else if (submittedValue) {
//       setList((prev) => {
//         return [...prev, listItem];
//       });
//     } else {
//       console.log('no value submitted');
//     }
//     setSubmittedValue('');
//   };

//   useEffect(() => {
//     localStorage.setItem('listItemKey', JSON.stringify(list));
//   }, [list]);

//   const deleteItem = (id) => {
//     const newList = list.filter((item) => {
//       return item.id !== id;
//     });
//     setList(newList);
//   };

//   const editItem = (id) => {
//     const newItem = list.filter((item) => {
//       return item.id === id;
//     });
//     setSubmittedValue(newItem[0].submittedValue);
//     setEditID(newItem[0].id);
//     setEditFlag(true);
//   };

//   const clearItems = () => {
//     setList([]);
//   };

//   return (
//     <StyledDiv>
//       <section className='todo-section'>
//         <article className='todo-card'>
//           <h2>Todo app</h2>
//           <form action='' onSubmit={handleSubmit}>
//             <input
//               type='text'
//               value={submittedValue}
//               onChange={(e) => setSubmittedValue(e.target.value)}
//             />
//             <button type='submit'>{editFlag ? 'Edit' : 'Submit'}</button>
//           </form>
//           <ul className='list'>
//             {list.map((item) => {
//               return (
//                 <ListItem
//                   key={item.id}
//                   {...item}
//                   deleteItem={deleteItem}
//                   editItem={editItem}
//                 />
//               );
//             })}
//           </ul>
//           <button onClick={clearItems}>Clear</button>
//         </article>
//       </section>
//     </StyledDiv>
//   );
// };

// const ListItem = ({ submittedValue, id, deleteItem, editItem }) => {
//   return (
//     <div className='list-item'>
//       <li>{submittedValue}</li>
//       <div>
//         <button onClick={() => deleteItem(id)}>delete</button>
//         <button onClick={() => editItem(id)}>edit</button>
//       </div>
//     </div>
//   );
// };

// export default Todo;
