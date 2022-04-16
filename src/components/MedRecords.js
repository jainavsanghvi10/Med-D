import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase';

export const MedRecords = () => {
	const { currentUser } = useAuth();
	const navigate = useNavigate();
	const [id, setId] = useState();
	const [currFolder, setCurrFolder] = useState(null);
	// const [FileNames, setFileNames] = useState([]);
	// const [FolderNames, setFolderNames] = useState([]);

	var FileNames = [];
	var FolderNames = [];

	// useEffect(() => {
	// 	// provideContent();
	// 	if (currFolder != null){
	// 		navigate(`/medicalRecords?id=${id}&fn=${currFolder}`);
  //   }
	// }, [currFolder]);
	useEffect(() => {
		if (!currentUser) {
			navigate('/signup');
		}
		const params = new URLSearchParams(window.location.search);
		const ID = params.get('id');
		setId(id);
    const FOLDER = params.get('fn');
    setCurrFolder(FOLDER);
		console.log(id);
		//eslint-disable-next-line
	}, []);


    // <div className='folder-wrap level-current scrolling' id='Folder_lvl1'></div>

    console.log(currFolder);
		console.log('Getting all folder and file details from ' + id);
		var listRef;
    
    if(currFolder != null){
     listRef = firebase.storage().ref().child(`-2072624641/UserFolder1`);
    }
    else{
      listRef = firebase.storage().ref().child(`-2072624641/`);
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
					// console.log('itemRef: ' + itemRef.name);
					FileNames.push(itemRef.name);
				});

        if(currFolder != null){
          const child = document.getElementById("Folder_lvl1");
          // child.parentElement.removeChild(child);
          console.log("childRemoved");
          const divx = document.createElement('div');
          divx.classList.add("folder-wrap").add("level-current").add("scrolling")
          divx.id = "Folder_lvl1";
          document.getElementById("stage").appendChild(divx);
          // <div className='folder-wrap level-current scrolling' id='Folder_lvl1'>
        }
        
        for (let index = 0; index < FolderNames.length; index++) {
          // console.log("fl")
          const ele = FolderNames[index];
          console.log(ele)
          const div1 = document.createElement('div');
          const icon = document.createElement('i');
          const folderName = document.createElement('p');
          
          div1.id = `folder_${index}`;
          div1.classList.add("tile");
          div1.classList.add("folder");
          div1.onclick = () => { setCurrFolder(FolderNames[index]) }
          
          icon.id = `icon_${index}`;
          icon.classList.add("mdi");
          icon.classList.add("mdi-folder");
    
          folderName.innerText = ele;
    
          div1.appendChild(icon).appendChild(folderName);
          document.getElementById("Folder_lvl1").appendChild(div1);
        }
    
        for (let index = 0; index < FileNames.length; index++) {
          const ele = FileNames[index];
          console.log(ele)
          const div1 = document.createElement('div');
          const icon = document.createElement('i');
          const fileName = document.createElement('p');
          
          div1.id = `folder_${index}`;
          div1.classList.add("tile");
          div1.classList.add("folder");
          div1.onclick = () => { setCurrFolder(ele) }
          
          icon.id = `icon_${index}`;
          icon.classList.add("mdi");
          icon.classList.add("mdi-file-document");
    
          fileName.innerText = ele;
    
          div1.appendChild(icon).appendChild(fileName);
          document.getElementById("Folder_lvl1").appendChild(div1);
        }
        console.log(FolderNames, FileNames);
        // provideContent(FileNames, FolderNames);
			})
			.catch((error) => {
        console.log(error);
			});

	// function provideContent(files,folders) {
	// 	console.log(files, folders)
	// 	for (let index = 0; index < folders.length; index++) {
	// 		// console.log("fl")
	// 		const ele = folders[index];
	// 		console.log(ele)
  //     const div1 = document.createElement('div');
  //     const icon = document.createElement('i');
  //     const folderName = document.createElement('h3');
      
  //     div1.id = `folder_${index}`;
  //     div1.classList.add("tile");
  //     div1.classList.add("folder");
  //     div1.onclick = () => { setCurrFolder(ele) }
      
  //     icon.id = `icon_${index}`;
  //     icon.classList.add("mdi");
  //     icon.classList.add("mdi-folder");

  //     folderName.innerText = ele;

  //     div1.appendChild(icon).appendChild(folderName);
  //     document.getElementById("Folder_lvl1").appendChild(div1);
	// 	}

	// 	for (let index = 0; index < files.length; index++) {
	// 		const ele = files[index];
  //     console.log(ele)
  //     const div1 = document.createElement('div');
  //     const icon = document.createElement('i');
  //     const fileName = document.createElement('h3');
      
  //     div1.id = `folder_${index}`;
  //     div1.classList.add("tile");
  //     div1.classList.add("folder");
  //     div1.onclick = () => { setCurrFolder(ele) }
      
  //     icon.id = `icon_${index}`;
  //     icon.classList.add("mdi");
  //     icon.classList.add("mdi-file-document");

  //     fileName.innerText = ele;

  //     div1.appendChild(icon).appendChild(fileName);
  //     document.getElementById("Folder_lvl1").appendChild(div1);
	// 	}
	// }

	return (
		<div className='App'>
			<button className='back'>
				<i className='mdi mdi-arrow-left'></i>
			</button>

			<div id="stage" className='stage'>
				<div className='folder-wrap level-current scrolling' id='Folder_lvl1'>
				</div>
			</div>
		</div>
	);
};
