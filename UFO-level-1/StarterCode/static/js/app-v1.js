// og version

var tableData = data;
var tableBody = document.querySelector("#ufo-table-body");

function generateTableBody(data,table){
    data.forEach((sighting) => {
        let row = table.insertRow();
        Object.values(sighting).forEach((value) => {
            let th = document.createElement("th");
            let text = document.createTextNode(value);
            th.appendChild(text);
            row.appendChild(th);
        })
    })
}
generateTableBody(tableData,tableBody);

function clearTableBody(table) {
    table.remove();
    // PROBLEM: this deletes #ufo-table-body from HTML, preventing from generating new table
    console.log("Cleared table contents.");
}

function filterSightings(){
    // get element by id= "datetime" and take value and use as filter
    var date = d3.select("#datetime").property("value");
    
    if (!date){
        // hard coded placeholder
        date = "1/11/2011";
    }
    console.log(date);

    // how to clear out existing table data? *make own function and call here
    clearTableBody(tableBody);

    // filter data 
    // var tableData = data;
    var filteredData = tableData.filter(sighting => {
        return sighting.datetime === date;
    });
    console.log(filteredData);

    if (!filteredData.length){
        console.log("There are no sightings on that date.")
    }

    // pass new data into generateTableBody
    generateTableBody(filteredData,tableBody);
}
