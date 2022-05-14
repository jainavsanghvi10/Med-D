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
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [purpose, setPurpose] = useState('test');
	const [FileNames, setFileNames] = useState([]);
	const [FolderNames, setFolderNames] = useState([]);

	var FileLinks = [];
	var FileSize = [];
	
	// Extracting variables from query string
	const params = new URLSearchParams(window.location.search);
	const id = params.get('id');
	const currFolder = params.get('fn');

	useEffect(() => {

		if (!currentUser) {
			navigate('/signup');
		}

		//eslint-disable-next-line

		// get data from storage
		if (currFolder != null) {
			listRef = firebase.storage().ref().child(`${id}/${currFolder}`);
		} else {
			listRef = firebase.storage().ref().child(`${id}/`);
		}
		listRef
			.listAll()
			.then((snap) => {
				const fiNames = [];
				const foNames = [];
				snap.prefixes.forEach((folderRef) => {
					console.log('folderRef: ' + folderRef.name);
					foNames.push(folderRef.name);
				});
				snap.items.forEach((itemRef) => {
					if (itemRef.name != 'userTest') {
						fiNames.push(itemRef.name);
						itemRef.getMetadata().then((metadata) => {
							FileSize.push(metadata.size);
							console.log(itemRef.name + ': ' + metadata.size);
						});
						itemRef.getDownloadURL().then((fileURL) => {
							FileLinks.push(fileURL);
						});
						console.log(FileSize.length, FileLinks.length, FileNames.length);
					}
				});
	
				console.log("fofi", foNames, fiNames);
				setFolderNames(foNames);
				setFileNames(fiNames);

				// console.log(FileSize, FileSize.length);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	console.log(currFolder);
	console.log('Getting all folder and file details from ' + id);
	console.log("folders and files", FolderNames, FileNames);
	var listRef;
	const FolderList = [], FileList = [];
	for (let index = 0; index < FolderNames.length; index++) {
		const ele = FolderNames[index];
		FolderList.push(
		  <div className="tile folder"
			onClick={() => {
				navigate(`/medicalRecords?id=${id}&fn=${FolderNames[index]}`);
				window.location.reload();
			}}
		  >
			<i className="mdi mdi-folder"></i>
			<span>{ele}</span>
		  </div>
		)
	  }
  
	  for (let index = 0; index < FileNames.length; index++) {
		const ele = FileNames[index];
		FileList.push(
		  <div className="tile form">
			<i className="mdi mdi-file-document"></i>
			<span>{ele}</span>
		  </div>
		)
	  }


	//showFile: use REACT PDF VIEWER--implementation left
	function showFile(i) {
		console.log(i);
	}
	function compareStrings(s1, s2) {
		let min = Math.min(s1.length, s2.length);
		for (let i = 0; i < min; i++) {
			if (s1[i] > s2[i]) {
				console.log(s1 + ' ' + s2 + ' ' + 1);
				return 1;
			} else if (s1[i] < s2[i]) {
				console.log(s1 + ' ' + s2 + ' ' + 2);
				return 2;
			} else {
				console.log('same');
				continue;
			}
		}
		return 0;
	}
	function sort_AtoZ() {
		for (let i = 0; i < FileNames.length - 1; i++) {
			for (let j = i + 1; j < FileNames.length; j++) {
				let result = compareStrings(FileNames[i], FileNames[j]);
				if (result == 1) {
					let tmp = FileNames[j];
					FileNames[j] = FileNames[i];
					FileNames[i] = tmp;

					let tmp2 = FileLinks[j];
					FileLinks[j] = FileLinks[i];
					FileLinks[i] = tmp2;
				} else if (result == 2) {
					continue;
				} else {
					if (FileNames[i].length > FileNames[j].length) {
						let tmp = FileNames[j];
						FileNames[j] = FileNames[i];
						FileNames[i] = tmp;

						let tmp2 = FileLinks[j];
						FileLinks[j] = FileLinks[i];
						FileLinks[i] = tmp2;
					}
				}
			}
		}
		for (let i = 0; i < FolderNames.length - 1; i++) {
			for (let j = i + 1; j < FolderNames.length; j++) {
				let result = compareStrings(FolderNames[i], FolderNames[j]);
				if (result == 1) {
					let tmp = FolderNames[j];
					FolderNames[j] = FolderNames[i];
					FolderNames[i] = tmp;
				} else if (result == 2) {
					continue;
				} else {
					if (FolderNames[i].length > FolderNames[j].length) {
						let tmp = FolderNames[j];
						FolderNames[j] = FolderNames[i];
						FolderNames[i] = tmp;
					}
				}
			}
		}
	}
	function sort_ZtoA() {
		sort_AtoZ();
		FileNames.reverse();
		FolderNames.reverse();
		FileLinks.reverse();
	}
	function sort_size_ascending() {
		for (let i = 0; i < FileSize.length; i++) {
			for (let j = 0; j < FileSize.length; j++) {
				if (FileSize[i] > FileSize[j]) {
					let tmp = FileNames[j];
					FileNames[j] = FileNames[i];
					FileNames[i] = tmp;

					let tmp2 = FileLinks[j];
					FileLinks[j] = FileLinks[i];
					FileLinks[i] = tmp2;

					let tmp3 = FileSize[j];
					FileSize[j] = FileSize[i];
					FileSize[i] = tmp3;
				} else {
					continue;
				}
			}
		}
	}
	function sort_size_descending() {
		sort_size_ascending();
		FileNames.reverse();
		FileLinks.reverse();
		FileSize.reverse();
	}
	function deleteFile(filename) {
		var deleteRef;
		if (currFolder != null) {
			deleteRef = firebase
				.storage()
				.ref()
				.child(`${id}/${currFolder}/${filename}`);
		} else {
			deleteRef = firebase.storage().ref().child(`${id}/${filename}`);
		}
		deleteRef
			.delete()
			.then(() => {
				console.log(`deleted ${filename} successfully`);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	function deleteFolder(folderName) {
		var deleteRef = firebase.storage().ref().child(`${id}/${folderName}`);
		deleteRef
			.delete()
			.then(() => {
				console.log(`deleted ${folderName} successfully`);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	function ConfirmAddFolder() {
		setPurpose('AddFolder');
		setModalIsOpen(true);
	}
	function ChooseFiles() {
		setPurpose('UploadFiles');
		setModalIsOpen(true);
	}
	function AddFolder(folderName) {
		let file = '';
		const storageRef = firebase.storage().ref();
		var uploadRef = storageRef.child(`${id}/${folderName}/userTest`);
		uploadRef.put(file).then((snap) => {
			console.log(folderName);
			console.log('Folder Added with name-' + folderName);
			setModalIsOpen(false);
		});
	}
	function UploadFile(file) {
		if (!file) return;
		let storageRef;
		if (currFolder != null) {
			storageRef = firebase.storage().ref().child(`${id}/${currFolder}`);
		} else {
			storageRef = firebase.storage().ref().child(`${id}/`);
		}
		var uploadRef = storageRef.child(file.name);
		uploadRef.put(file).then((snap) => {
			// console.log(id);
			console.log('File successfully uploded to ' + id);
			setModalIsOpen(false);
		});
	}
	function closeModalHandler() {
		setModalIsOpen(false);
	}

	return (
		<div className='App'>
			<div className='d-flex justify-content-between align-items-center mt-4'>
				{currFolder != null ?
				<button className='back mt-0'
				onClick={() => {
					navigate(`/medicalRecords?id=${id}`);
					window.location.reload();
					}}>
					<i className='mdi mdi-arrow-left'></i>
				</button> : <button className='back mt-0'></button>}
				<div className=''>
					{currFolder == null ? (
						<button
							type='button'
							className='btn-outline-light back mx-3'
							onClick={ConfirmAddFolder}>
							<i className='mdi mdi-folder-plus fs-1'></i>
						</button>
					) : null}
					<button
						type='button'
						className='btn-outline-light back mx-3'
						onClick={ChooseFiles}>
						<i className='mdi mdi-cloud-upload fs-1'></i>
					</button>
				</div>
				{modalIsOpen && (
					<Modal
						onCancel={closeModalHandler}
						onConfirm={purpose == 'AddFolder' ? AddFolder : UploadFile}
						task={purpose}
					/>
				)}
				{modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
			</div>
			{currFolder != null ? <h2>{currFolder}</h2> : <h2>Your Medical Records</h2>}
			<div id='stage' className='stage'>
				<div className='folder-wrap level-current scrolling' id='Folder_stage'>
					{FolderList}
				</div>
				<div className='folder-wrap level-current scrolling' id='File_stage'>
					{FileList}
				</div>
			</div>
		</div>
	);
};
