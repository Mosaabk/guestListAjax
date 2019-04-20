$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
            "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    console.log(data);
    let guestList = "<li>" + data[0].first + " " +data[0].last + "</li>";
    $("#guestList > ol").append(guestList);
    
}