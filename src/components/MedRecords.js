import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal';
import Backdrop from './Backdrop';
// import { Viewer } from '@react-pdf-viewer/core';
import '../assets/styles/modal.css';

// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

export const MedRecords = () => {
	const { currentUser } = useAuth();
	const navigate = useNavigate();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [purpose, setPurpose] = useState('test');
	const [FileNames, setFileNames] = useState([]);
	const [FolderNames, setFolderNames] = useState([]);
	const [deleteFileName, setDeleteFileName] = useState('');
	const [FoldersSelected, setFolderSelected] = useState([]);
	// var FileLinks = [];
	let count = 0;
	var FileSize = [];

	// Extracting variables from query string
	const params = new URLSearchParams(window.location.search);
	var id = params.get('id');
	const currFolder = params.get('fn');
	// let deleteFileName='';

	useEffect(() => {
		if (!currentUser) {
			navigate('/signup');
		}
		if(currentUser && id == null){
			navigate({
				pathname: '/medicalRecords',
				search: `?id=${currentUser.uid}`})
			id = currentUser.uid;
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
				const FileL = [];
				// const FileL = new Map();
				// console.log(snap);
				snap.prefixes.forEach((folderRef) => {
					// console.log('folderRef: ' + folderRef.name);
					foNames.push(folderRef.name);
				});

				snap.items.forEach((itemRef) => {
					// console.log(itemRef.getDownloadURL.then((url)=> {return url}))
					if (itemRef.name != 'userTest') {
						fiNames.push(itemRef.name);
						itemRef.getMetadata().then((metadata) => {
							// console.log(FileSize.length);
							// console.log(FileSize);

							FileSize.push(metadata.size);
							// console.log(itemRef.name + ': ' + metadata.size);
						});
						itemRef.getDownloadURL().then((fileURL) => {
							// FileL.set(itemRef.name,fileURL);
							let obj = { filename: fileURL };
							FileL.push(obj);
							// FileLinks.push(fileURL);
						});
						// console.log(FileL)
						// console.log(FileL.size);
						// console.log(FileSize.length, FileLinks.size, FileNames.length);
					}
				});

				console.log('fofi', foNames, fiNames);
				setFolderNames(foNames);
				setFileNames(fiNames);
				// console.log(FileSize, FileSize.length);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// console.log(currFolder);
	console.log('Getting all folder and file details from ' + id);
	console.log('folders: ' + FolderNames + ' files: ' + FileNames);
	var listRef;
	const FolderList = [],
		FileList = [];
	const selectedFolders = [];
	for (let index = 0; index < FolderNames.length; index++){
		const ele = FolderNames[index];
		FolderList.push(
			<div
				className='col-xs-4 me-4'
				id={'folder' + { index }}
				style={{
					width: '100px',
					display: 'inline-block',
					float: 'none',
				}}
			>
				<span
					className='material-icons align-bottom'
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
							console.log(selectedFolders);
						}
						console.log('Folder Clicked');
					}}
					onDoubleClick={() => {
						window.location.href = `/medicalRecords?id=${id}&fn=${FolderNames[index]}`
					}}>
					folder
				</span>
				<h6
					className='align-text-top text-center text-dark font-'
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
			<div className='row mb-2'>
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
			// console.log(url);
			// <Viewer fileUrl={url} defaultScale={SpecialZoomLevel.PageFit} />;
		});
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

					// let tmp2 = FileLinks[j];
					// FileLinks[j] = FileLinks[i];
					// FileLinks[i] = tmp2;
				} else if (result == 2) {
					continue;
				} else {
					if (FileNames[i].length > FileNames[j].length) {
						let tmp = FileNames[j];
						FileNames[j] = FileNames[i];
						FileNames[i] = tmp;

						// let tmp2 = FileLinks[j];
						// FileLinks[j] = FileLinks[i];
						// FileLinks[i] = tmp2;
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
		// FileLinks.reverse();
	}
	function sort_size_ascending() {
		for (let i = 0; i < FileSize.length; i++) {
			for (let j = 0; j < FileSize.length; j++) {
				if (FileSize[i] > FileSize[j]) {
					let tmp = FileNames[j];
					FileNames[j] = FileNames[i];
					FileNames[i] = tmp;

					// let tmp2 = FileLinks[j];
					// FileLinks[j] = FileLinks[i];
					// FileLinks[i] = tmp2;

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
		// FileLinks.reverse();
		FileSize.reverse();
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
		window.location.reload();
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
			count++;
			console.log(count, FoldersSelected.length);
			if (count == FoldersSelected.length) {
				window.location.reload();
			}
		});
		console.log(folderName + ' deleted successfully!');
		// console.log(
		// 	'deleteting folder ' + folderName + ' from ' + `/${id}/${folderName}`
		// );
		// let deleteRef = firebase.storage().ref().child(`${id}/${folderName}`);
		// deleteRef
		// 	.delete()
		// 	.then(() => {
		// 		console.log(`deleted ${folderName} successfully`);
		// 	})
		// .catch((error) => {
		// 	console.log(error);
		// });
	}
	function ConfirmAddFolder() {
		setPurpose('AddFolder');
		setModalIsOpen(true);
	}
	function ChooseFiles() {
		setPurpose('UploadFiles');
		setModalIsOpen(true);
	}
	function ConfirmDelete(object, name) {
		if (object == 'Folder') {
			setPurpose('DeleteFolder');
		} else {
			setPurpose('DeleteFile');
		}
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
			navigate(0);
		});
	}
	function UploadFile(file) {
		// console.log('uploading: '+ file);
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
			// window.location.reload();
			navigate(0);
		});
		setModalIsOpen(false);
	}
	function closeModalHandler() {
		setModalIsOpen(false);
	}

	
	return (
		<>
			<div className='container mt-3 w-75'>
				<h2 className='fw-bold'>Save Your Medical Records</h2>
			</div>
			<div
				className='container mt-3 mb-5 w-75 websiteColor styleCarousel'
				style={{ height: '560px' }}>
				{!currFolder ? null : (
					<button
						className='btn btn-outline-light mt-3 ms-2 pt-2 pb-2 ps-3 pe-2 styleCarousel fw-bold'
						onClick={goBack}>
						<span className='material-icons align-middle'>arrow_back_ios</span>
					</button>
				)}
				<button
					className='btn btn-dark mt-3 ms-2 pt-2 pb-2 ps-3 pe-3 styleCarousel fw-bold'
					onClick={ChooseFiles}>
					<span className='material-icons me-2 align-middle'>file_upload</span>
					Upload
				</button>

				{!currFolder ? (
					<>
						<button
							className='btn btn-dark mt-3 ms-2 pt-2 pb-2 ps-3 pe-3 styleCarousel fw-bold'
							onClick={() => {
								// console.log("hiiiiiiiiii",selectedFolders);
								setFolderSelected(selectedFolders);
								ConfirmDelete('Folder');
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
				<button className='btn btn-light mt-3 ms-2 pt-2 pb-2 ps-3 pe-3 styleCarousel fw-bold'>
					SORT
					<span className='material-icons ms-2 align-middle'>sort</span>
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
										// window.location.reload();
								  }
								: UploadFile
						}
						task={purpose}
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
