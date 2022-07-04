import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal';
import Backdrop from './Backdrop';
import '../assets/styles/modal.css';
// import {uploadBytesResumable} from "firebase/storage"

export const MedRecords = () => {
	const { currentUser } = useAuth();
	const navigate = useNavigate();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [purpose, setPurpose] = useState('test');
	const [FileNames, setFileNames] = useState([]);
	const [FolderNames, setFolderNames] = useState([]);
	const [AllFileNames, setAllFileNames] = useState([]);
	const [AllFolderNames, setAllFolderNames] = useState([]);
	const [FileData, setFileData] = useState([]);
	const [FileLinks, setFileLinks] = useState([]);
	const [deleteFileName, setDeleteFileName] = useState('');
	const [FoldersSelected, setFolderSelected] = useState([]);
	const [progress, setProgress] = useState(0);
	// Extracting variables from query string
	const params = new URLSearchParams(window.location.search);
	var id = params.get('id');
	const currFolder = params.get('fn');

	let count = 0;
	let listRef,
		searchString = '';
	useEffect(() => {
		if (!currentUser) {
			navigate('/signup');
		}
		if (currentUser && id == null) {
			navigate({
				pathname: '/medicalRecords',
				search: `?id=${currentUser.uid}`,
			});
			id = currentUser.uid;
		}

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
				const filelinks = [];
				const filedata = [];
				snap.prefixes.forEach((folderRef) => {
					foNames.push(folderRef.name);
				});

				snap.items.forEach((itemRef) => {
					if (itemRef.name != 'userTest') {
						fiNames.push(itemRef.name);
						itemRef.getMetadata().then((metadata) => {
							let obj = {
								FileName: itemRef.name,
								Size: metadata.size,
								DateAdded: metadata.updated,
							};
							filedata.push(obj);
						});
						itemRef.getDownloadURL().then((fileURL) => {
							let obj = { FileName: itemRef.name, Link: fileURL };
							filelinks.push(obj);
						});
					}
				});

				setFileData(filedata);
				setFileLinks(filelinks);
				setFolderNames(foNames);
				setAllFolderNames(foNames);
				setFileNames(fiNames);
				setAllFileNames(fiNames);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	// *******************************************************************************************************************************************************************
	console.log('Getting all folder and file details from ' + id);
	console.log('folders: ' + FolderNames + ' files: ' + FileNames);

	const FolderList = [],
		FileList = [],
		selectedFolders = [];
	for (let index = 0; index < FolderNames.length; index++) {
		const ele = FolderNames[index];
		FolderList.push(
			<div
				className='col-xs-4 folderContainer'
				id={'folder' + { index }}
				style={{
					width: '100px',
					display: 'inline-block',
					float: 'none',
				}}>
				<span
					className='material-icons align-bottom folderIcon'
					style={{
						fontSize: '100px',
						cursor: 'pointer',
						color: '#13B0D0',
					}}
					onClick={(e) => {
						e.target.classList.toggle('darkGreyishColor');
						if (e.target.classList.contains('darkGreyishColor'))
							selectedFolders.push(`${FolderNames[index]}`);
						else {
							let j = -1;
							for (let i = 0; i < selectedFolders.length; i++) {
								if (selectedFolders[i] == FolderNames[index]) {
									j = i;
									break;
								}
							}
							selectedFolders.splice(j, 1);
						}
						// console.log('Folder Clicked');
						// console.log(selectedFolders);
					}}
					onDoubleClick={() => {
						window.location.href = `/medicalRecords?id=${id}&fn=${FolderNames[index]}`;
					}}>
					folder
				</span>
				<h6
					className='align-text-top text-center text-dark folderIconName'
					style={{
						overflowX: 'hidden',
						textOverflow: 'ellipsis',
						width: '100px',
					}}>
					{ele}
				</h6>
			</div>
		);
	}

	for (let index = 0; index < FileNames.length; index++) {
		const ele = FileNames[index];
		FileList.push(
			<div className='row mb-2' id='fileContainer'>
				<button
					className='btn btn-light styleCarousel fw-bold col-2 me-2'
					style={{ cursor: 'default' }}>
					DD.MM.YYYY
				</button>
				<button
					className='btn btn-outline-danger styleCarousel fw-bold col-1 me-2'
					onClick={() => {
						setDeleteFileName(ele);
						ConfirmDelete('File');
					}}>
					<span className='material-icons align-middle'>delete</span>
				</button>
				<button
					className='btn btn-outline-dark styleCarousel fw-bold col-1'
					onClick={() => showFile(ele)}>
					<span className='material-icons align-middle'>visibility</span>
				</button>
				<span
					className='border text-center pt-2 styleCarousel fw-bold col-6 ms-5'
					style={{
						overflowX: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}
					id='docName'>
					{ele}
				</span>
			</div>
		);
	}
	// *******************************************************************************************************************************************************************

	function search(word) {
		if (word == '' || word == null) {
			setFileNames(AllFileNames);
			setFolderNames(AllFolderNames);
			return;
		}
		let matchfiles = [];
		FileNames.forEach((e) => {
			if (e.toLowerCase().includes(word)) {
				matchfiles.push(e);
			}
		});
		let matchfolders = [];
		FolderNames.forEach((f) => {
			if (f.toLowerCase().includes(word)) {
				matchfolders.push(f);
			}
		});
		setFolderNames(matchfolders);
		setFileNames(matchfiles);
	}
	function goBack() {
		navigate(`/medicalRecords?id=${id}`);
		window.location.reload();
	}
	function showFile(filename) {
		if (currFolder != null) {
			listRef = firebase
				.storage()
				.ref()
				.child(`${id}/${currFolder}/${filename}`);
		} else {
			listRef = firebase.storage().ref().child(`${id}/${filename}`);
		}

		listRef.getDownloadURL().then((url) => {
			window.open(url);
		});
	}
	function sort_AtoZ() {
		console.log('Sorting file alphebetically in ascending order...');
		let fileN = [];
		AllFileNames.forEach((e) => fileN.push(e));
		let folderN = [];
		AllFolderNames.forEach((e) => folderN.push(e));
		setFileNames(fileN);
		setFolderNames(folderN);
	}
	function sort_ZtoA() {
		console.log('Sorting file alphebetically in descening order...');
		let fileN = [];
		AllFileNames.forEach((e) => fileN.push(e));
		let folderN = [];
		AllFolderNames.forEach((e) => folderN.push(e));
		setFileNames(fileN.reverse());
		setFolderNames(folderN.reverse());
	}
	function sort_size_ascending() {
		console.log('Sorting file in ascending order of size...');
		let filedata = FileData;
		filedata.sort((a, b) => {
			return a.Size - b.Size;
		});

		let filenames = [];
		filedata.forEach((f) => filenames.push(f.FileName));
		setFileNames(filenames);
		setFileData(filedata);
	}
	function sort_size_descending() {
		console.log('Sorting file in descening order of size...');
		let filedata = FileData;
		filedata.sort((a, b) => {
			return b.Size - a.Size;
		});

		let filenames = [];
		filedata.forEach((f) => filenames.push(f.FileName));
		setFileNames(filenames);
		setFileData(filedata);
	}
	function deleteFile(filename) {
		console.log('deletingfile');
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
		setModalIsOpen(false);
		let fileN = FileNames;
		let j = -1;
		for (let i = 0; i < fileN.length; i++) {
			if (fileN[i] == filename) {
				j = i;
				break;
			}
		}
		fileN.splice(j, 1);
		setFileNames(fileN);
		setAllFileNames(fileN);
	}
	function deleteFilefromFolder(filename, folderName) {
		var deleteRef;
		deleteRef = firebase
			.storage()
			.ref()
			.child(`${id}/${folderName}/${filename}`);
		deleteRef.delete();
	}
	function deleteFolder(folderName) {
		listRef = firebase.storage().ref().child(`${id}/${folderName}`);
		listRef.listAll().then((res) => {
			res.items.forEach((itemRef) => {
				deleteFilefromFolder(itemRef.name, folderName);
			});
		});
		let folderN = FolderNames;
		let j = -1;
		for (let i = 0; i < folderN.length; i++) {
			if (folderN[i] == folderName) {
				j = i;
				break;
			}
		}
		folderN.splice(j, 1);
		setFolderNames(folderN);
		setAllFolderNames(folderN);
		console.log(folderName + ' deleted successfully!');
	}
	function ConfirmAddFolder() {
		setPurpose('AddFolder');
		setModalIsOpen(true);
	}
	function ChooseFiles() {
		setPurpose('UploadFiles');
		setModalIsOpen(true);
	}
	function ConfirmDelete(object) {
		if (object == 'Folder') {
			setPurpose('DeleteFolder');
		} else {
			setPurpose('DeleteFile');
		}
		setModalIsOpen(true);
	}
	function AddFolder(folderName) {
		console.log('adding: ' + folderName);
		let file = '';
		const storageRef = firebase.storage().ref();
		var uploadRef = storageRef.child(`${id}/${folderName}/userTest`);
		uploadRef.put(file).then((snap) => {
			console.log('Folder Added with name-' + folderName);
			setModalIsOpen(false);
			// navigate(0);
		});
		let folderN = FolderNames;
		folderN.push(folderName);
		setFolderNames(folderN);

		// let AfolderN = AllFolderNames;
		// AfolderN.push(folderName);
		// setAllFolderNames(AfolderN);
	}
	function UploadFile(file) {
		console.log('uploading: ' + file);
		if (!file) return;
		let storageRef;
		if (currFolder != null) {
			storageRef = firebase.storage().ref().child(`${id}/${currFolder}`);
		} else {
			storageRef = firebase.storage().ref().child(`${id}/`);
		}
		var uploadRef = storageRef.child(file.name);
		const uploadTask = uploadRef.put(file);
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					);
					console.log('Upload is ' + progress + '% done');
					setProgress(prog);
			},
			(err) => console.log(err),
			() => {
				console.log("'File successfully uploded to ' + id");
				let fileN = FileNames;
				fileN.push(file.name);
				setFileNames(fileN);
				setAllFileNames(fileN);
				setModalIsOpen(false);
				setProgress(0)
			}
		);
		// uploadRef.put(file).then((snap) => {
		// 	console.log('File successfully uploded to ' + id);
		// 	// setModalIsOpen(false)
		// });
		// let fileN = FileNames;
		// 		fileN.push(file.name);
		// 		setFileNames(fileN);
		// 		setAllFileNames(fileN);
		// 		setModalIsOpen(false);
	}
	function closeModalHandler() {
		setModalIsOpen(false);
	}

	document.body.style.background = '#eeeeee';

	// *******************************************************************************************************************************************************************

	return (
		<>
			<div id='saveMedRecHeading' className='container mt-3 w-75'>
				<h2 className='fw-bold'>Save Your Medical Records</h2>
			</div>
			<div
				id='saveMedRecContainer'
				className='container mt-3 mb-5 pb-4 w-75 border shadow-lg styleCarousel'
				style={{ height: 'fit-content' }}>
				{!currFolder ? null : (
					<button
						className='btn btn-outline-light mt-3 ms-2 pt-2 pb-2 ps-3 pe-2 styleCarousel fw-bold'
						style={{borderColor:'cornflowerblue'}}
						onClick={goBack}>
						<span className='material-icons align-middle text-dark'>arrow_back_ios</span>
					</button>
				)}
				<button
					className='btn btn-dark mt-3 ms-2 pt-2 pb-2 ps-3 pe-3 styleCarousel fw-bold'
					onClick={ChooseFiles}>
					<span className='material-icons me-2 align-middle d-inline'>
						file_upload
					</span>
					<span id='hide_in_mobile' className='desktopView d-inline'>
						Upload
					</span>
				</button>

				{!currFolder ? (
					<>
						<button
							className='btn btn-dark mt-3 ms-2 pt-2 pb-2 ps-3 pe-3 styleCarousel fw-bold'
							onClick={() => {
								setFolderSelected(selectedFolders);
								if (selectedFolders.length == 0) {
									alert('Please select some folders to delete');
								} else {
									ConfirmDelete('Folder');
								}
							}}>
							<span className='material-icons align-middle'>delete</span>
						</button>
						<button
							className='btn btn-dark mt-3 ms-2 pt-2 pb-2 ps-3 pe-3 styleCarousel fw-bold'
							onClick={ConfirmAddFolder}>
							<span className='material-icons align-middle'>
								create_new_folder
							</span>
						</button>
					</>
				) : null}
				<div className='btn-group dropright'>
					<button
						type='button'
						className='btn btn-light mt-3 ms-2 pt-2 pb-2 ps-3 pe-3 styleCarousel fw-bold dropdown-toggle'
						data-toggle='dropdown'
						aria-haspopup='true'
						aria-expanded='false'>
						<span id='hide_in_mobile' className='desktopView d-inline'>
							SORT
						</span>
						<span
							id='sort_span-medRec'
							className='material-icons ms-2 align-middle d-inline'>
							sort
						</span>
					</button>
					<div className='dropdown-menu'>
						<button className='dropdown-item fw-bold' onClick={sort_AtoZ}>
							Lexiographically(A to Z)
						</button>
						<button className='dropdown-item fw-bold' onClick={sort_ZtoA}>
							Lexiographically(Z to A)
						</button>
						<button
							className='dropdown-item fw-bold'
							onClick={sort_size_ascending}>
							Increasing Size
						</button>
						<button
							className='dropdown-item fw-bold'
							onClick={sort_size_descending}>
							Decreasing Size
						</button>
					</div>
				</div>

				<input
					type='text'
					className='mt-3 align-middle rounded-pill py-2 px-2 ms-3 text-center'
					required
					onChange={(e) => {
						setFolderNames(AllFolderNames);
						setFileNames(AllFileNames);
						searchString = e.target.value;
					}}
					placeholder='Enter file/folder name'
				/>
				<button
					className='btn btn-light mt-3 ms-2 pt-2 pb-2 ps-3 pe-3 styleCarousel fw-bold '
					onClick={() => {
						search(searchString.toLowerCase());
					}}>
					Search
				</button>

				{!currFolder ? null : (
					<div className='container mt-3 w-100'>
						<h2 className='fw-bold'>{currFolder}</h2>
					</div>
				)}

				{modalIsOpen && (
					<Modal
						onCancel={closeModalHandler}
						onConfirm={
							purpose == 'AddFolder'
								? AddFolder
								: purpose == 'DeleteFile'
								? () => {
										console.log(deleteFileName);
										deleteFile(deleteFileName);
								  }
								: purpose == 'DeleteFolder'
								? () => {
										console.log('Folders Selected: ', FoldersSelected);
										FoldersSelected.forEach((fo) => deleteFolder(fo));
										setModalIsOpen(false);
								  }
								: UploadFile
						}
						task={purpose}
						prog={progress}
					/>
				)}

				{modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
				{!currFolder ? (
					<div
						className='container mt-5 styleCarousel horizontal-scrollable'
						style={{ height: '150px', backgroundColor: 'white' }}
						id='folderScroll'>
						{FolderList.length != 0 ? (
							<div
								className='text-left'
								placeholder='No Folders'
								style={{
									overflowX: 'auto',
									overflowY: 'hidden',
									whiteSpace: 'nowrap',
								}}>
								{FolderList}
							</div>
						) : (
							<div className='text-center'>
								<h2 style={{ color: 'grey', paddingTop: '50px' }}>
									--No Folders--
								</h2>
							</div>
						)}
					</div>
				) : null}
				<div
					className='container mt-3 pt-4 ps-5 styleCarousel horizontal-scrollable mb-auto'
					style={{
						overflow: 'auto',
						backgroundColor: 'white',
					}}
					id='fileScroll'>
					{FileList.length != 0 ? (
						FileList
					) : (
						<div className='text-center'>
							<h2 style={{ color: 'grey', paddingTop: '50px' }}>
								--No Files--
							</h2>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
