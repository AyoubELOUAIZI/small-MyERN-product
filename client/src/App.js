import './App.css';

function App() {
  return (
    <div className="App">


      
      <h1>Start React App</h1>
      <div className="Appchild">
        <div className="inputs">
          <div className="oneInput">
            <label for="">Product name</label><br />
            <input type="text" placeholder="enter product name ..." />
          </div>

          <div className="oneInput">
            <label for="">Price</label><br />
            <input type="text" placeholder="enter product price ..." />
          </div>

          <div className="oneInput">
            <label for="">quantity</label><br />
            <input type="text" placeholder="available number ..." />
          </div>

          <div>
            <button>Add Product</button>
            <button>show Products</button>
          </div>
        </div>

        <div className="information">
          information
        </div>
      </div>
    </div>
  );
}
export default App;
