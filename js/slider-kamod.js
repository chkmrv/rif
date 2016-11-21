
var example1 = new Mg({
	reference:"example1",
	click:{
		activated:[1],
		firstToSteps:false, lastToSteps:false,
		prevSteps:1, nextSteps:1,
		interactive:true,
		cycles:true,
		scrollPower: 0.2,
		maxActivated:1,
		multiLess:2, multiPlus:2
	}
});
var cycle = 1;

function ex1Base(){
	var me = example1.click;
	$("#"+me.reference+"-item-"+me.deactivated).removeClass("active");
	$("#"+me.reference+"-item-"+me.activated).addClass("active");
	$('[id^="'+me.reference+'-item-"]').css("display","none");

	goEx1(me.multiActivated, me.reference);
}

example1.click.onEvent =function(fake){
	ex1Base();
}

example1.click.nextClick =function(fake){
	ex1Base();
	if (!fake && example2)
	 	example2.next('click', false, false, false, 1);
}

example1.click.prevClick =function(fake){
	ex1Base();
	if (!fake && example2)
	 	example2.prev('click', false, false, false, 1);
}

example1.init();
example1.click.nextClick(1);

function goEx1(arr1,name1){
	
	for(var i=0;i<arr1.length;i++){
		var depth = Math.abs(example1.mapDistanceReverse(this.multiPlus, i, arr1.length, 0)); // Parameters: center, num, max, min
		var path = $("#"+name1+"-item-"+arr1[i]);
		path.css("position","absolute").css("z-index",depth);
		path.css("display","inline-block").css("width",(250)+"px");
		var Act;
		if($("#"+name1+"-item-"+arr1[i]).hasClass("active")){
			Act = i;
		}
		if(i>(Act-1)){path.css("width",(700)+"px")} else{path.css("display","none")} 
		if(i>(Act)){path.css("left",(i*320)+"px")}else{path.css("left",(i*1)+"px");} 
		if(i == Act){path.css("width",(700)+"px").css('display','inline-block')};
	}
};


var example2 = new Mg({
	reference:"example2",
	click:{
		activated:[1],
		firstToSteps:false, lastToSteps:false,
		prevSteps:1, nextSteps:1,
		interactive:true,
		cycles:true,
		scrollPower: 0.2,
		maxActivated:1,
		multiLess:2, multiPlus:2
	}
});

function ex2Base(){
	var me = example2.click;
	$("#"+me.reference+"-item-"+me.deactivated).removeClass("active");
	$("#"+me.reference+"-item-"+me.activated).addClass("active");
	$('[id^="'+me.reference+'-item-"]').css("display","none");
	goEx2(me.multiActivated, me.reference);

}

example2.click.onEvent =function(fake){
	ex2Base();
}

example2.click.nextClick =function(fake){
	ex2Base();
	if (!fake && example1)
	 	example1.next('click', false, false, false, 1);
}

example2.click.prevClick =function(fake){
	ex2Base();
	if (!fake && example1)
	 	example1.prev('click', false, false, false, 1);
}

example2.init();
example2.click.prevClick(1);

function goEx2(arr,name){
	for(var i=0;i<arr.length;i++){
		var depth = Math.abs(example2.mapDistanceReverse(this.multiPlus, i, arr.length, 0)); // Parameters: center, num, max, min
		var path = $("#"+name+"-item-"+arr[i]);
		
		path.css("position","relative").css("z-index",depth);
		path.css("display","inline-block").css("position","absolute").css("width",(250)+"px");
		var Act;
		if($("#"+name+"-item-"+arr[i]).hasClass("active")){
			Act = i;
		}
		if(i>(Act-1)){
			path.css("left",(i*150)+"px").css("width",(250)+"px").css("position","relative")
		}else{
			path.css("left",(i*250)-500+"px");
		} 
		if(i == Act){
			path.css("width",(700)+"px").css("position","relative")
		};
		if(i>(Act)){
			path.css("display","none")
		} 

	}

};