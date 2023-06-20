import { useState } from 'react';
import './App.css';
import AddTask from './components/addTask/AddTask';
import Layout from './components/layout/Layout';
import Table from './components/table/Table';
import { validationSchema } from "../src/utils/index"
import EditeList from './components/editelist/EditList';
import { tableData } from './components/table/data';
import { useDispatch } from 'react-redux';
import { todoList } from './store/todolist';
const initialValues={
  title: "",
  discription: "",
  date: ""
}
function App() {
  const [showEdit, setShowEdit] = useState("table")
  const [values, setValues] = useState(initialValues)
  const [addTo, setTodo] = useState(tableData)
  const [open, setOpen] = useState(false)
  const [isopenEdit, setOpenEdit] = useState(false)
  const [prefil, setPrefil] = useState()
  const [search, setSeach] = useState('')
  const dispatch=useDispatch()


  const handleChange = (e) => {
    let value = e.target.value
    setSeach(value)
  }

  const addTask = () => {
    setOpen(true)
    setShowEdit("table")
  }
  const addNewTask = (val) => {
    setTodo([...addTo, val])
    setValues({...values,})
    dispatch(todoList([...addTo, val]))

  }
  const handledelete = (id) => {
    let removelist = addTo.filter((data, index) => index !== id)
    setTodo(removelist)

  }
  const UpdateNewTask = (data) => {
    let findindex = addTo.find((item) => data.id === item.id)
    let index = addTo.indexOf(findindex)
    let updateTodo = [...addTo]
    updateTodo[index] = data
    setTodo(updateTodo)

  }
  const handleEdit = (data) => {
    setPrefil(data)
    setOpenEdit(true)
  }

  const seachData = (data) => {
    return data.toLowerCase().includes(search.toLowerCase());
  };
  const filterlist = addTo.filter((data) => {
    if (search === "") {
      return data;
    } else if (
      seachData(data.title) ||
      seachData(data.discription) ||
      seachData(data.date)
    ) {
      return data
    }
  })


  return (
    <Layout>
      <EditeList
        isopenEdit={isopenEdit}
        setOpenEdit={setOpenEdit}
        UpdateNewTask={UpdateNewTask}
        prefil={prefil}
        setPrefil={setPrefil}
      />
      <AddTask
        open={open}
        setOpen={setOpen}
        validationSchema={validationSchema}
        addNewTask={addNewTask}
        values={values}
        setValues={setValues}
      />
      <Table
        addTask={addTask}
        addTo={filterlist}
        handledelete={handledelete}
        handleEdit={handleEdit}
        handleChange={handleChange}
        search={search}
      />
    </Layout>

  );
}

export default App;



