import Button from "../components/Button";
import Robot from "../assets/img/robot.png";

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col bg-[#070546] text-[#d4af37]">
      <section className="border-b-2 border-[#d4af37]/30 px-6 py-16 sm:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-12">
            <div className="order-2 mt-10 text-center md:order-1 md:mt-0 md:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d4af37]/60">
                System Error
              </p>

              <h1 className="mt-4 text-7xl font-black leading-none sm:text-9xl">
                404
              </h1>

              <h2 className="mt-4 text-2xl font-bold text-[#f5d98b] sm:text-4xl">
                Page Not Found
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#f5d98b]/80">
                The connection was interrupted. The product or page you are
                looking for is currently unavailable in our database.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
                <Button
                  to="/"
                  className="bg-[#d4af37] px-8 py-4 text-lg font-bold text-[#070546] hover:bg-[#f5d98b]"
                >
                  Back to Home
                </Button>
                <Button
                  to="/products"
                  className="border-2 border-[#d4af37] px-8 py-4 text-lg font-bold text-[#d4af37] hover:bg-[#d4af37] hover:text-[#070546]"
                >
                  View Catalog
                </Button>
              </div>
            </div>

            {/* NEW ROBOT IMAGE */}
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-[#d4af37]/10 blur-3xl"></div>
                <img
                  src={Robot}
                  alt="Friendly Robot"
                  className="relative z-10 h-72 w-72 object-contain sm:h-96 sm:w-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS SECTION - Removed Get Help */}
      <section className="bg-[#0b0a2f] px-6 py-16 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37]/50">
            Navigation Recovery
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#d4af37]/20 bg-[#070546] p-8 transition-colors hover:border-[#d4af37]">
              <h4 className="text-xl font-bold text-[#d4af37]">Homepage</h4>
              <p className="mt-2 text-sm text-[#f5d98b]/70">
                Return to the main dashboard.
              </p>
              <Button
                to="/"
                className="mt-6 inline-block text-sm font-bold underline underline-offset-4"
              >
                Go Home →
              </Button>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/20 bg-[#070546] p-8 transition-colors hover:border-[#d4af37]">
              <h4 className="text-xl font-bold text-[#d4af37]">All Products</h4>
              <p className="mt-2 text-sm text-[#f5d98b]/70">
                Browse our latest industrial equipment.
              </p>
              <Button
                to="/products"
                className="mt-6 inline-block text-sm font-bold underline underline-offset-4"
              >
                Shop Now →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
