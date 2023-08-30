import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuItem,Menu} from '@mui/material';
import { getAllTasks } from '../../apis';
import { getTaskList, saveUserAction } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import TaskDetailModel from '../TaskDetailModel';

export default function TaskList() {
  const [open,setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false)

    const dispatch = useDispatch()
    const getTasksList = async () => {
        const data = await getAllTasks();
        dispatch(getTaskList(data))
    }
    useEffect(() => {
        getTasksList()
    }, [])
    const rows = useSelector(state => state.taskList?.list, []);
    const handleClick= (e) => {
      setOpen(true);
      setAnchorEl(e.currentTarget)
    } 
    const handleClose = () => {
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
    }

    const handleDeleteButton = () => {

    }

    const handleMarkAsCompleteButton = () => {

    }
    const handleCloseModal = () => {
      setOpenModal(false)
      dispatch(saveUserAction({
        key: `isEdit`,
        value: false
      }))
    }
     return (
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
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
                    <MoreVertIcon 
                      id="three-Dots-button"
                      aria-controls={open ? 'Main-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    />
                    <Menu
                      id="Main-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'three-Dots-button',
                      }}
                    >
                      <MenuItem onClick={() => handleEditButton(row)}>Edit</MenuItem>
                      <MenuItem onClick={() => handleDeleteButton(row)}>Delete</MenuItem>
                      <MenuItem onClick={() => handleMarkAsCompleteButton(row)}>MarkAsComplete</MenuItem>
                    </Menu>
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