import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>List of Products</h1>
      <ul>
        <li>
          <Link to="/products/1"> Product 1</Link>
        </li>
        <li>
          {/* www.abc.com/link 1 */}
          {/* link 1. //relative  //concat current path
  tech/abcfolder//link 1. //absolute --- complete path  */}
          <Link to="2"> Product 2</Link>
        </li>
        <li>
          <Link to="/products/3"> Product 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Products;
