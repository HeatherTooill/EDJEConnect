/**
 * 
 */

function buildTable(){
jQuery("#employeeTable").jqGrid({
	datatype: "local",
	height: 250,
   	colNames:['Employee', 'Phone Number'],
   	colModel:[
   		{name:'name',index:'name', width:100, formatter:getName},		
   		{name:'phoneNumber',index:'phoneNumber', width:150, sortable:false}		
   	],
   	multiselect: true,
   	caption: "Employee Directory"
});

function getName(cellvalue, options, rowObject){
	return rowObject.firstName + " " + rowObject.lastName;
}

var mylist = [
              {firstName:"Heather", lastName:"Tooill", phoneNumber:"614-270-0381"},
              {firstName:"Erica", lastName:"Krumlauf", phoneNumber:"614-999-9999"},
              {firstName:"Joelle", lastName:"Brock", phoneNumber:"614-888-8888"}
              ];

var mydata = [
		{id:"1",invdate:"2007-10-01",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
		{id:"2",invdate:"2007-10-02",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
		{id:"3",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
		{id:"4",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
		{id:"5",invdate:"2007-10-05",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
		{id:"6",invdate:"2007-09-06",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
		{id:"7",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
		{id:"8",invdate:"2007-10-03",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
		{id:"9",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"}
		];

for(var i=0;i<=mylist.length;i++)
	jQuery("#employeeTable").jqGrid('addRowData',i+1,mylist[i]);
}