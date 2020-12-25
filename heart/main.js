		$(document).snowfall('clear');
		$(document).snowfall();
		
		//设置音乐暂停和播放
		let panel = document.getElementsByClassName("contorl_panel")[0];
		panel.addEventListener("click", function(){
			let audio = document.getElementsByTagName("audio")[0];
			//获取音乐状态
			if(audio.paused){
				audio.play();
				document.getElementsByClassName("control_button")[0].style.backgroundImage = "url('images/pause.svg')";
			}else if(audio.played){
				audio.pause();
				document.getElementsByClassName("control_button")[0].style.backgroundImage = "url('images/play.svg')";
			}
		});
		
		//setInterval
		//let clock = setInterval("clock_func()",4000, 4000);
		
		//setTimeout
		let clock = setTimeout(clock_func, 4000);

		let image_indexes = [2,3,4,5,6,7,8,9,1];
		let index = 0;
		function clock_func() {
			let body_tag = document.getElementsByTagName("body")[0];
			for(i in image_indexes){
				index++;
				if (index % 10 == 0){
					console.log("url('nana" + image_indexes[i] + ".jpg')");
					body_tag.style.backgroundImage = "url('images/nana"+image_indexes[i]+".jpg')";
				}
			}
			//setTimeout
			clock = setTimeout(clock_func, 4000);
		};
		