import './App.css';
import { useState } from "react";
import Axios from "axios";

const URL = "http://localhost:8000/api/product";
function App() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  // const [productToUpdate, setProductToUpdate] = useState(productdefault)

  const [productsList, setProductsList] = useState([])

  const [update, setUpdate] = useState(false)



  const AddProduct = () => {
    if (update === true) {
      alert("Please complete your update before add new product");
      return;
    }
    if(name==="" || price===0){
      alert("Please enter valide product info");
      return;
    }
    Axios.post(`${URL}/add`, {
      name: name,
      price: price,
      quantity: quantity

    }).then(() => {
      setProductsList([
        ...productsList,
        {
          name: name,
          price: price,
          quantity: quantity
        }
      ]);
    });
    console.log(productsList)
  }
  //------------------------------------------2 get-----------------------------------------------//
  const getAllProducts = () => {
    if (update === true) {
      alert("Please complete your update");
      return;
    }
    Axios.get(`${URL}/all`).then((response) => {
      setProductsList(response.data);
    });
  };
  //-------------------------------------------------------------------------------------------------------//
  const deleteProduct = (productId) => {
    if(update===true) {
      alert("Please complete your update");
      return;
    }
    

    if (!window.confirm('Are you sure you want to delete this item?')) {
      // Delete the item
      return;
    }
  

    Axios.delete(`${URL}/delete/${productId}`).then((response) => {
      setProductsList(
        productsList.filter((product) => {
          return product.id !== productId;
        })
      );
    });
  };

  //-------------------------------------------------------------------------------------------------------//
  const UpdateProduct = (productId) => {
    setUpdate(true);
    const productToUpdate = productsList.find(product => product.id === productId);
    if (productToUpdate) {
      setId(productToUpdate.id)
      setName(productToUpdate.name);
      setPrice(productToUpdate.price);
      setQuantity(productToUpdate.quantity);
    } else {
      console.error(`Product with id ${productId} not found`);
    }
  }
  //-------------------------------------------------------------------------------------------------------//

  const UpdateProduct2 = (productId) => {
  
    Axios.put(`${URL}/update/${id}`, { id: id, name: name, price: price, quantity: quantity }).then(
      (response) => {
        setProductsList(
          productsList.map((product) => {
            return product.id === id
              ? {
                id: product.id,
                name: name,
                price: price,               
                quantity: quantity,
              }
              : product;
          })
        );
      }
    );

    setUpdate(false);
  }
  //-------------------------------------------------------------------------------------------------------//
  return (
    <div className="App">
      <h1>Products Management</h1>
      <div className="Appchild">
        <div className="inputs">
          <div className="oneInput">
            <label for="">Product name :</label><br />
            <input
              value={name}
              type="text"
              placeholder="enter product name ..."
              onChange={(event) => {
                setName(event.target.value);
              }} />
          </div>

          <div className="oneInput">
            <label for="">Price :</label><br />
            <input
              value={price}
              type="number"
              placeholder="enter product price ..."
              onChange={(event) => {
                setPrice(event.target.value);
              }} />
          </div>

          <div className="oneInput">
            <label for="">quantity :</label><br />
            <input
              value={quantity}
              type="number"
              placeholder="available number ..."
              onChange={(event) => {
                setQuantity(event.target.value);
              }} />
          </div>

          <div>
            <button onClick={AddProduct}>Add Product</button>
            <button onClick={getAllProducts}>show Products</button>
            {update === true ? (
              <button onClick={UpdateProduct2}>Update Products now</button>
            ) : ("")
            }

          </div>
        </div>

        <div className="information">



          {/* ------------------------------------------------------------------------------------------------ */}
          {productsList.map((product) => {

            return (
              <div className="resProductinfo">
                <div key={product.id}>
                  <h4>Name: {product.name}</h4>
                  <h4>price: {product.price} (DH)</h4>
                  <h4>quantity: {product.quantity}</h4>
                  <button className="btndel" onClick={() => {
                    deleteProduct(product.id);
                  }}>delete</button>

                  {update === false ? (
                    <button onClick={() => {
                      UpdateProduct(product.id);
                    }}>Update</button>
                  ) : ("")
                  }

                </div>
              </div>
            );
          })}
          {/* ------------------------------------------------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
}
export default App;
