import Button from "../../components/Button.jsx";
import ProductList from "../../components/ProductList.jsx";
import products from "../../assets/product-content.js";

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col bg-[#070546] text-[#d4af37]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.candymag.com/candy/images/2022/01/24/national-university-ph.jpg"
          alt="Products Hero"
          className="h-[83vh] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-12">
          <div className="max-w-xl [text-shadow:2px_2px_10px_rgba(0,0,0,0.85)]">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#f5d98b]">
              Products
            </p>

            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
              Explore Campus Essentials
            </h1>

            <p className="mt-4 text-sm text-[#f5d98b] sm:text-base">
              Browse uniforms, merchandise, and student essentials in one
              convenient place.
            </p>

            <div className="mt-6">
              <Button
                to="/"
                className="bg-[#d4af37] text-[#070546] hover:bg-[#f5d98b]"
              >
                Back Home
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 py-16 sm:px-12">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]/70">
            Featured Collection
          </p>

          <h2 className="mt-2 text-2xl font-semibold">Product Selection</h2>

          <p className="mt-3 max-w-2xl text-sm text-[#f5d98b]/70">
            Discover products selected for student convenience, quality, and
            everyday campus use.
          </p>
        </div>

        <ProductList products={products} />
      </section>
    </div>
  );
};

export default ProductListPage;
