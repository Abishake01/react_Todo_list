import React from 'react'
const AddItems = ({ newItem, setNewItem, handleadd }) => {
  return (
    <form className='addform' onSubmit={handleadd}>
      <input
        type='text'
        placeholder='Add new Item'
        id='addItem'
        autoFocus
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type='submit' aria-label='Add Item'>Add</button>
    </form>
  );
};

export default AddItems;
