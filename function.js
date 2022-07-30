// dokumentum feltöltés a böngésző lokális tárhelyére

function uploadFiles() {
    var files = document.getElementById('file_upload').files;
    // ha a felhasználó 0 db dokumentummal nyomja meg a gombot
    if(files.length==0){
      alert("Kérem töltse fel a kívánt dokumentumokat!");
      return;
    }
    // ha a felhasználó dokeumentumfeltöltés után nyomja meg a gombot
    var filenames="";
    for(var i=0;i<files.length;i++){
      filenames+=files[i].name+"\n";
    }
    // alert a felhasználónak == lista a feltöltött dokumentumokról egy felugró ablakban
    alert("Selected file(s) :\n____________________\n"+filenames);
  }

//dokumentumkiolvasás a böngésző lokális tárhelyéből

function displayFiles() {
  var files = document.getElementById('file_upload').files;

  if(files.length==0){
    alert("Nincsenek dokumentumok a lokális tárhelyben");
    return;
  }

  for(var i=0;i<files;i++){
    displayFiles;
  }

}