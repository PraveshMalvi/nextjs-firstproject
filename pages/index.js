import Link from "next/link";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="top-content">
                <i class="fas fa-feather-alt i-top">
                  <span>I am a passionate writer.</span>
                </i>

                <h1>Heading Goes Here</h1>
                <h4>Sub Heading Goes Here</h4>
                <p>
                  Donec lectus risus, mattis non scelerisque sed, luctus et
                  ipsum. Vivamus vel porttitor mi, nec tristique ex. Nam vel
                  lacus in mauris mollis tempor at sit amet libero. Vivamus
                  ullamcorper egestas justo at egestas.
                </p>
                <Link href="/blog">
                  <button className="button">
                    <span>Read My Blogs</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
