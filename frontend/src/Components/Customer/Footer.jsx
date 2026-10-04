import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Scissors,
  Store,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-14 overflow-hidden rounded-t-[28px] bg-[#211e28] text-white">

      {/* =====================================
          SALON OWNER / BARBER CTA
      ===================================== */}

      <div
        className="
          relative
          overflow-hidden
          border-b
          border-white/10
          bg-gradient-to-r
          from-[#32232d]
          via-[#3b2632]
          to-[#542c3d]
          px-8
          py-9
        "
      >
        <div
          className="
            absolute
            -right-20
            -top-24
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#ff3d73]/20
            blur-[70px]
          "
        />

        <div
          className="
            relative
            z-10
            flex
            flex-col
            justify-between
            gap-6
            lg:flex-row
            lg:items-center
          "
        >
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white/10
                px-3
                py-1.5
                text-[10px]
                font-semibold
                text-pink-200
              "
            >
              <Store size={14} />

              For Salon Owners & Barbers
            </div>

            <h2 className="mt-3 text-[25px] font-bold">
              Own a Salon?

              <span className="text-[#ff7299]">
                {" "}
                Grow With SalonWala
              </span>
            </h2>

            <p
              className="
                mt-2
                max-w-[620px]
                text-[11px]
                leading-5
                text-white/60
              "
            >
              Register your salon, add services,
              manage bookings and reach more
              customers online.
            </p>
          </div>

          <Link
            to="/business"
            className="
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-2
              rounded-xl
              bg-[#ff3d73]
              px-6
              py-3.5
              text-[11px]
              font-bold
              text-white
              shadow-lg
              shadow-black/20
              transition
              hover:-translate-y-0.5
              hover:bg-[#ed2f63]
            "
          >
            Add Your Salon

            <ArrowRight size={16} />
          </Link>
        </div>
      </div>


      {/* =====================================
          MAIN FOOTER
      ===================================== */}

      <div
        className="
          grid
          grid-cols-1
          gap-10
          px-8
          py-12
          sm:grid-cols-2
          xl:grid-cols-[1.4fr_1fr_1fr_1fr]
        "
      >

        {/* =====================================
            BRAND
        ===================================== */}

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-3"
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-[#ff3d73]
                to-[#ff799c]
                text-white
              "
            >
              <Scissors size={22} />
            </div>

            <div>
              <h2 className="text-[21px] font-bold leading-none">
                Salon

                <span className="text-[#ff5f8c]">
                  Wala
                </span>
              </h2>

              <p className="mt-1 text-[9px] text-white/40">
                Salon & Beauty Near You
              </p>
            </div>
          </Link>


          <p
            className="
              mt-5
              max-w-[330px]
              text-[11px]
              leading-6
              text-white/50
            "
          >
            Discover trusted salons, compare
            services, book appointments and enjoy
            a better salon experience with
            SalonWala.
          </p>


          {/* SOCIAL BUTTONS */}

          <div className="mt-5 flex gap-2">

            <a
              href="#"
              aria-label="Instagram"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-[9px]
                font-bold
                text-white/70
                transition
                hover:bg-[#ff3d73]
                hover:text-white
              "
            >
              IG
            </a>


            <a
              href="#"
              aria-label="Facebook"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-[9px]
                font-bold
                text-white/70
                transition
                hover:bg-[#ff3d73]
                hover:text-white
              "
            >
              FB
            </a>


            <a
              href="#"
              aria-label="LinkedIn"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-[9px]
                font-bold
                text-white/70
                transition
                hover:bg-[#ff3d73]
                hover:text-white
              "
            >
              IN
            </a>

          </div>
        </div>


        {/* =====================================
            CUSTOMER LINKS
        ===================================== */}

        <div>
          <h3 className="text-[12px] font-bold">
            For Customers
          </h3>

          <div className="mt-5 flex flex-col gap-3">

            <Link
              to="/customer/search"
              className="footer-link"
            >
              Find Salons
            </Link>


            <Link
              to="/customer/bookings"
              className="footer-link"
            >
              My Bookings
            </Link>


            <Link
              to="/customer/favourites"
              className="footer-link"
            >
              Favourites
            </Link>


            <Link
              to="/customer/offers"
              className="footer-link"
            >
              Offers & Coupons
            </Link>


            <Link
              to="/customer/profile"
              className="footer-link"
            >
              My Profile
            </Link>

          </div>
        </div>


        {/* =====================================
            HELP & COMPANY
        ===================================== */}

        <div>
          <h3 className="text-[12px] font-bold">
            Help & Company
          </h3>

          <div className="mt-5 flex flex-col gap-3">

            <Link
              to="/customer/support"
              className="footer-link"
            >
              Help & Support
            </Link>


            <Link
              to="/about"
              className="footer-link"
            >
              About SalonWala
            </Link>


            <Link
              to="/contact"
              className="footer-link"
            >
              Contact Us
            </Link>


            <Link
              to="/business"
              className="footer-link"
            >
              Partner With Us
            </Link>


            <Link
              to="/business"
              className="footer-link"
            >
              Add Your Salon
            </Link>

          </div>
        </div>


        {/* =====================================
            CONTACT
        ===================================== */}

        <div>
          <h3 className="text-[12px] font-bold">
            Contact
          </h3>

          <div className="mt-5 flex flex-col gap-4">

            <div className="flex items-start gap-3">

              <MapPin
                size={16}
                className="
                  mt-0.5
                  shrink-0
                  text-[#ff5f8c]
                "
              />

              <p
                className="
                  text-[10px]
                  leading-5
                  text-white/50
                "
              >
                Bhopal, Madhya Pradesh

                <br />

                India
              </p>

            </div>


            <a
              href="tel:+919876543210"
              className="
                flex
                items-center
                gap-3
                text-[10px]
                text-white/50
                transition
                hover:text-white
              "
            >
              <Phone
                size={16}
                className="text-[#ff5f8c]"
              />

              +91 98765 43210
            </a>


            <a
              href="mailto:support@salonwala.com"
              className="
                flex
                items-center
                gap-3
                text-[10px]
                text-white/50
                transition
                hover:text-white
              "
            >
              <Mail
                size={16}
                className="text-[#ff5f8c]"
              />

              support@salonwala.com
            </a>

          </div>
        </div>

      </div>


      {/* =====================================
          BOTTOM FOOTER
      ===================================== */}

      <div
        className="
          flex
          flex-col
          gap-4
          border-t
          border-white/10
          px-8
          py-5
          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        <p className="text-[9px] text-white/35">
          © 2026 SalonWala. All rights reserved.
        </p>


        <div className="flex flex-wrap gap-5">

          <Link
            to="/privacy-policy"
            className="
              text-[9px]
              text-white/40
              transition
              hover:text-white
            "
          >
            Privacy Policy
          </Link>


          <Link
            to="/terms"
            className="
              text-[9px]
              text-white/40
              transition
              hover:text-white
            "
          >
            Terms & Conditions
          </Link>


          <Link
            to="/cancellation-policy"
            className="
              text-[9px]
              text-white/40
              transition
              hover:text-white
            "
          >
            Cancellation Policy
          </Link>


          <Link
            to="/refund-policy"
            className="
              text-[9px]
              text-white/40
              transition
              hover:text-white
            "
          >
            Refund Policy
          </Link>

        </div>
      </div>


      {/* FOOTER LINK STYLE */}

      <style>{`
        .footer-link {
          width: fit-content;
          font-size: 10px;
          color: rgba(255,255,255,0.5);
          transition: 0.2s;
        }

        .footer-link:hover {
          color: #ff7299;
          transform: translateX(2px);
        }
      `}</style>

    </footer>
  );
};

export default Footer;