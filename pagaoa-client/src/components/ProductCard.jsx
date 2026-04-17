import { Link } from "react-router-dom";
import Button from "./Button";

const images = import.meta.glob("../assets/img/*", {
  eager: true,
  import: "default",
});

const img = Object.fromEntries(
  Object.entries(images).map(([path, value]) => {
    const name = path.split("/").pop();
    return [name, value];
  }),
);

const ProductCard = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#0b0a2f] border border-[#d4af37]/10 hover:shadow-xl transition">
      <img
        src={img[product.image]}
        alt={product.title}
        className="h-64 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#d4af37]">
          {product.title}
        </h3>

        <p className="mt-1 text-sm text-[#f5d98b]/70">{product.category}</p>

        <p className="mt-2 text-sm text-[#f5d98b]">{product.price}</p>

        <Link to={`/products/${product.name}`}>
          <Button className="mt-4 w-full bg-[#d4af37] text-[#070546] hover:bg-[#f5d98b]">
            View Product
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
