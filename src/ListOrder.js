import React from 'react';

const ListOrder = ({ item, handleCheck, remove }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <button onClick={() => remove(item.id)}>Delete</button>
    </li>
  );
};

export default ListOrder;
