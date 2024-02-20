import ProductCollection from "../3DProduct/ProductCollection";
import { motion } from "framer-motion";

function HamburgerModal() {
  return (
    <motion.div
      animate={{ x: [-1000, 0] }}
      exit={{ x: [0, -1000] }}
      transition={{type: "keyframes"}}
      className="hamburgerModal"
    >
      <ProductCollection />
    </motion.div>
  );
}

export default HamburgerModal;
