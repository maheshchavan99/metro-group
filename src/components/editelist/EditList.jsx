import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'

function EditeList({ isopenEdit, setOpenEdit, UpdateNewTask, setPrefil, prefil }) {
  const handleClose = () => {
    setOpenEdit(false)
  }
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(value)
    setPrefil({ ...prefil, [name]: value })
  }
  const updateList = () => {
    const list = {
      id: prefil.id,
      title: prefil.title,
      date: prefil.date,
      discription: prefil.discription
    }
    return list
  }
  console.log(prefil?.date)
  return (
    <div>

      <Dialog
        open={isopenEdit}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <h2 className="text-xl font-bold mb-2">Edit Task</h2>
          <div className='border-b-2 border-solid border-gray-500'></div>

        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <>

              <div className='flex justify-between  mt-5 '>
                <div className='w-full '>
                  <label htmlFor="">Title</label>
                  <input type="text" name="title" value={prefil?.title} onChange={handleChange} className="appearance-none bg-white border border-gray-300 rounded py-2 px-4 w-full" />
                </div>
                <div className='w-full ml-5'>
                  <label htmlFor="">Date</label>
                  <input type="date" name='date' value={prefil?.date} onChange={handleChange} className="appearance-none bg-white border border-gray-300 rounded py-2 px-4 w-full" />
                </div>

              </div>
              <div className='w-full mt-5'>
                <label htmlFor="">Discription</label>
                <textarea type="text" name='discription' value={prefil?.discription} onChange={handleChange} className="appearance-none bg-white border border-gray-300 rounded py-2 px-4 w-full" />
              </div>
              <div className='mt-5'>
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded shadow" onClick={(() => UpdateNewTask(updateList()))}>
                  Update Task
                </button>
              </div>
            </>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default EditeList


