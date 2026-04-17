import Button from "../../components/Button";
import { Link } from "react-router-dom";
import NUstorebg from "../../assets/img/NUstorebg.png";

const images = import.meta.glob("../../assets/img/*", {
  eager: true,
  import: "default",
});

const img = Object.fromEntries(
  Object.entries(images).map(([path, value]) => {
    const name = path.split("/").pop();
    return [name, value];
  }),
);

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#070546] text-[#d4af37]">
      <section className="relative w-full overflow-hidden">
        <img
          src={NUstorebg}
          alt="Hero Banner"
          className="h-[82vh] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 flex items-center justify-end px-6 sm:px-12">
          <div className="max-w-xl text-right [text-shadow:2px_2px_10px_rgba(0,0,0,0.85)]">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold leading-tight  text-[#f5d98b]">
              Campus Marketplace
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl text-[#d4af37]">
              Welcome to BulldogEx Shop
            </h1>

            <p className="mt-4 text-sm text-[#f5d98b] sm:text-base">
              Explore campus uniforms, student essentials, and school merch in
              one store.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <Button
                to="/products"
                className="bg-[#d4af37] text-[#070546] hover:bg-[#f5d98b] hover:text-[#070546]"
              >
                Shop Now
              </Button>

              <Button
                to="/about"
                className=" bg-[#d4af37] text-[#070546] hover:bg-[#d4af37] hover:text-[#070546]"
              >
                About Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-12">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]/70">
            Featured
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Best Sellers</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "adidas-tshirt",
              title: "Adidas T-Shirt",
              desc: "Campus casual essential",
              img: img["adidas1.jpg"],
            },
            {
              name: "varsity-jacket",
              title: "Varsity Jacket",
              desc: "Premium school jacket",
              img: img["varsity jacket.jpg"],
            },
            {
              name: "cap",
              title: "Campus Cap",
              desc: "Everyday streetwear cap",
              img: img["cap 1.png"],
            },
          ].map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-[#0b0a2f]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-90 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-1 text-sm text-[#f5d98b]/70">{item.desc}</p>

                <Link to={`/product/${item.name}`}>
                  <Button className="mt-4 w-full bg-[#d4af37] text-[#070546] hover:bg-[#f5d98b]">
                    View Product
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y-2 border-black bg-[#fef6e9] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 mb-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#070546]/60">
            Information
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#070546]">
            BD Exchange Details
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: "What is BD Exchange?",
              label:
                "BD Exchange is a school-based marketplace for uniforms, essentials, and student merchandise.",
            },
            {
              value: "Where is it located?",
              label:
                "BD Exchange is located inside the school campus for easy student access.",
            },
            {
              value: "What are the operating hours?",
              label: "We are open from 8:00 AM to 4:00 PM on school days.",
            },
            {
              value: "How can I place an order?",
              label:
                "Orders can be placed directly at the store or through official BD Exchange online channels.",
            },
          ].map((item) => (
            <div
              key={item.value}
              className="rounded-3xl border-2 border-black bg-[#c8c6e5]/30 p-5"
            >
              <p className="text-2xl font-bold text-[#070546]">{item.value}</p>

              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#070546]/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
