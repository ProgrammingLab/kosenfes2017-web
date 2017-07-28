$(function(){
	for (var i = 0; i < 3 ; i++) {
		/*for (var j = 0; j < 5 * 2; j++) {
			$('<div class="imgContainer"><img class="slideShowImg" src="./img/高専祭_170727_'+("0000"+(j%5 + 1 + 5*i)).slice(-4)+'.jpg"></img></div>').appendTo('#line'+i);
		}*/
		for(var j = 0; j < 7 * 2; j++) {
			$('<div class="imgContainer"><img class="slideShowImg" src="./img/高専祭_170727_'+("0000"+(j%7 +1)).slice(-4)+'.jpg"></img></div>').appendTo('#line'+i);
		}
	}
});