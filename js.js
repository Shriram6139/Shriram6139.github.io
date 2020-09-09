function imgModal(x){
    document.getElementById("myImgModal").style.display="block";
    if(x != 12 && x != 10){
    document.getElementById("img01").src= "./otherworks/" + x + ".jpg";
    }
    else{
        document.getElementById("img01").src= "./otherworks/" + x + ".JPG";
    }
}

function funcImgModalClose(){
    document.getElementById("myImgModal").style.display="none";
}