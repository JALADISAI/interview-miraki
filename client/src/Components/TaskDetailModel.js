import React from 'react';
import { Box, Modal, TextField, Button } from '@mui/material';
import { useSelector } from 'react-redux';

function TaskDetailModel (props) {
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
    const  handleClose = () => {
        props?.onClose()
    }
    const actionTask = useSelector(state => state?.taskList?.actionTask, {});
    const isEdit = useSelector(state => state?.taskList?.isEdit, false)
    return(
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <div>
                    <TextField defaultValue={actionTask.title} label={`title`} />
                </div>
                <div style={{marginTop: 20}}>
                    <TextField defaultValue={actionTask.desc} multiline label={`Description`} />
                </div>
                <div style={{marginTop: 20}}>
                    <Button variant='contained'>
                        {isEdit ? `Update Task` : `Create Task`}
                    </Button>
                    <Button onClick={handleClose} style={{marginLeft: 20}} variant='outlined'>Cancel</Button>
                </div>
            </Box>
        </Modal>
    )
}
export default TaskDetailModel;