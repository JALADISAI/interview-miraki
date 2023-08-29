import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getAllTasks } from '../../apis';
import { getTaskList } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function TaskList() {
    const dispatch = useDispatch()
    const getTasksList = async () => {
        const data = await getAllTasks();
        dispatch(getTaskList(data))
    }
    useEffect(() => {
        getTasksList()
    }, [])
    const rows = useSelector(state => state.taskList?.list, []);
  return (
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
                <MoreVertIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}