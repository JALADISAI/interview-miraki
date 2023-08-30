import React, { useState } from 'react';
import { Box, Modal, TextField, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { createTask, updateTaskById } from '../apis';
function TaskDetailModel (props) {
    const [tittle,setTittle]= useState('');
    const [description,setDescription]= useState('');
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const actionTask = useSelector(state => state?.taskList?.actionTask, {});
      const isEdit = useSelector(state => state?.taskList?.isEdit, false)
    const  handleClose = () => {
        props?.onClose()
    }
    const handleSubmit = async () => {
        const obj = {title: tittle, desc: description}
        let apiAction = createTask;
        if(isEdit) {
            apiAction = updateTaskById;
            obj.id = actionTask._id;
        }
        await apiAction(obj);
        handleClose()
    }
      const handleUpdateTittle = (event) => {
        console.log(event.target.value);
        setTittle(event.target.value);
      }
      const handleUpdateDescription = (event) => {
        console.log(event.target.value);
        setDescription(event.target.value);

      }
   
    return(
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <div>
                    <TextField  onChange ={handleUpdateTittle} defaultValue={actionTask?.title} label={`title`} />
                </div>
                <div style={{marginTop: 20}}>
                    <TextField onChange={handleUpdateDescription} defaultValue={actionTask?.desc} multiline label={`Description`} />
                </div>
                <div style={{marginTop: 20}}>
                    <Button variant='contained'onClick ={handleSubmit}>
                        {isEdit ? `Update Task` : `Create Task`}
                    </Button>
                    <Button onClick={handleClose} style={{marginLeft: 20}} variant='outlined'>Cancel</Button>
                </div>
            </Box>
        </Modal>
    )
}
export default TaskDetailModel;