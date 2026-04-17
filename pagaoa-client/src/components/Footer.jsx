import { NavLink } from "react-router-dom";
import logo from "../assets/img/nubdexchange_logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#04022d] text-[#fef6e9] border-t border-[#d4af37]/30">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="NubdExchange Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-serif text-xl text-[#d4af37]">
              NubdExchange
            </span>
          </div>

          <p className="mt-4 text-sm text-[#fef6e9]/70">
            Your campus marketplace for uniforms, essentials, and student gear.
            Built for convenience, speed, and trusted school shopping.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[#d4af37]">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-[#d4af37]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#d4af37]">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-[#d4af37]">
                Products
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[#d4af37]">
            Contact & Follow Us
          </h4>

          <p className="text-sm text-[#fef6e9]/70">
            📍 Sampaloc, Manila, Philippines
          </p>

          <p className="text-sm text-[#fef6e9]/70 mt-2">📞 +63 912 345 6789</p>

          <p className="text-sm text-[#fef6e9]/70 mt-2">
            ✉️ support@nubdexchange.com
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=61570809652927"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png"
                alt="Facebook"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/042/127/166/small/instagram-logo-on-square-style-with-transparent-background-free-png.png"
                alt="Instagram"
                className="w-7 h-8 opacity-70 hover:opacity-100 hover:scale-110 transition"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#d4af37]/20 text-center text-xs py-4 text-[#fef6e9]/60">
        © {new Date().getFullYear()} NubdExchange. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
