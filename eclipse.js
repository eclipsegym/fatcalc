function calculate(){
	var age = parseInt(document.getElementById('age').value);
	var abs = parseInt(document.getElementById('abs').value);
	var thigh = parseInt(document.getElementById('thigh').value);
	var triceps = parseInt(document.getElementById('tricep').value);
	var suprailiac = parseInt(document.getElementById('suprailiac').value);
	var sum = abs+thigh+triceps+suprailiac;
	
	var BFP =(0.29288*sum)-(0.0005*sum*sum)+(0.15845*age)-5.76377;
	document.getElementById('result').innerHTML=BFP + " % ";
	console.log(result.value);
}

function count() {
		document.getElementById("startbutton").disabled = true;
		
		seconds = parseInt(document.getElementById('sec').value);
		//console.log(document.getElementById('sec'));
		minutes = parseInt(document.getElementById('mins').value);
		//console.log(document.getElementById('mins'));
		total = (minutes*60)+seconds;
		
		counter=setInterval(timer,1000);
		console.log("count counter:"+counter);
	}
	

	

function timer(){
  total=total-1;
  //console.log(total);
  if (total<0)
  {
     clearInterval(counter);
     console.log("play counter:"+counter);

     document.getElementById('alarm').play();
     document.getElementById("startbutton").disabled = false;
     return;
  }
  	var minDisplay = parseInt(total/60);
	var secDisplay = total%60;

 document.getElementById("display").innerHTML=minDisplay + " mins " + secDisplay + " secs "; // watch for spelling
}

function stopeverything(){	 
	document.getElementById("frm").reset();
	console.log("reset");
	clearInterval(counter);
	counter = 0;
	console.log("reset counter:"+counter);
	document.getElementById('sec').value = 0;
	document.getElementById('mins').value = 0;
	document.getElementById("startbutton").disabled = false;
	document.getElementById('alarm').pause();
	document.getElementById('alarm').currentTime = 0;
	document.getElementById("display").innerHTML="0" + " mins " + "0" + " secs ";
	return;
}

