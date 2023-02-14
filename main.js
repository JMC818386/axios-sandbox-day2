//Creates an empty array to be used later
let result = [];
//Variable 
let nextRow = 0;

let url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
/* console.log(dataTable); */

axios.get(url)
  .then(function (response) {
/* console.log(response); */
/*  console.log('Data USA', response.data.data) */
/*  console.log('First Row', response.data.data[0])
    console.log('Second Row', response.data.data[1])
    console.log('Third Row', response.data.data[2])
    console.log('Fourth Row', response.data.data[3]) */

    //Variable firstRow accesses API at index 0
    /* let firstRow = response.data.data[0]; */
    
/*  secondRow = response.data.data[1];
    thirdRow = response.data.data[2];
    fourthRow = response.data.data[3]; */

    //Runs function populateTable, accessing data from API
   /*  populateTable(response.data.data); */
   result = response.data.data;
  })

  //If url doesn't work log error to console
  .catch(function (error) {
    console.log(error);
  })

  .then(function () {
    // always executed
  });

  //Function populates dataTable rows and cells with API data
  function populateTable() {
    let row = result[nextRow]
        console.log(row);
        //Variable named newRow creates a new row
        let newRow = document.createElement('tr');
        //Variable cellOne creates first new cell in new row
        let cellOne = document.createElement('td');
        //API Nation data is passed into new cell
        cellOne.innerText = `${row.Nation}`;

        //Variable cellTwo creates second new cell in new row
        let cellTwo = document.createElement('td');
        //API ID Year data is passed into second new cell
        cellTwo.innerText = `${row['ID Year']}`;

        //Variable cellThree creates third new cell in new row
        let cellThree = document.createElement('td');
        //API Population data is passed into third new cell
        cellThree.innerText = `${row.Population}`;

        //Append new cells to newRow
        newRow.appendChild(cellOne);
        newRow.appendChild(cellTwo);
        newRow.appendChild(cellThree);

        //Append newRow to dataTable
        document.getElementById('dataTable').appendChild(newRow);
      nextRow++
  }
//Figure out what to do with the data
//Create button that loads 1 row at a time
//Create a function that does something to the data

document.getElementById("loadRow").addEventListener("click", populateTable);
