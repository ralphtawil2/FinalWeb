import * as React from "react";
// import CenteredTabs from "./CenteredTabs";
import DynamicMultiActionAreaCard from "./dynamicCard";
// import Axios from "axios";


function Shop() {

  // const getProducts = async (evt) => {
  //   evt.preventDefault();
  //   try {
  //     await Axios.get("http://localhost:3001/api/products", {
        
  //     });

  //     console.log("Hi");
  //   }
  //   catch (err) {
  //     alert(err.response.data.msg)
  //   }
    
  // };

  // for (let index = 0; index < getProducts.length; index++) {
  // const product = getProducts[index]
    return (
      <>
        <div className="shop-div">
          <DynamicMultiActionAreaCard>
          </DynamicMultiActionAreaCard>
        </div>
      </>
    );    
  }
//}
export default Shop;
