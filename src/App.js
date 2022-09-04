import './App.css';
import { useEffect, useState } from 'react';
import Filters from './Components/Filters';
import InputTask from './Components/InputTask';
import TaskList from './Components/TaskList';
import Footer from './Components/Footer'


function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("TaskList")) || []);
  const [filter, setFilter] = useState("all");

  function addToTaskList(task) {
    if (task !== '') {
      setTasks(() => [...tasks, { text: task, checked: false, id: Math.random() + Date.now().toString() }]);
    }
  };

  function makeChecked(id) {
    setTasks(oldTasks => oldTasks.map(task => {
      if (task.id === id) {
        task.checked = !task.checked
      }
      return task
    }));
  }

  const addFiltration = (val) => {
    setFilter(val)
  }

  const updateTasksList = () => {
    switch (filter) {
      case 'checked tasks':
        return tasks.filter(task => task.checked);
      case 'unchecked tasks':
        return tasks.filter(task => !task.checked);
      case 'all':
      default:
        return tasks;
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("TaskList", JSON.stringify(tasks));
  }, [tasks])

  const uncheckAllTasks = () => {
    const uncheckedTasks = tasks.map(task => {
      task.checked = false;
      return task
    });
    setTasks(uncheckedTasks);
  }
  const checkAllTasks = () => {
    const uncheckedTasks = tasks.map(task => {
      task.checked = true;
      return task
    });
    setTasks(uncheckedTasks);
  }

  return (
    <div className="App">
      <Filters addFiltration={addFiltration} uncheckAllTasks={uncheckAllTasks} checkAllTasks={checkAllTasks} />
      <InputTask addToTaskList={addToTaskList} />
      <TaskList updateTasksList={updateTasksList} makeChecked={makeChecked} deleteTask={deleteTask} />
      <Footer />
    </div>
  );
}

export default App;
