 $(function(){

 		hieuung = $('.noidung').isotope({
 		 itemSelector: '.khoianh',
  		layoutMode: 'masonry'
	});
 		//load hết ảnh thì mới gọi đến isotope
 		hieuung.imagesLoaded().progress( function() {
 		 hieuung.isotope('layout');
});

 		//xử lý nút trong danh mục
 		$('.danhmuc a').click(function(){
 			//xử lý nút
 			$('.danhmuc a').removeClass('duocchon');
 			$(this).addClass('duocchon');
 			//xử lý lọc ảnh theo danh muc
 			tendanhmuc = $(this).attr('href');
 			// console.log(tendanhmuc);
 			hieuung.isotope({ filter: tendanhmuc })

 			return false; //ko load lại trang
 		})
})  
 