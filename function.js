function uploadFiles() {
    var files = document.getElementById('file_upload').files;
    if(files.length==0){
      alert("Kérem töltse fel a kívánt dokumentumokat!");
      return;
    }
    var filenames="";
    for(var i=0;i<files.length;i++){
      filenames+=files[i].name+"\n";
    }
    alert("Selected file(s) :\n____________________\n"+filenames);
  }