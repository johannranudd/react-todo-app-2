import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';

import { BiChevronDown } from 'react-icons/bi';

const List = ({ list, clearList, deleteItem, editItem, numberOfChar }) => {
  return (
    <>
      {list.map((item) => {
        return (
          <ListItem
            key={item.id}
            {...item}
            editItem={editItem}
            deleteItem={deleteItem}
            numberOfChar={numberOfChar}
          />
        );
      })}
      <button className='clear-btn' onClick={clearList}>
        Clear List
      </button>
    </>
  );
};

const ListItem = ({ inputValue, editItem, id, deleteItem, numberOfChar }) => {
  const [showText, setShowText] = useState(false);
  return (
    <article className='list-item'>
      <div className={showText ? 'show-list' : 'value'}>
        {inputValue.length < numberOfChar || showText
          ? inputValue
          : `${inputValue.substring(0, numberOfChar)}...`}
      </div>
      <div className='button-container'>
        <button
          className={showText ? 'read-more-btn-rotate' : 'read-more-btn'}
          onClick={() => setShowText(!showText)}
        >
          <BiChevronDown />
        </button>
        <button className='edit-btn' onClick={() => editItem(id)}>
          <FiEdit />
        </button>
        <button className='delete-btn' onClick={() => deleteItem(id)}>
          <MdDeleteForever />
        </button>
      </div>
    </article>
  );
};

export default List;

// const ListItem = ({ inputValue, editItem, id, deleteItem }) => {
//   const [showText, setShowText] = useState(false);
//   return (
//     <article className='list-item'>
//       <div className={showText ? 'show-list' : 'value'}>
//         {inputValue.length < 34 || showText
//           ? inputValue
//           : `${inputValue.substring(0, 34)}...`}
//       </div>
//       <div className='button-container'>
//         <button
//           className={showText ? 'read-more-btn-rotate' : 'read-more-btn'}
//           onClick={() => setShowText(!showText)}
//         >
//           <BiChevronDown />
//         </button>
//         <button className='edit-btn' onClick={() => editItem(id)}>
//           <FiEdit />
//         </button>
//         <button className='delete-btn' onClick={() => deleteItem(id)}>
//           <MdDeleteForever />
//         </button>
//       </div>
//     </article>
//   );
// };

// !
// with useref
// const ListItem = ({ inputValue, editItem, id, deleteItem }) => {
//   const reference = useRef(null);

//   const handleRef = () => {
//     if (reference.current.className === 'value') {
//       reference.current.classList = 'show-list';
//     } else {
//       reference.current.classList = 'value';
//     }
//   };

//   return (
//     <article className='list-item'>
//       <div ref={reference} className='value'>
//         {inputValue}
//       </div>
//       <div className='button-container'>
//         <button className='read-more-btn' onClick={handleRef}>
//           <BiChevronDown />
//         </button>
//         <button className='edit-btn' onClick={() => editItem(id)}>
//           <FiEdit />
//         </button>
//         <button className='delete-btn' onClick={() => deleteItem(id)}>
//           <MdDeleteForever />
//         </button>
//       </div>
//     </article>
//   );
// };

// export default List;
