$(function(){
	$('.flexslider').flexslider();
	$('.box').hover(function(){
		$(this).find('.iconfont').addClass('animated fadeInDown')
		$(this).find('p').addClass('animated fadeInUp')
	},
	function(){
		$(this).find('.iconfont').removeClass('animated fadeInDown')
		$(this).find('p').removeClass('animated fadeInUp')
	})
	
	
	//图片
	//pause  当音频/视频已暂停时
	//play   当音频/视频已开始或不不再暂停时
	$("#musicPlayer").on("play",function(){
		//转动
		$("#musicImg").css("animation-play-state","running")
	})
	$("#musicPlayer").on("pause",function(){
		//停止
		$("#musicImg").css("animation-play-state","paused")
		
	})
	
	//切换歌曲
	$(".glyphicon-play-circle").on("click",function(){
		//	console.log($(this)[0])
		//获取音乐和图片
		var music=$(this).data("music")
		var img=$(this).data("img")
		//	console.log(music,img)
		
		//换音乐
		$("#musicPlayer").prop("src",music);
		//换图片
		$("#musicImg").prop("src",img);
		
		//图片转动
		$("#musicImg").css("animation-play-state","running");
		
		//自动播放音乐
		$("#musicPlayer")[0].play();
		//		play()是dome个方法
	})
})
