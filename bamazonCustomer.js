var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  //console.log("connected as id " + connection.threadId + "\n");
  displayInventory()
});




function displayInventory() {

  queryStr = 'SELECT * FROM products';

  connection.query(queryStr, function (err, data) {
    if (err) throw err;

    console.log('Existing Inventory: ');
    console.log('-------------------\n');

    var showProd = '';
    for (var i = 0; i < data.length; i++) {
      showProd = '';
      showProd += 'Item ID: ' + data[i].item_id + '  //  ';
      showProd += 'Product Name: ' + data[i].product_name + '  //  ';
      showProd += 'Department: ' + data[i].department_name + '  //  ';
      showProd += 'Price: $' + data[i].price + '\n';

      console.log(showProd);
    }

    console.log("---------------------------------------------------------------------------\n");

    productChoice();
  })
}


function productChoice() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "rawlist",
      message: "Would you like to [BUY] an Item or [DISPLAY_INVENTORY] again?",
      choices: ["BUY", "DISPLAY_INVENTORY"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.postOrBid.toUpperCase() === "BUY") {
        purchase();
      }
      else {
        displayInventory();
      }
    });
};


function purchase() {
        // determine if bid was high enough
        if (chosenItem.stock_quantity <= parseInt(answer.quantity)) {
          answer.quantity - chosenItem.stock_quantity;
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE auctions SET ? WHERE ?",
            [
              {
                stock_quantity: answer.quantity
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Would you like your product Gift Wrapped?");
              displayInventory();
            }
          );
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("We Currently do not have that many " + chosenItem.id + " would you like " + stock_quantity + " instead?");
          displayInventory();
        }
      }
    
      
  });
}






/*
function displayInventory() {

  queryStr = 'SELECT * FROM products';

  connection.query(queryStr, function (err, data) {
    if (err) throw err;

    console.log('Existing Inventory: ');
    console.log('-------------------\n');

    var showProd = '';
    for (var i = 0; i < data.length; i++) {
      showProd = '';
      showProd += 'Item ID: ' + data[i].item_id + '  //  ';
      showProd += 'Product Name: ' + data[i].product_name + '  //  ';
      showProd += 'Department: ' + data[i].department_name + '  //  ';
      showProd += 'Price: $' + data[i].price + '\n';

      console.log(showProd);
    }

    console.log("---------------------------------------------------------------------------\n");

    //promptUserPurchase();
  })
}


function start() {
  inquirer.prompt([
    {
    name: "num",
    message: "Please provide the ID Number of the product you would like to purchase."
  } , {
    name: "amount",
    message: "How many of this product would you like?"
  }
  ]).then(function(answer) {
    productNum = answer.num,
    productAmount = answer.amount
  });
  chkQty();

if (responses.artist.trim()) {

  let query = connection.query(
    "SELECT * FROM top5000 WHERE ?",
    {
      artist: responses.artist.trim()
    }
  }
}







function showProduct() {
    
    console.log("Welcome to BAMAZON, Here is a wide selection of products to choose from.\n");
    connection.query("SELECT item_id, product_name, price  FROM products", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
        start()
    });
}

function start() {
    inquirer.prompt([
      {
      name: "num",
      message: "Please provide the ID Number of the product you would like to purchase."
    } , {
      name: "amount",
      message: "How many of this product would you like?"
    }
    ]).then(function(answer) {
      productNum = answer.num,
      productAmount = answer.amount
    });
    chkQty();
}

function chkQty(productNum, productAmount) {
  if (productAmount >= connection.query("SELECT stock_quantity FROM products").productNum) {
    connection.query("")
}
console.log(productNum, productAmount);
*/