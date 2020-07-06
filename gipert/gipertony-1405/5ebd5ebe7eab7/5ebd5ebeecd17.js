$(window).on('load', function(){

	let locationUrlString = window.location.toString();
	let url = new URL(locationUrlString);

	let data1 = url.searchParams.get("data1");
	let data2 = url.searchParams.get("data2");
	let data3 = url.searchParams.get("data3");
	let data4 = url.searchParams.get("data4");
	let data5 = url.searchParams.get("data5");

	// first form
    $('#url-data1').val(data1);
    $('#url-data2').val(data2);
    $('#url-data3').val(data3);
    $('#url-data4').val(data4);
    $('#url-data5').val(data5);


    // second form
    $('#url-data1-2').val(data1);
    $('#url-data2-2').val(data2);
    $('#url-data3-2').val(data3);
    $('#url-data4-2').val(data4);
    $('#url-data5-2').val(data5);


    // popup form
    $('#url-data1-3').val(data1);
    $('#url-data2-3').val(data2);
    $('#url-data3-3').val(data3);
    $('#url-data4-3').val(data4);
    $('#url-data5-3').val(data5);


});