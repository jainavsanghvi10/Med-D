import React from 'react'
import $ from "jquery";

export const MedRecords = () => {
  var FileNames = ['a', 'b', 'c', 'd'];
  var FolderNames = ['w', 'x', 'y', 'z'];

  const FileList = [];
  const FolderList = [];

  function provideContent() {
    for (let index = 0; index < FolderNames.length; index++) {
      const ele = FolderNames[index];
      FolderList.push(
        <div className="tile folder">
          <i className="mdi mdi-folder"></i>
          <h3>{ele}</h3>
          <p>Its a Folder</p>
          {/* <i className="mdi mdi-delete-circle"></i> */}
        </div>
      )
    }

    for (let index = 0; index < FileNames.length; index++) {
      const ele = FileNames[index];
      FileList.push(
        <div className="tile form">
          <i className="mdi mdi-file-document"></i>
          <h3>{ele}</h3>
          <p>Its a File</p>
        </div>
      )
    }
    // $(document).
    $(document).ready(function () {
      // Folder on click
      $(".folder").on("click", function () {
        console.log("Drill down");
        $(".level-up").removeClass("level-up");
        $(".level-current").addClass("level-up");
        $(".level-current").removeClass("level-current");
        $(".level-down").addClass("level-current");
        $(".level-down").removeClass("level-down").next().addClass("level-down");
      });

      // Back on Click
      $(".back").on("click", function () {
        if ($(".level-current").is(":first-child")) {
          console.log("Current is top");
        } else {
          console.log("Drill back up");
          $(".level-down").removeClass("level-down");
          $(".level-current").addClass("level-down");
          $(".level-current").removeClass("level-current");
          $(".level-up").addClass("level-current");
          $(".level-up").removeClass("level-up").prev().addClass("level-up");
        }
      });

      //Create folder on click
      $(".create-folder").on("click", function () {
          FolderNames.push('NewFolder');
          FolderList.push(
            <div className="tile folder">
              <i className="mdi mdi-folder"></i>
              <h3>New Folder</h3>
              <p>Its a Folder, Bitch!</p>
            </div>
          )
          console.log(FolderNames);
      });
    });
  }

  // function CreateFile() {
  // }
  // const aFile = (
  //   <div className="tile form">
  //     <i className="mdi mdi-file-document"></i>
  //     <h3>{myContent()}</h3>
  //     <p>Something something</p>
  //   </div>
  // )


  // function CreateFolder() {

  // }
  // const aFolder = (
  //   <div className="tile folder">
  //     <i className="mdi mdi-folder"></i>
  //     <h3>Folder name</h3>
  //     <p>Something something</p>
  //   </div>
  // )



  return (
    <div className="App">
      {/* <Helmet>
        <script src=
          "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          type="text/javascript" />
      </Helmet> */}


      <button className="back">
        <i className="mdi mdi-arrow-left"></i>
      </button>

      <div className="stage">

        <div className="folder-wrap level-current scrolling" id='Folder_lvl1'>

          {/* <div className="tile folder">
            <i className="mdi mdi-folder"></i>
            <h3>Folder name</h3>
            <p>Something something</p>
          </div>

          <div className="tile form">
            <i className="mdi mdi-file-document"></i>
            <h3>Form name</h3>
            <p>Something something</p>
          </div> */}

          <div className="tile create-folder" id="create-new-folder">
            <i className="mdi mdi-folder-plus"></i>
            <h5>Create New Folder</h5>
            {/* <p>Something something</p> */}
          </div>

          {provideContent()}
          {FolderList}
          {FileList}
        </div>


        <div className="folder-wrap level-down">

          <div className="tile folder">
            <i className="mdi mdi-folder"></i>
            <h3>Folder name</h3>
            <p>Something something</p>
          </div>

          <div className="tile folder">
            <i className="mdi mdi-folder"></i>
            <h3>Folder name</h3>
            <p>Something something</p>
          </div>

          <div className="tile folder">
            <i className="mdi mdi-folder"></i>
            <h3>Folder name</h3>
            <p>Something something</p>
          </div>

          <div className="tile form">
            <i className="mdi mdi-file-document"></i>
            <h3>Form name</h3>
            <p>Something something</p>
          </div>

          <div className="tile form">
            <i className="mdi mdi-file-document"></i>
            <h3>Form name</h3>
            <p>Something something</p>
          </div>

          <div className="tile form">
            <i className="mdi mdi-file-document"></i>
            <h3>Form name</h3>
            <p>Something something</p>
          </div>

        </div>
        <div className="folder-wrap">

          <div className="tile folder">
            <i className="mdi mdi-folder"></i>
            <h3>Folder name</h3>
            <p>Something something</p>
          </div>

          <div className="tile folder">
            <i className="mdi mdi-folder"></i>
            <h3>Folder name</h3>
            <p>Something something</p>
          </div>

          <div className="tile form">
            <i className="mdi mdi-file-document"></i>
            <h3>Form name</h3>
            <p>Something something</p>
          </div>

          <div className="tile form">
            <i className="mdi mdi-file-document"></i>
            <h3>Form name</h3>
            <p>Something something</p>
          </div>

        </div>
        <div className="folder-wrap">

          <div className="tile folder">
            <i className="mdi mdi-folder"></i>
            <h3>Folder name</h3>
            <p>Something something</p>
          </div>

          <div className="tile folder">
            <i className="mdi mdi-folder"></i>
            <h3>Folder name</h3>
            <p>Something something</p>
          </div>

          <div className="tile folder">
            <i className="mdi mdi-folder"></i>
            <h3>Folder name</h3>
            <p>Something something</p>
          </div>

          <div className="tile form">
            <i className="mdi mdi-file-document"></i>
            <h3>Form name</h3>
            <p>Something something</p>
          </div>

          <div className="tile form">
            <i className="mdi mdi-file-document"></i>
            <h3>Form name</h3>
            <p>Something something</p>
          </div>

          <div className="tile form">
            <i className="mdi mdi-file-document"></i>
            <h3>Form name</h3>
            <p>Something something</p>
          </div>

        </div>
        <div className="folder-wrap">

          <div className="tile folder">
            <i className="mdi mdi-folder"></i>
            <h3>Folder name</h3>
            <p>Something something</p>
          </div>

          <div className="tile form">
            <i className="mdi mdi-file-document"></i>
            <h3>Form name</h3>
            <p>Something something</p>
          </div>

          <div className="tile form">
            <i className="mdi mdi-file-document"></i>
            <h3>Form name</h3>
            <p>Something something</p>
          </div>

        </div>
      </div>
    </div>
  );
}
