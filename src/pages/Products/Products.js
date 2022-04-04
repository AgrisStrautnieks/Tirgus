import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion/dist/framer-motion";
import "../../pages/Products/products.scss";
import images from "./images";

const Products = () => {
  const [width, setWidth] = useState(0);
  const carousels = useRef();
  useEffect(() => {
    setWidth(carousels.current.scrollWidth - carousels.current.offsetWidth);
  }, []);
  return (
    <div className="product">
      <h2 className="product-title">Products</h2>
      <motion.div
        ref={carousels}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Products;
