
import "./select.css"
function SelectStaus({ handleOptionChange }) {
  const selectStaus = ["Progress", "Completed", "Testing", "Todo"]
 
  return (
    <div>
      <select name='status'  onChange={handleOptionChange}>
        {selectStaus.map((options) =>
          <option value="In Completed" selected  style={{color:"black"}}>{options}</option>)}
        {/* <option  value="Completed" selected>Completed</option>
          <option value="Testing" selected>Testing</option>
          <option value="Todo" selected>Todo</option> */}
      </select>
    </div>
  )
}
export default SelectStaus

