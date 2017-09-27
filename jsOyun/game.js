var totalPoint = 0; //toplam puan 
var mainColor=1; //gizli renkten farklı olan diger 3 karenin rengi
var secretColor = 3; //gizli renk

var randomSquare =3;
var secretSquare =1; //gizli rengin bulundugu kare
var cells = new Array (4) ; 
var isGameStart = true

/* her dogru bilme +20 puan, her yanlıs bilme -10 puan */

function control(id) {

	if(id == secretSquare) {
	   
		totalPoint = totalPoint + 20 ;		
	}
	else {
		totalPoint = totalPoint - 10;
		
	}
	document.getElementById("point").innerHTML = totalPoint+ " Points";
	document.getElementById("cell"+id).style.backgroundColor= getColorCode(secretColor);
	shuffle();	
}

function startGame() {

    shuffle();
    isGameStart=false;
}

function changeColor(cellNo, color) {

	cells[cellNo]= color;
	document.getElementById("cell"+(cellNo+1)).style.backgroundColor= getColorCode(color);
}

function shuffle(){

   if(isGameStart==false){

	mainColor = Math.floor((Math.random() * 4) + 1);
	secretColor = Math.floor((Math.random() * 4) + 1);
	while(mainColor == secretColor) {

		mainColor = Math.floor((Math.random() * 4) + 1);
		secretColor = Math.floor((Math.random() * 4) + 1);
	  }
	  secretSquare = Math.floor((Math.random() * 4) + 1); //gizli rengin yeri
	  randomSquare = Math.floor((Math.random() * 4) + 1); //ekrana gizli renk ile ayni renkte gorulecek hucre
	  while(secretSquare == randomSquare) {

		secretSquare = Math.floor((Math.random() * 4) + 1);
		randomSquare = Math.floor((Math.random() * 4) + 1);
	  }
    }

	
	cells[secretSquare-1]=secretColor;
	cells[randomSquare-1]=secretColor;

	for (var i = 0 ; i<cells.length; i++) {
		
		if(i != (secretSquare-1) && i!=(randomSquare-1)) {
			cells[i] = mainColor;
		}
	}
	for (var i = 0; i<cells.length; i++) {
	
		if(i != (randomSquare-1)){
	    	document.getElementById("cell"+(i+1)).style.backgroundColor= getColorCode(mainColor);
	    }
	    else {
	    	document.getElementById("cell"+(i+1)).style.backgroundColor= getColorCode(secretColor);
	    }	
	}

}


function getColorCode(colorNo) {

	if(colorNo==1){
		return "E26464"; //kirmizi
	}
	else if (colorNo==2) { 
		return "66ADE3"; //mavi
	}
	else if(colorNo==3) {
		return "E2DE64"; //sari
	}
	else if(colorNo==4) {
		return "86E264"; //yesil
	}
}
