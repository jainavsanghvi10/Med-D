import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal';
import Backdrop from './Backdrop';
import '../assets/styles/modal.css';

export const MedRecords = () => {
	const { currentUser } = useAuth();
	const navigate = useNavigate();
	const [id, setId] = useState();
	const [currFolder, setCurrFolder] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	let folderName = '';
	// const [FileNames, setFileNames] = useState([]);
	// const [FolderNames, setFolderNames] = useState([]);

	var FileNames = [];
	var FileLinks = [];
	var FolderNames = [];

	useEffect(() => {
		console.log("first log");
		if (!currentUser) {
			navigate('/signup');
		}
		const params = new URLSearchParams(window.location.search);
		const ID = params.get('id');
		setId(ID);
		const FOLDER = params.get('fn');
		setCurrFolder(FOLDER);
		console.log(ID, FOLDER);
		//eslint-disable-next-line
	}, []);

	console.log(currFolder);
	console.log('Getting all folder and file details from ' + id);
	var listRef;

	if (currFolder != null) {
		listRef = firebase.storage().ref().child(`${id}/${currFolder}`);
	} else {
		listRef = firebase.storage().ref().child(`${id}/`);
	}

	listRef
		.listAll()
		.then((snap) => {
			// console.log("printing file details")
			// console.log(FileNames, FolderNames);
			snap.prefixes.forEach((folderRef) => {
				// console.log('folderRef: ' + folderRef.name);
				FolderNames.push(folderRef.name);
			});
			snap.items.forEach((itemRef) => {
          if(itemRef.name !='userTest'){
    				FileNames.push(itemRef.name);
            console.log(itemRef.getDownloadURL().then((fileURL) => {
              FileLinks.push(fileURL)
            }));
          }
			});

      // function showItem(){
        
      // }

			for (let index = 0; index < FolderNames.length; index++) {
				// console.log("fl")
				const ele = FolderNames[index];
				// console.log(ele);
				const div1 = document.createElement('div');
				const icon = document.createElement('i');
				const folderName = document.createElement('p');

				div1.id = `folder_${index}`;
				div1.classList.add('tile');
				div1.classList.add('folder');
				div1.onclick = () => {
					setCurrFolder(FolderNames[index]);
					window.location.href = `/medicalRecords?id=${id}&fn=${FolderNames[index]}`;
				};

				icon.id = `icon_${index}`;
				icon.classList.add('mdi');
				icon.classList.add('mdi-folder');

				folderName.innerText = ele;

				div1.appendChild(icon).appendChild(folderName);
				document.getElementById('Folder_lvl1').appendChild(div1);
			}

			for (let index = 0; index < FileNames.length; index++) {
				const ele = FileNames[index];
				// console.log(ele);
				const div1 = document.createElement('div');
				const icon = document.createElement('i');
				const fileName = document.createElement('p');

				div1.id = `folder_${index}`;
				div1.classList.add('tile');
				div1.classList.add('folder');
				div1.onclick = () => {
					setCurrFolder(ele);
				};

				icon.id = `icon_${index}`;
				icon.classList.add('mdi');
				icon.classList.add('mdi-file-document');

				fileName.innerText = ele;

				div1.appendChild(icon).appendChild(fileName);
				document.getElementById('Folder_lvl1').appendChild(div1);
			}
			console.log(FolderNames, FileNames);
			// provideContent(FileNames, FolderNames);
		})
		.catch((error) => {
      console.log(error);
		});
  const [purpose,setPurpose]=useState('test');
  // let purpose='test';
	function ConfirmAddFolder() {
    setPurpose('AddFolder')
    setModalIsOpen(true);
	}

  function ChooseFiles() {
    setPurpose('UploadFiles')
		setModalIsOpen(true);
	}

	function AddFolder(folderName) {
    let file=''
    const storageRef = firebase.storage().ref();
      var uploadRef = storageRef.child(`-2072624641/${folderName}/userTest`)
      uploadRef.put(file).then((snap)=>{
        console.log(folderName);
        console.log("Folder Added with name-"+folderName);
        setModalIsOpen(false);
      })
	}
  function UploadFile(file){
		if (!file) return;
		const storageRef = firebase.storage().ref();
    var uploadRef = storageRef.child(`-2072624641/`+ file.name)
    uploadRef.put(file).then((snap)=>{
      // console.log(id);
      console.log("File successfully uploded ");
      setModalIsOpen(false);
    })
  }

	function closeModalHandler() {
		setModalIsOpen(false);
	}

	return (
		<div className='App'>
			<div className='d-flex justify-content-between align-items-center mt-4'>
				<button className='back mt-0'>
					<i className='mdi mdi-arrow-left'></i>
				</button>
				<div className=''>
					<button
						type='button'
						className='btn-outline-light back mx-3'
						onClick={ConfirmAddFolder}>
						<i className='mdi mdi-folder-plus fs-1'></i>
					</button>
					<button type='button' className='btn-outline-light back mx-3' onClick={ChooseFiles}>
						<i className='mdi mdi-cloud-upload fs-1'></i>
					</button>
				</div>
				{modalIsOpen && (
					<Modal
						onCancel={closeModalHandler}
            onConfirm={ purpose =='AddFolder' ? AddFolder:UploadFile}
            task={purpose}
					/>
				)}
				{modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
			</div>

			<div id='stage' className='stage'>
				<div
					className='folder-wrap level-current scrolling'
					id='Folder_lvl1'></div>
			</div>
		</div>
	);
};
