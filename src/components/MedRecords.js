import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase';

export const MedRecords = () => {
	const { currentUser } = useAuth();
	const navigate = useNavigate();
	const [id, setId] = useState();
	const [currFolder, setCurrFolder] = useState("main");
	// const [FileNames, setFileNames] = useState([]);
	// const [FolderNames, setFolderNames] = useState([]);
	var FileNames = [];
	var FolderNames = [];

	useEffect(() => {
		FolderNames.push(currFolder);
		// provideContent();
    if(currFolder != "main")
		  navigate(`/medicalRecords?id=${id}&fn=${currFolder}`);
	}, [currFolder]);
	useEffect(() => {
		if (!currentUser) {
			navigate('/signup');
		}
		const params = new URLSearchParams(window.location.search);
		const id = params.get('id');
		setId(id);
		//eslint-disable-next-line
	}, []);

	for (let i = 1; i < Math.random() * 6 + 2; i++)
		FolderNames.push('folder' + i);

	const FileList = [];
	const FolderList = [];

	// const getItems = () => {
		console.log('Getting all folder and file details:');
		const listRef = firebase.storage().ref().child(`${id}}/`);
    // const listRef = ref(storage, '');
		listRef.listAll()
			.then((snap) => {
				snap.prefixes.forEach((folderRef) => {
					console.log('folderRef: ' + folderRef.name);
					FolderNames.push(folderRef.name);
				});
				snap.items.forEach((itemRef) => {
					console.log('itemRef: ' + itemRef.name);
					// let temp = FileNames;
					FileNames.push(itemRef.name);
					// setFileNames(temp);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	// };

  // getItems();
	function provideContent() {
    for (let index = 0; index < FolderNames.length; index++) {
			const ele = FolderNames[index];
			FolderList.push(
				<div
					id={'folder' + index}
					className='tile folder'
					onClick={() => {
						setCurrFolder(ele);
					}}>
					<i className='mdi mdi-folder'></i>
					<h3>{ele}</h3>
					<p>Its a Folder</p>
					{/* <i className="mdi mdi-delete-circle"></i> */}
				</div>
			);
		}

		for (let index = 0; index < FileNames.length; index++) {
			const ele = FileNames[index];
			FileList.push(
				<div id={'file' + index} className='tile form'>
					<i className='mdi mdi-file-document'></i>
					<h3>{ele}</h3>
					<p>Its a File</p>
				</div>
			);
		}

		// $(document).ready(function () {
		//   // Folder on click
		//   $(".folder").on("click", function () {
		//     console.log("Drill down");
		//     $(".level-up").removeClass("level-up");
		//     $(".level-current").addClass("level-up");
		//     $(".level-current").removeClass("level-current");
		//     $(".level-down").addClass("level-current");
		//     $(".level-down").removeClass("level-down").next().addClass("level-down");
		//   });

		// Back on Click
		//   $(".back").on("click", function () {
		//     if ($(".level-current").is(":first-child")) {
		//       console.log("Current is top");
		//     } else {
		//       console.log("Drill back up");
		//       $(".level-down").removeClass("level-down");
		//       $(".level-current").addClass("level-down");
		//       $(".level-current").removeClass("level-current");
		//       $(".level-up").addClass("level-current");
		//       $(".level-up").removeClass("level-up").prev().addClass("level-up");
		//     }
		//   });
		// });
	}
	provideContent();

	return (
		<div className='App'>
			<button className='back'>
				<i className='mdi mdi-arrow-left'></i>
			</button>

			<div className='stage'>
				<div className='folder-wrap level-current scrolling' id='Folder_lvl1'>
					{FolderList}
					{FileList}
				</div>

				<div className='folder-wrap level-down'>
					<div className='tile folder'>
						<i className='mdi mdi-folder'></i>
						<h3>Folder name</h3>
						<p>Something something</p>
					</div>

					<div className='tile folder'>
						<i className='mdi mdi-folder'></i>
						<h3>Folder name</h3>
						<p>Something something</p>
					</div>

					<div className='tile folder'>
						<i className='mdi mdi-folder'></i>
						<h3>Folder name</h3>
						<p>Something something</p>
					</div>

					<div className='tile form'>
						<i className='mdi mdi-file-document'></i>
						<h3>Form name</h3>
						<p>Something something</p>
					</div>

					<div className='tile form'>
						<i className='mdi mdi-file-document'></i>
						<h3>Form name</h3>
						<p>Something something</p>
					</div>

					<div className='tile form'>
						<i className='mdi mdi-file-document'></i>
						<h3>Form name</h3>
						<p>Something something</p>
					</div>
				</div>
				<div className='folder-wrap'>
					<div className='tile folder'>
						<i className='mdi mdi-folder'></i>
						<h3>Folder name</h3>
						<p>Something something</p>
					</div>

					<div className='tile folder'>
						<i className='mdi mdi-folder'></i>
						<h3>Folder name</h3>
						<p>Something something</p>
					</div>

					<div className='tile form'>
						<i className='mdi mdi-file-document'></i>
						<h3>Form name</h3>
						<p>Something something</p>
					</div>

					<div className='tile form'>
						<i className='mdi mdi-file-document'></i>
						<h3>Form name</h3>
						<p>Something something</p>
					</div>
				</div>
				<div className='folder-wrap'>
					<div className='tile folder'>
						<i className='mdi mdi-folder'></i>
						<h3>Folder name</h3>
						<p>Something something</p>
					</div>

					<div className='tile folder'>
						<i className='mdi mdi-folder'></i>
						<h3>Folder name</h3>
						<p>Something something</p>
					</div>

					<div className='tile folder'>
						<i className='mdi mdi-folder'></i>
						<h3>Folder name</h3>
						<p>Something something</p>
					</div>

					<div className='tile form'>
						<i className='mdi mdi-file-document'></i>
						<h3>Form name</h3>
						<p>Something something</p>
					</div>

					<div className='tile form'>
						<i className='mdi mdi-file-document'></i>
						<h3>Form name</h3>
						<p>Something something</p>
					</div>

					<div className='tile form'>
						<i className='mdi mdi-file-document'></i>
						<h3>Form name</h3>
						<p>Something something</p>
					</div>
				</div>
				<div className='folder-wrap'>
					<div className='tile folder'>
						<i className='mdi mdi-folder'></i>
						<h3>Folder name</h3>
						<p>Something something</p>
					</div>

					<div className='tile form'>
						<i className='mdi mdi-file-document'></i>
						<h3>Form name</h3>
						<p>Something something</p>
					</div>

					<div className='tile form'>
						<i className='mdi mdi-file-document'></i>
						<h3>Form name</h3>
						<p>Something something</p>
					</div>
				</div>
			</div>
		</div>
	);
};
