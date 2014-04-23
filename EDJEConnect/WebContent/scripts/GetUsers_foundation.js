/**
 * 
 */

function buildTable(){
	var output = "";
	output += "<tr><th>Edjer</th><th>Phone Number</th></tr>";
	
	$.each(mylist, function(i){
		
		if(i%2 == 0){
			//even
			output += "<tr class=\"even\">";
		}else{
			output += "<tr class=\"odd\">";	
		}
		
		output += "<td><a href=\"details.html\">" + mylist[i].firstName + " " + mylist[i].lastName + "</a></td>";
		output += "<td>" + mylist[i].phoneNumber + "</td>";
		output += "</tr>";
	});
	
	$("#employeeTable").append(output);
}

var mylist = [{"firstName":"Heather", "lastName":"Tooill", "phoneNumber":"614-270-0381"},
              {"firstName":"Erica", "lastName":"Krumlauf", "phoneNumber":"614-999-9999"},
              {"firstName":"Joelle", "lastName":"Brock", "phoneNumber":"614-888-8888"}];

