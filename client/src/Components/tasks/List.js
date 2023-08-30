import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuItem,Menu, Button} from '@mui/material';
import { getAllTasks } from '../../apis';
import { getTaskList, saveUserAction,createTask } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import TaskDetailModel from '../TaskDetailModel';
import {delTaskById} from "../../apis";
import {updateTaskById} from "../../apis";
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function TaskList() {
  //const createTask = useSelector(state => state.

  const [open,setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const getTasksList = async () => {
        const data = await getAllTasks();
        dispatch(getTaskList(data))
    }
    const deleteTask = async (data) => {
      await delTaskById (data)
      getTasksList();
    }

    const markComplete = async (data) => {
      await updateTaskById (data)
      getTasksList()
    }
    const rows = useSelector(state => state.taskList?.list, []);
    useEffect(() => {
        getTasksList()
    }, [])
    const handleClose = () => {
      console.log('open, anchorEl', open, anchorEl);
      setOpen(false);
      setAnchorEl(null)
    }

    const handleEditButton = (row) => {
      dispatch(saveUserAction({
        key: `isEdit`,
        value: true
      }))
      dispatch(saveUserAction({
        key: `actionTask`,
        value: row
      }))
      setOpenModal(true)
      handleClose()
    }

    const handleDeleteButton = (row) => {
      deleteTask(row._id);
      handleClose()
    }

    const handleMarkAsCompleteButton = (row) => {
      let obj ={ 
        markAsComplete: true,
        id: row._id
      }
      markComplete(obj);
      handleClose()
    }
    const handleCloseModal = () => {
      setOpenModal(false)
      dispatch(saveUserAction({
        key: `isEdit`,
        value: false
      }))
      dispatch(saveUserAction({
        key: `actionTask`,
        value: null
      }))
      getTasksList()
    }
    const handleTask = () => { 
      dispatch(createTask(true))
      setOpenModal(true)
    }
     return (
      <div>
        <TableContainer>
          <Button variant="contained" onClick={handleTask}> Create a task</Button>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Completed Status</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell>
                    {row.markAsComplete ? 
                      <DoneIcon style={{color: `green`}} /> : 
                      <CancelIcon style={{color: `red`}} />}
                  </TableCell>
                  <TableCell>
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <Button variant="contained" {...bindTrigger(popupState)}>
                          <MoreVertIcon />
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={() => {handleEditButton(row);popupState.close()}}>Edit</MenuItem>
                          <MenuItem onClick={() => {handleDeleteButton(row);popupState.close()}}>Delete</MenuItem>
                          <MenuItem onClick={() => {handleMarkAsCompleteButton(row);popupState.close()}}>Mark As Complete</MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {openModal && <TaskDetailModel onClose={handleCloseModal} />}
      </div>
     )
}