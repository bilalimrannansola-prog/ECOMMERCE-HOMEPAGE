function Products() {
  return (
    <section>
      <h2 style={{textAlign:"center"}}>Featured Products</h2>
      <div className="products">
        <div className="card">
          <h3>iPhone 15</h3>
          <p>₹79,999</p>
        </div>
        <div className="card">
          <h3>Gaming Laptop</h3>
          <p>₹59,999</p>
        </div>
        <div className="card">
          <h3>Smart Watch</h3>
          <p>₹4,999</p>
        </div>
        <div className="card">
          <h3>Bluetooth Headphones</h3>
          <p>₹2,999</p>
        </div>
      </div>
    </section>
  );
}
export default Products;