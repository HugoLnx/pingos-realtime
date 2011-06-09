var canvas;

var client = new Faye.Client('/faye', {
  timeout: 120
});

client.subscribe("/pingar",function(posicao){
  canvas.pingar(posicao.x,posicao.y);
});


function init(){
	canvas = new Canvas('pingos');
	setInterval(atualizar,10);
}

function onCanvasClick(e){
  $.post("sinal-para-pingar",{posicao: {x: e.pageX, y: e.pageY}});
}

function atualizar(){
	canvas.atualizar();
}
