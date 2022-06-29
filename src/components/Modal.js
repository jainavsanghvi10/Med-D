export default function Modal(props) {
    let folderName='';
    let file;

    function cancelHandler() {
      props.onCancel();
    }
  
    function confirmHandler() {
      if(props.task=='AddFolder')
        props.onConfirm(folderName);
      else if(props.task=='UploadFiles'){
        props.onConfirm(file);
      }else if(props.task=='DeleteFile'){
        props.onConfirm();
      }else{
        props.onConfirm();
      }
    }
    
    const FolderTask=()=>{
      return(
        <input type='text' required onChange={(e)=>{folderName=e.target.value}} placeholder='Enter Folder Name'/>
      );
    }

    const FileTask=(progress)=>{
      return(
        <>
        <input type='file' onChange={(e)=>{file=e.target.files[0]}}/>
        {progress==0? null:
          <div><h5>Uploaded {progress}</h5></div>
        }
        </>
        );
    }
    return (
      <div className='modal_up'>
        {console.log(props.task)}
        {props.task=='AddFolder' ? FolderTask() : props.task =='UploadFiles' ? FileTask(props.prog): <h4>Are you sure you want to delete</h4>}
        <button className='btn_up mb-2' onClick={confirmHandler}>
          Confirm
        </button>
        <button className='btn_up btn_up--alt' onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    );
  }