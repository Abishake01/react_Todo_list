import AddItems from './AddItems';
import Content from './Content';
import Footer from './Footer';
import Header from './Header'; 
import { useState } from 'react';
import Searchitem from './Searchitem';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('to_do_list')) || [] // Ensure items is an array
  );

  const additem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addnewitem = { id, checked: false, item };
    const listitem = [...items, addnewitem];
    setItems(listitem);
    localStorage.setItem('to_do_list', JSON.stringify(listitem));
  };

  const handleCheck = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItem);
    localStorage.setItem('to_do_list', JSON.stringify(listItem));
  };

  const remove = (id) => {
    const delitem = items.filter((item) => item.id !== id);
    setItems(delitem);
    localStorage.setItem('to_do_list', JSON.stringify(delitem));
  };

  const [newItem, setNewItem] = useState('');
  const handleadd = (e) => {
    e.preventDefault();
    if (!newItem) return;
    additem(newItem);
    setNewItem('');
  };

  return (
    <div> 
      <Header />
      <Searchitem />
      <AddItems 
        newItem={newItem} 
        setNewItem={setNewItem} 
        handleadd={handleadd} 
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        remove={remove}
      />
      <Footer length={items?.length || 0} />
    </div>
  );
}

export default App;
