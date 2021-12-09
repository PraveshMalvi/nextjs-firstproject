// using Link component to redirect from 404 page to homepage
import Link from "next/link";
import Navbar from "../components/Navbar";

const error404 = () => {
  return (
    <>
      <Navbar />
      <div className="error-page text-center">
        <h1 className="mb-3">
          <strong className="me-2">404</strong>
          <i className="fas fa-bug"></i>
        </h1>
        <h4 className="mb-2">You have found a page that doesn't exist.</h4>
        <p className="mb-4">Breathe in breathe out, go back and try again.</p>
        <Link href="/" passHref>
          <button className="button">
            <span>BACK TO HOMEPAGE</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default error404;
