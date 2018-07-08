/*burgermenu*/
$(document).ready(function() {

	$('body').scrollspy({ target: '#bs-example-navbar-collapse-1' });

	$('form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Сообщение успешно отправлено");
			$("form").trigger("reset");
		});
		return false;
	});

});