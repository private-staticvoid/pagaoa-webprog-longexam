import Button from "../../components/Button";
import { Link } from "react-router-dom";
import heroImg from "../../assets/img/NUstorebg.png";
import logo from "../../assets/img/nubdexchange_logo.png";

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

const AboutPage = () => {
  return (
    <div className="flex flex-col bg-[#070546] text-[#d4af37]">
      <section className="relative h-[83vh] w-full overflow-hidden">
        <img
          src="https://goodnewspilipinas.com/wp-content/uploads/2024/07/NU-Laguna.webp"
          alt="NU Campus"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#070546]/60" />
        <div className="relative z-10 h-full w-full grid grid-cols-1 lg:grid-cols-2 items-center px-6 sm:px-12">
          <div className="max-h-full overflow-hidden">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]/70 font-semibold">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight text-[#d4af37]">
              Built for students, by students
            </h2>

            <p className="mt-5 text-[#f5d98b]/80 font-medium leading-6">
              BulldogEx Shop was created to make campus shopping easier and more
              accessible. From uniforms to everyday essentials, our goal is to
              provide students with everything they need in one convenient
              place.
            </p>

            <p className="mt-4 text-[#f5d98b]/80 font-medium leading-6">
              Designed with simplicity in mind, the store focuses on fast
              browsing, clear product categories, and a smooth ordering
              experience.
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

          <div className="flex justify-center items-center h-full">
            <div className="relative">
              <div className="absolute inset-0 -z-10 h-56 w-56 sm:h-64 sm:w-64 rounded-full bg-[radial-gradient(circle,rgba(7,6,69,0.2)_0%,rgba(7,6,69,0.8)_60%,rgba(7,6,69,1)_100%)] blur-2xl" />

              <img
                src={logo}
                alt="Logo"
                className="h-48 w-48 sm:h-56 sm:w-56 object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0b0a2f] px-6 py-16 sm:px-12">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]/70">
            Purpose
          </p>
          <h2 className="mt-2 text-2xl font-semibold">What we stand for</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Our Mission",
              desc: "To provide students with accessible, affordable, and high-quality campus essentials.",
            },
            {
              title: "Our Vision",
              desc: "To become the go-to campus marketplace that simplifies student life.",
            },
            {
              title: "Our Values",
              desc: "Convenience, quality, and a student-first experience in everything we offer.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#070546] p-6 shadow-lg border border-[#d4af37]/10"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-[#f5d98b]/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 py-16 sm:px-12">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]/70">
            Showcase
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Inside BulldogEx Shop</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            img["adidas2.jpg"],
            img["bulldogplush.jpg"],
            img["tshirt3.jpg"],
          ].map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl">
              <img
                src={image}
                alt="Gallery"
                className="h-120 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fef6e9] px-6 py-16 text-center">
        <h2 className="text-2xl  text-[#0b0a2f] font-bold leading-tight ">
          Ready to explore our products?
        </h2>

        <p className="mt-3 text-[#0b0a2f]">
          Discover campus essentials designed for your everyday needs.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Button
            to="/products"
            className="bg-[#d4af37] text-[#070546] hover:bg-[#f5d98b]"
          >
            Shop Now
          </Button>

          <Button
            to="/"
            className="border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#070546]"
          >
            Back Home
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
