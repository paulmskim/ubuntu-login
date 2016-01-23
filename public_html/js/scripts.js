$(document).ready(function() {
	var userBtn = $(".user-btn");
	var passwdMsg = $(".passwd-msg");
	var numBeforeChecked, numAfterChecked;
	var users = {};
	var checkedBtn;

	userBtn.click(function() {
		checkedBtn = $(".user-btn:checked");

		numBeforeChecked = checkedBtn.parent().prevAll().size();
		numAfterChecked = checkedBtn.parent().nextAll().size();

		beforeCheckedMove(checkedBtn, numBeforeChecked, users);
		afterCheckedMove(checkedBtn, numAfterChecked, users);
		checkedMove(checkedBtn);		
	});

	$(".login-form").submit(function() {
		passwdMsg.css({visibility: "visible", opacity: "1"});
		setTimeout(function() {
			passwdMsg.fadeTo(150, 0, function() {
				$(this).css({visibility: "hidden"});
			});
		}, 4000);
	})

	function beforeCheckedMove(checkedBtn, numBeforeChecked, users) {
		users["beforeChecked0"] = checkedBtn;

		for (var i = 0; i < numBeforeChecked; i++) {
			users["beforeChecked" + (i + 1)] = users["beforeChecked" + i].parent().prev().children(".user-label")
			.removeClass(function(index, css) {
				return (css.match (/\buser-label-\S+/g) || []).join(' ');
			}).addClass("user-label-above-" + (i + 1));
		}
	}

	function afterCheckedMove(checkedBtn, numAfterChecked, users) {
		users["afterChecked0"] = checkedBtn;

		for (var i = 0; i < numAfterChecked; i++) {
			users["afterChecked" + (i + 1)] = users["afterChecked" + i].parent().next().children("label")
			.removeClass(function(index, css) {
				return (css.match (/\buser-label-\S+/g) || []).join(' ');
			}).addClass("user-label-below-" + (i + 1));
		}
	}

	function checkedMove(checkedBtn) {
		checkedBtn.siblings(".user-label").removeClass(function(index, css) {
				return (css.match (/\buser-label-\S+/g) || []).join(' ');
		}).addClass("user-label-0");
	}
});