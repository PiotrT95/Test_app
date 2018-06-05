var zabytek;
var inAppBrowserRef;
function changeFunc($value) {
  if($value == "1"){
    draw1();
	$("p").append("<a onclick='loadPage('http://wizard.uek.krakow.pl/~s188487/web/zabytki/zabytek.html');'>link</a>");
	//zabytek = "wawel";
	//localStorage.setItem("monument", zabytek);
  }else if ($value == "2"){
    draw2();
	zabytek = "smoczajama";
	//localStorage.setItem("monument", zabytek);
  }else if ($value == "3"){
    draw3();
  }else if ($value == "4"){
    draw4();
  }else if ($value == "5"){
    draw5();
  }else if ($value == "6"){
    draw6();
  }else if ($value == "7"){
    draw7();
  }else if ($value == "8"){
    draw8();
  }else if ($value == "9"){
    draw9();
  }else if ($value == "10"){
    draw10();
  }else if ($value == "11"){
    draw11();
  }else if ($value == "12"){
    draw12();
  }else if ($value == "13"){
    draw13();
  }else if ($value == "14"){
    draw14();
  }else if ($value == "15"){
    draw15();
  }else if ($value == "16"){
    draw16();
  }else if ($value == "17"){
    draw17();
  }else if ($value == "18"){
    draw18(); 
  }else if ($value == "19"){
    draw19();
  }else if ($value == "20"){
    draw20(); 
  }else if ($value == "21"){
    draw21();
  }  
}

function monumentInfo() {
//var mon = localStorage.getItem("monument");

  if(zabytek == "wawewl"){
    var target = "_blank";
    var options = "location=yes,hidden=yes";
    var url = "http://wizard.uek.krakow.pl/~s188487/web/zabytki/zabytek.html";
    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);
	
  }else if (zabytek == "smoczajama"){
    window.location.href = 'http://wizard.uek.krakow.pl/~s188487/web/zabytki/zabytek.html';
		//window.alert("dwa");
  }else if ($value == "3"){
    draw3();
  }else if ($value == "4"){
    draw4();
  }else if ($value == "5"){
    draw5();
  }else if ($value == "6"){
    draw6();
  }else if ($value == "7"){
    draw7();
  }else if ($value == "8"){
    draw8();
  }else if ($value == "9"){
    draw9();
  }else if ($value == "10"){
    draw10();
  }else if ($value == "11"){
    draw11();
  }else if ($value == "12"){
    draw12();
  }else if ($value == "13"){
    draw13();
  }else if ($value == "14"){
    draw14();
  }else if ($value == "15"){
    draw15();
  }else if ($value == "16"){
    draw16();
  }else if ($value == "17"){
    draw17();
  }else if ($value == "18"){
    draw18(); 
  }else if ($value == "19"){
    draw19();
  }else if ($value == "20"){
    draw20(); 
  }else if ($value == "21"){
    draw21();
  }  
}

function checkInformation($value){
var button = document.getElementById("building-information-button");

  if($value == "13" || $value == "14" || $value == "15" || $value == "16" ||  $value == "17" ||  $value == "18" ||  $value == "19" ||  $value == "20" ||  $value == "21"){
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

function draw() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/mapa.png";

}

function draw1() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/wawelloc.jpg";
}
function draw2() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/jamaloc.jpg";
}

function draw3() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/piotrpawelloc.jpg";
}

function draw4() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/rynekloc.jpg";
}

function draw5() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/sukieniceloc.jpg";
}

function draw6() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/wiezaloc.jpg";
}

function draw7() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/mariackiloc.jpg";
}

function draw8() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/bramaloc.jpg";
}

function draw9() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/barbakanloc.jpg";
}

function draw10() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/plantyloc.jpg";
}

function draw11() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/teatrloc.jpg";
}

function draw12() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/placloc.jpg";
}

function draw13() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/oknoloc.jpg";
}

function draw14() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/ujloc.jpg";
}

