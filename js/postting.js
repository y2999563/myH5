/**头部js**/

	$(".btn_gw").hover(function(){
			$(".cart").stop().slideDown(300,function(){
				$(this).css("display","black")
			})
		},function(){
			$(".cart").stop().slideUp(300,function(){
				$(this).css("display","none")
			})
		})


/****搜索框*****/

	$(".search-text").focus(function(){
			$(".search-text,.btn").css("border","1px solid #ff6700")
				$(".search-text").css("border-right","none")
		})
		$(".search-text").blur(function(){
			$(".search-text,.btn").css("border","1px solid silver")
				$(".search-text").css("border-right","none")
		})

		$(".head_bottom1").hover(function(){
			$(".two_nav ").stop().slideDown(200)
		},function(){
			$(".two_nav ").stop().slideUp(200)
		})
		$(".two_nav").hover(function(){
			$(this).stop().slideDown()
		},function(){
			$(this).stop().slideUp()
		})
	
/*****************导航栏*****************/

		/*var $nav =  $("")*/
		var $one = $(".head_txt .head_nav .head_bottom");
		var $nav = $(".two_nav");
		var $inside = $(".two_nav .nav_inside ul");

		$one.hover(function(){
			var index=$(this).index();
			$nav.stop(true).slideDown(200);
			$inside.eq(index).stop(true).show().siblings().hide();
		},function(){
			$nav.stop(true).slideUp(200);
			
		})
		
		$nav.hover(function(){
			$(this).stop().slideDown();
		},function(){
			$(this).stop().slideUp();
		})

/***********************banner****************************/

		var index=0;
		var $page = $(".s_c_r_page li");
		
		//var $active = $(".s_c_r_page .s_c_r_p_bg");
		$(function(){
		$(".s_c_r_img li").eq(0).show().siblings().hide();
		$page.click(function(){
				index = $(this).index();
				//console.log(index)
				tabShow();
			})
		})
		
		 $(".s_c_r_left_prev").click(function(){
			index --
			if(index<0){
				index = 5;
			}
			tabShow();
		})
		 $(".s_c_r_right_next").click(function(){
			index ++
			if(index>5){
				index = 0;
			}
			tabShow();
		})
		function tabShow(){
			$page.eq(index).addClass("s_c_r_p_bg").siblings().removeClass("s_c_r_p_bg")
			$(".s_c_r_img li").eq(index).fadeIn().siblings().fadeOut();
		}
		function strat(){
			index ++
			if(index>5){
				index = 0;
			}
			tabShow();
		}
		t = setInterval("strat()",2000)
	
		$(".s_c_right").hover(function(){
			clearInterval(t)
		},function(){
			t = setInterval("strat()",2000)
		})

		/*************banner  end****************/
	var	$btn = $(".site_body .s_container .s_c_left .s_c_l_txt li")
	var $menu = $(".site_menu")
		$btn.hover(function(){
			$menu.stop(true).show()
		},function(){
			$menu.stop(true).hide()
		})
		$menu.hover(function(){
			$(this).stop(true).show()
		},function(){
			$(this).stop(true).hide()
		})


	/************按钮***************/
	$disLeft = $(".site_headline .s_h_title .s_h_t_active .control_left")
	$disRight = $(".site_headline .s_h_title .s_h_t_active .control_right")
	$box = $(".box-bd .b_container ")
	$box_ul =$(".box-bd .b_container  ul")
	//$pointer = ${".site_headline .s_h_title .s_h_t_active  .control_disabl"}

	$disLeft.click(function(){
		$(this).addClass("control_disabled").siblings().removeClass("control_disabled");
		$(".b_c_l_active").css({"margin-left":"0px","transition":"all .5s"});
	})
	$disRight.click(function(){
		$(this).addClass("control_disabled").siblings().removeClass("control_disabled");
		$(".b_c_l_active").css({"margin-left":"-1263px","transition":"all .5s"});
	})
	//if(parseInt($(".b_c_l_active").css("marginLeft")==0)){
	//	$disLeft.addClass("control_disabled").siblings().removeClass("control_disabled");
	//}else{
	//	$disRight.addClass("control_disabled").siblings().removeClass("control_disabled");
	//}
	// $dis.click(function(){
	// 	$(this).addClass(".control_disabl").siblings().removeClass(".control_disabl")
	// })

	//  $(".control_right").click(function(){
	// 	index2 = $(".box-bd .b_container .b_c_length ul").index();
	// 	console.log(index2);
		
	// })
	

	/****************按钮end*******************/

	

		// function time(){
		// 	$(".b_c_l_active")
		// 			.animate({"margin-left":"0px"},3000)
		// 			.animate({"margin-left":"-1263px"},800)
		// 			.animate({"margin-left":"-1263px"},3000)
		// 			.animate({"margin-left":"0px"},800)
		// }
		// var t2 = setInterval("time()",2000)
	
		// $(".s_h_t_active").hover(function(){
		// 	clearInterval(t2)
		// },function(){
		// 	t2 = setInterval("time()",2000);
		// })
	
	/**********************************/

	/************ S = 内容主题 ****************/

		//1.获取事件源和相关元素
		var container = document.getElementsByClassName("h_container");
		for(var i=0;i<container.length;i++){
			fn(container[i])
		}
		function fn(ele){
		var more = ele.getElementsByClassName("more")[0];
		console.log(more)
		var liArr = more.getElementsByTagName("li");
		var hRight = ele.getElementsByClassName("h_c_r_right")[0];
		var ulArr = hRight.getElementsByTagName("ul");
		for(var i=0;i<liArr.length;i++){
			liArr[i].setAttribute("index",i)
		//2.绑定事件
			liArr[i].onmouseover = function (){
		//3.编写驱动事件程序
				for(var j=0;j<liArr.length;j++){
					liArr[j].removeAttribute("class");
					ulArr[j].removeAttribute("class");
				}
				this.setAttribute("class","tab-active");
				ulArr[this.getAttribute("index")].setAttribute("class","h_c_r_r_one h_c_r_r_content h_c_r_r_show")
			}
		}
		}
	/************ E = 内容主题 ****************/
