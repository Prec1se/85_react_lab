import React, { useState } from 'react';

const AddButton = () => {
  const [textboxes, setTextboxes] = useState([{ id: 1, value: '' }]);
  const [errorMessage, setErrorMessage] = useState('');

  const addTextbox = () => {
    const newId = textboxes.length + 1;
    setTextboxes([...textboxes, { id: newId, value: '' }]);
  };

  const deleteTextbox = (id) => {
    setTextboxes(textboxes.filter((textbox) => textbox.id !== id));
  };

  const handleInputChange = (id, e) => {
    const value = e.target.value;
    setTextboxes(
      textboxes.map((textbox) =>
        textbox.id === id ? { ...textbox, value } : textbox
      )
    );
    if (!/^\d*$/.test(value)) {
      setErrorMessage('Please enter a valid integer');
    } else {
      setErrorMessage('');
    }
  };

  const getTotal = () => {
    return textboxes.reduce((acc, curr) => acc + parseInt(curr.value || 0), 0);
  };

  return (
    <div className="container mx-auto mt-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addTextbox}
      >
        Add Textbox
      </button>
      {textboxes.map((textbox) => (
        <div key={textbox.id} className="mt-4">
          <input
            type="text"
            className="border border-gray-400 p-2 mr-2"
            value={textbox.value}
            placeholder="Enter any text"
            onChange={(e) => handleInputChange(textbox.id, e)}
          />
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => deleteTextbox(textbox.id)}
          >
            Delete
          </button>
        </div>
      ))}
      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
      <div className="mt-4">
        <strong>Total: {getTotal()}</strong>
      </div>
    </div>
  );
};

export default AddButton;
