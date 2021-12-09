import Navbar from "../../components/Navbar";
import Images from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <>
      <Navbar />
      <div className="top">
        <h1 className="head-blog">My Blogs</h1>
        <div className="container">
          <div className="row">
            {data.slice(0, 10).map((elem) => {
              return (
                <div
                  key={elem.id}
                  className="col-lg-4 col-md-6 col-sm-12 blog-card-wrapper mt-4"
                >
                  <div className="card mb-3 blog-card">
                    <Images
                      src="/images/blogImg.jpg"
                      width="200"
                      height="250"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-capitalize">
                        {elem.title}
                      </h5>

                      <p className="card-text">
                        <small className="text-muted">
                          Published 2 Days ago
                        </small>
                      </p>
                      <Link href={`/blog/${elem.id}`} passHref>
                        <button className="button">
                          <span>Read More</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;
