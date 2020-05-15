 $(function(){
 		//  class:  thucdonct
 		//phần click vào tieudect hiện món tương ứng
 		khoimonan = $('.nhieumon').isotope({
 			itemSelector: '.motmon',
 			layoutMode: 'masonry'
 		});
 		//load hết ảnh thì mới gọi đến isotope
 		khoimonan.imagesLoaded().progress( function() {
 		khoimonan.isotope('layout');
 		}); 
 		//phần click vào tieudect hiện món tương ứng ở dưới
 		$('.tieudect a').click(function() {
 			dulieu = $(this).data('monan');
 		// console.log(dulieu);
 			khoimonan.isotope({ filter: dulieu })
 			return false;
 	});

 	//phần thucdonct-tieudect   (click vào màu cam)
 	$('.tieudect a').click(function(event) {
 		$('.tieudect a').removeClass('active');
 		$(this).addClass('active');

 	});
 });
 
