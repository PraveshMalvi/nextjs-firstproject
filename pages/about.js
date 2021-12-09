import Navbar from "../components/Navbar";
import Images from "next/image";

const about = () => {
  return (
    <>
      <Navbar />
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="top-left">
                <h1>About Us</h1>
                <h4>
                  <i className="fas fa-pen-nib"></i> I like to write
                </h4>
                <p>
                  Praesent mauris dolor, vehicula vel augue sit amet, varius
                  semper purus. Ut at pulvinar sapien. Curabitur ut laoreet
                  sapien. Donec convallis consectetur mi eget dignissim. Donec
                  magna mauris, vestibulum vel justo eu, imperdiet tempus augue.
                </p>
                <p className="top-quote">
                  <i className="fas fa-quote-left"></i>
                  Nam id lacus bibendum, iaculis purus at, egestas neque.
                  Vestibulum ultricies felis quis volutpat feugiat.
                  <i className="fas fa-quote-right"></i>
                </p>
                <button className="button">
                  <span>Go Somewhere </span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="top-right mt-5">
                <Images
                  src="/images/aboutImg.png"
                  width="350"
                  height="360"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
