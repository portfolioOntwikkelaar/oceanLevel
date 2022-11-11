let table;
let numRows, numCols;
let date = [], gsml = [];

function preload() {
  table = loadTable("assets/sea.csv", "csv","header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  numRows = table.getRowCount();
  numCols = table.getColumnCount();
  //print("rows: " + numRows + "cols: " + numCols)

  for (let r = 0; r < table.getRowCount(); r++) {
    date[r] = table.getString(r,0);
    gsml[r] = table.getNum(r,0);
    print(date[r] + " " + gsml[r])

  }

}

function draw() {
  background(240);
}
