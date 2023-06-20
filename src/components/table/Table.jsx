import React from 'react'
import {tableheader } from './data'
import SelectStaus from '../selectStatus/SelectStatus';
import { CreateOutlined, DeleteOutline,} from '@mui/icons-material/';
import Pagination from '../paginations/Pagination';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Table({ addTask, addTo,handleEdit,handledelete,handleChange, search}) {
 
  return (
    <div>
      <div className='p-4 flex items-center justify-between mb-5 border-b-2 border-solid border-gray-500'>
        <div><h1 className='text-lg text-b font-bold'>Task Managements</h1></div>
        <div>
          <div className='flex'>
            <div className=" flex border mr-5 border-gray-300 rounded-xl py-2 px-4 border-blue-500 serch-input" >
              <SearchOutlinedIcon/>
              <input type="text" class="outline-none border-none w-full" placeholder='Search Task..' onChange={handleChange} value={search} />
            </div>
            <button className='mr-5 flex border border-grey-500 text-black  py-2 px-4 rounded'> <FilterAltOutlinedIcon/> Filter</button>
            <button className='mr-5 flex border border-grey-500 text-black  py-2 px-4 rounded'>  <SortOutlinedIcon/>Sort</button>
            <button className='mr-5 flex border border-grey-500 text-black  py-2 px-4 rounded add-btn' onClick={addTask} > 
            
         <PlaylistAddCheckOutlinedIcon/>Add New Task</button>
          </div>
        </div>

      </div>
      <div class="relative overflow-x-auto shadow-md">

        {/* talebels */}
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-red-50 dark:bg-gray-700 dark:text-gray-400 shadow-md">
            <tr>
              {tableheader.map((data) =>
                <th scope="col" class="px-6 py-3 bg-grey-500">
                  {data}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {addTo?.map((data,index) =>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-bold text-black">
                  {data.date}
                </td>
                <td class="px-6 py-4 font-bold text-black">
                  {data.title}
                </td>
                <td class="px-6 py-4 font-bold text-black">
                  {data.discription}
                </td>
                <td class="px-6 py-4 font-bold text-black">
                  <SelectStaus />
                </td>
                <td class="px-6 py-4 d-flex" >
                  <div className="flex">
                    <CreateOutlined  className='icons' onClick={(()=>handleEdit(data))}/>
                    <DeleteOutline  className='icons right' onClick={(()=>handledelete(index))}/>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination/>
    </div>
  )
}

export default Table
