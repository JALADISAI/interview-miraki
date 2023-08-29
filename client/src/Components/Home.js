import React from "react";
import { useState } from "react";
import  {handleEdit,handleDelete,handleMarkAsComplete}  from "../actions/index"
import { useDispatch } from "react-redux";
function Home () {
    const[createTask,setCreateTask] = useState(false);
    const dispatch = useDispatch();

    const handleMarkAsCompletedOnClick = () => {
        dispatch(handleMarkAsComplete(true))
    }
    const handleEditOnClick = () => {
   dispatch(handleEdit(true))
    }
    const handleDeleteOnClick = () => {
        dispatch(handleDelete(true))

    }
    const handleCreateButton = () => {
        setCreateTask(true)

    }
    return(
    // <div>
    //       <div>
    //          <tittle>
    //           Displays a list of tasks.
    //           </tittle>
    //         </div>

    //         <div>
    //             <description>
    //               here is the description for the each tasks
    //              </description>
    //         </div>
            
    //         <div>
    //             <button onClick={handleMarkAsCompletedOnClick}>Marked AS Completed</button>
    //         </div>
    //         <div>
    //             <button onClick={handleEditOnClick}>Edit</button>
    //          </div>
    //          <div>
    //             <button onClick={handleDeleteOnClick}>Delete</button>
    //          </div>
    //         <div>
    //         <tittle>
    //             lists of tasks.
    //         </tittle>
    //         <div>
    //             <description>
    //                 task content 
    //             </description>

    //         </div>
    //         <div>
    //             <button>Marked AS Completed</button>
    //         </div>
    //         <div>
    //             <button>Edit</button>
    //          </div>
    //          <div>
    //             <button>Delete</button>
    //          </div>

    //         <div>
    //             <tittle>
    //                 miraki technologies
    //             </tittle>
    //         </div>
    //         <div>
    //             <description>
    //                 tasks are assign by the company.
    //             </description>
    //         </div>
            
    //         <div>
    //             <button>Marked AS Completed</button>
                
    //         </div>
    //         <div>
    //             <button>Edit</button>
    //          </div>
    //          <div>
    //             <button>Delete</button>
    //          </div>

    //         </div>

    //  </div>
            <div>
                <div>
                    No Task Found
                </div>
                <div>
                    <button onClick={handleCreateButton}> 
                        Create A Task
                    </button>
                </div>
                <div>
                    tittle
                    <input type = "text"/>
                </div>
                <div>
                    description
                    <input type = "text"/>
                </div>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>markedascomplete</button>
                </div>
            </div>
            )
                   }
export default Home;