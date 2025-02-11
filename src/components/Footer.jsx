import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 gap-y-5 md:gap-y-5 mt-auto">
      <nav className="flex flex-wrap justify-center gap-4">
        <Link className="link link-hover hover:text-primary-content" to="/">
          Home
        </Link>
        <Link
          className="link link-hover hover:text-primary-content"
          to="/all-volunteer-need-posts"
        >
          Become a volunteer
        </Link>
        <Link
          className="link link-hover hover:text-primary-content"
          to="/about-us"
        >
          About us
        </Link>
        <Link
          target="_blank"
          className="link link-hover hover:text-primary-content"
          to="https://www.linkedin.com/in/mahfuzhasan2003/"
        >
          Follow us on social media
        </Link>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Kind
          Connect
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
