(function() {
	function addToCartHanlder() {
		const btns = $('[data-add-to-cart]');

		btns.on('click', function(e){
			e.preventDefault();
			
			$.ajax({
				url: './fakedata/cartResponse.json',
				type: 'GET',
				dataType: 'html',
				success: (res) => {
					const jsonParsed = $.parseJSON(res);
					if (jsonParsed.success) {
						$(this)
							.text('Добавлено')
							.removeClass('btn-primary')
							.addClass('btn-success');
							
						$('[data-cart-count]').text(jsonParsed.count);
					}
				}
			});
		});
	};

	function main() {
		addToCartHanlder();
	};

	main();
}());
