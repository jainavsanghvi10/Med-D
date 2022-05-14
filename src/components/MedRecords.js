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
	const [purpose, setPurpose] = useState('test');
	// const [FileNames, setFileNames] = useState([]);
	// const [FolderNames, setFolderNames] = useState([]);

	var FileNames = [];
	var FileLinks = [];
	var FileSize = [];
	var FolderNames = [];

	useEffect(() => {
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
				if (itemRef.name != 'userTest') {
					FileNames.push(itemRef.name);
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
			// console.log(FileSize.length);
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
				const div1 = document.createElement('div');
				const icon = document.createElement('i');
				const trash = document.createElement('i');
				const fileName = document.createElement('p');

				div1.id = `folder_${index}`;
				div1.classList.add('tile');
				div1.classList.add('folder');
				div1.onclick = () => {
					showFile(index);
				};

				trash.id = `trash_${index}`;
				trash.classList.add('mdi');
				trash.classList.add('mdi-delete');
				trash.classList.add('fs-1');
				trash.classList.add('pb-3');
				trash.onclick = () => {
					deleteFile(FileNames[index]);
					console.log('delete file');
				};

				icon.id = `icon_${index}`;
				icon.classList.add('mdi');
				icon.classList.add('mdi-file-document');

				fileName.innerText = ele;
				div1.appendChild(trash);
				div1.appendChild(icon).appendChild(fileName);
				// div1.appendChild(icon).appendChild(trash);
				// div1.appendChild(fileName);
				document.getElementById('Folder_lvl1').appendChild(div1);
			}

			console.log(FolderNames, FileNames);
			console.log(FileSize, FileSize.length);
			// provideContent(FileNames, FolderNames);
		})
		.catch((error) => {
			console.log(error);
		});
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
				<button className='back mt-0'>
					<i className='mdi mdi-arrow-left'></i>
				</button>
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
			<div id='stage' className='stage'>
				<div
					className='folder-wrap level-current scrolling'
					id='Folder_lvl1'></div>
			</div>
		</div>
	);
};
