/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Braxton Lee
 */

/** namespace. */
var rhit = rhit || {};

rhit.counter = 0;

rhit.main = function () {
	console.log("Ready");

	$("#favNumberDiv button").click( (event) => {
		const dataAmount = $(event.target).data("amount");
		const dIsReset = !!$(event.target).data("isReset"); // !! makes boolean
		rhit.updateCounter(dataAmount, dIsReset);
	});

	$("#favColorDiv button").click( (event) => {
		$("#favoriteColor").css("background-color", $(event.target).css("background-color"));
		$("#favoriteColor").html($(event.target).text());
	});
};

rhit.updateCounter = function (amount, isReset) {
	if (isReset) {
		rhit.counter = 0;
	} else {
		rhit.counter += amount;
	}
	$("#counter").html(`${rhit.counter}`);
};

rhit.main();