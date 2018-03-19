$(function(){

			$(".btn-con li a").click(function(){
				$(this).addClass("cur").parent().siblings().children().removeClass("cur");
			$(".content-con .show").eq([$($(this).parent()).index()/2]).addClass("active").siblings().removeClass("active");
			});

		})


    





