import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedText, setEditedText] = useState('');
  const [editedTitle, setEditedTitle] = useState('');

  const addTask = () => {
    const newTask = { id: Date.now(), title: '', text: '' };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    if (editId === id) {
      setEditId(null);
    }
  };

  const handleEdit = (id) => {
    setEditId(id);
    const task = tasks.find(task => task.id === id);
    setEditedText(task.text);
    setEditedTitle(task.title);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSave = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: editedText, title: editedTitle } : task
    );
    setTasks(updatedTasks);
    setEditId(null);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-end mb-3">
        <button
          className="btn btn-primary"
          style={{ width: 'fit-content' }}
          onClick={addTask}
        >
          Add New Task
        </button>
      </div>
      <div className="row">
        {tasks.map((task) => (
          <div key={task.id} className="col-12 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.5rem' }}>
                  {editId === task.id ? (
                    <input
                      type="text"
                      className="form-control mb-3"
                      value={editedTitle}
                      onChange={handleTitleChange}
                    />
                  ) : (
                    <span onClick={() => handleEdit(task.id)}>{task.title}</span>
                  )}
                </h5>
                {editId === task.id ? (
                  <textarea
                    className="form-control mb-3"
                    value={editedText}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p onClick={() => handleEdit(task.id)}>{task.text}</p>
                )}
                <div className="d-flex justify-content-end">
                  {editId === task.id ? (
                    <button
                      className="btn btn-primary btn-sm mr-2"
                      onClick={() => handleSave(task.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-sm mr-2"
                      onClick={() => handleEdit(task.id)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
