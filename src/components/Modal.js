export default function Modal(props) {
    let folderName='';
    let file;

    function cancelHandler() {
      props.onCancel();
    }
  
    function confirmHandler() {
      if(props.task=='AddFolder')
        props.onConfirm(folderName);
      else{
        props.onConfirm(file);
      }
    }
    
    const FolderTask=()=>{
      // console.log(props.task);
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
        {props.task=='AddFolder' ? FolderTask() : FileTask()}
        <button className='btn_up' onClick={confirmHandler}>
          Confirm
        </button>
        <button className='btn_up btn_up--alt' onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    );
  }