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

    const FileTask=()=>{
      return(
        <input type='file' onChange={(e)=>{file=e.target.files[0]}}/>
        );
    }
    return (
      <div className='modal_up'>
        {console.log(props.task)}
        {props.task=='AddFolder' ? FolderTask() : props.task =='UploadFiles' ? FileTask(): <h4>Are you sure you want to delete</h4>}
        <button className='btn_up' onClick={confirmHandler}>
          Confirm
        </button>
        <button className='btn_up btn_up--alt' onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    );
  }