const connection = require("../config/connection");


const addProduct = (req, res) => {
    // Get the values from the request body
    const name = req.body.name;
    const price = req.body.price;
    const quantity = req.body.quantity;


    // Insert the values into the 'employees' table in the database
    connection.query(
        "INSERT INTO  product (name, price,quantity) VALUES (?,?,?)",
        [name, price, quantity],
        (err, result) => {
            // Check for errors
            if (err) {
                console.log(err);
            } else {
                // Send a response to the client
                res.send("Values Inserted result is: \n" + result);
            }
        }
    );
};

// This code is handling a POST request to the / create endpoint on the server.
// When a request is made to this endpoint, the server extracts the values for name,
//  age, country, position, and wage from the request body.
//--------------------------------------------------------------------------------------------------------------//


const PullAllProduct= (req, res) => {
    // Query the database to select all records from the 'product' table
    connection.query("SELECT * FROM product", (err, result) => {
        // Check for errors
        if (err) {
            console.log(err);
        } else {
            // Send the query result as a response to the client
            res.send(result);
           
        }
    });
};

const DeleteProduct = (req, res) => {
  
    const id = req.params.id;
    // Delete the record from the product table where the id matches the one provided
    connection.query("DELETE FROM product WHERE id = ?", id, (err, result) => {
        // Check for errors
        if (err) {
            console.log(err);
        } else {
            // Send the query result as a response to the client
            res.send(result);
        }
    });
}

const UpdateProduct = (req, res) => {
   
    // Get the id and name and price and quantity values from the request body
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const quantity=req.body.quantity;

    // Update the employees table with the new wage value, where the id matches the one provided
    connection.query(
        "UPDATE product SET name = ?, price=?,quantity=? WHERE id = ?",
        [name,price,quantity, id],
        (err, result) => {
            // Check for errors
            if (err) {
                console.log(err);
            } else {
                // Send the query result as a response to the client
                res.send(result);
            }
        }
    );

}












module.exports = {
    addProduct,
    PullAllProduct,
    DeleteProduct,
    UpdateProduct,

}