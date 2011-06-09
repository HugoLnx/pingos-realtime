function Canvas(id){
	var pingos = [];
	var elem = document.getElementById(id);
	elem.onclick = onCanvasClick;
	var context = elem.getContext('2d');
	context.lineWidth = 4;
	
	this.pingar = function(x,y){
		pingos.push(new Pingo(x,y,this));
	}
	
	this.atualizar = function(){
		context.clearRect(0,0,elem.width,elem.height);
		for (var i=0;i < pingos.length;i+=1){
			pingo = pingos[i];
			pingo.se_desenhar_no(context);
		}
	}
}