import './App.css';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState, createContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Data = createContext() 

function App() {

  const [task, setTask] = useState('')
  const [data, setData] = useState([])

  const addData = () => {
    if (task.trim().length === 0){
      alert('Please enter your task')
    } else {
      setData([...data, {task}])
      setTask('')
    }
    
  }

  const remove = (index) => {
    let arr = data
    arr.splice(index, 1)
    setData([...arr])
  }

  return (
    <div className="App">
      <Data.Provider value={{data, setData}}>
        <Header />
        <div className='input-field'>
          <Stack spacing={2} direction="row">
            <TextField 
              value={task} 
              onChange={(e) => setTask(e.target.value)}
              id="outlined-basic" 
              label="task" 
              size=''
              variant="outlined" 
            />
            <Button 
              onClick={addData}
              color='success' 
              variant="contained"
            >
              <AddIcon />
            </Button>
          </Stack>
        </div>
        <div className='tasks'>
          <div>
            <h3><u>Tasks</u></h3>
          </div>
          {
            data.map((element, index) => {
              return (
                <div key={index} className='task-display'>
                  <h4>
                    <FormControlLabel 
                      control={<Checkbox defaultunChecked />} 
                      label={element.task} 
                    />
                  </h4>
                  <Stack>
                    <Button onClick={() => remove(index)} color='error' variant="contained">
                      <DeleteIcon />
                    </Button>
                  </Stack>
                </div>
              )

            })
          }
        </div>
      </Data.Provider>
    </div>
  );
}

export default App;
export {Data}
