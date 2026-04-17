import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="h-screen w-screen overflow-hidden bg-[#070546] text-[#d4af37]">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
        {/* LEFT IMAGE PANEL */}
        <div className="relative hidden lg:block">
          <img
            src="https://images.candymag.com/candy/images/2022/01/24/national-university-ph.jpg"
            alt="National University"
            className="h-full w-full object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* brand overlay */}
          <div className="absolute bottom-10 left-10 max-w-md text-[#f5d98b]">
            <p className="text-[11px] uppercase tracking-[0.3em]">
              BulldogEx Shop
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight">
              Built for students, by students
            </h2>
          </div>
        </div>

        {/* RIGHT AUTH PANEL */}
        <main className="flex h-full items-center justify-center px-6 sm:px-10 lg:px-16">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
