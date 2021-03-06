var tableData = data;
var tableBody = d3.select("#ufo-table-body");

function generateTableBody(data,table){
    data.forEach((sighting) => {
        var row = table.append("tr");
        Object.values(sighting).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        })
    })
}
generateTableBody(tableData,tableBody);

function clearTableBody() {
    d3.select("#ufo-table-body").selectAll("tr").remove();
    console.log("Cleared table contents.");
}

function filterSightings(){
    // get element by id= "datetime" and take value and use as filter
    var date = d3.select("#datetime").property("value");
    
    if (!date){
        // hard coded placeholder
        date = "1/11/2011";
    }
    // console.log(date);

    // how to clear out existing table data? *make own function and call here
    clearTableBody();

    // filter data 
    // var tableData = data;
    var filteredData = tableData.filter(sighting => {
        return sighting.datetime === date;
    });
    // console.log(filteredData);

    if (!filteredData.length){
        console.log("There are no sightings on that date.")
    }

    // pass new data into generateTableBody
    generateTableBody(filteredData,tableBody);
}
