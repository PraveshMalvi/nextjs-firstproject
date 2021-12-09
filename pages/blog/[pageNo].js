import Navbar from "../../components/Navbar";
import Images from "next/image";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((elem) => {
    return {
      params: {
        pageNo: elem.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const pageNo = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
      <Navbar />
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog-main">
                <Images
                  src="/images/blogImg.jpg"
                  width="650"
                  height="480"
                  alt=""
                />
                <h3 className="text-capitalize">{title}</h3>
                <p className="card-text">
                  <small className="text-muted">Published 2 Days ago</small>
                </p>
                <p className="text-capitalize">{body}</p>
                <Link href="/blog" passHref>
                  <button className="button mt-4">
                    <span>Back To Blogs</span>
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

export default pageNo;
