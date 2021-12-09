import Navbar from "../components/Navbar";

const contact = () => {
  return (
    <>
      <Navbar />
      <div className="top">
        <div className="container">
          <div className="row contact-card">
            <div className="col-12 w-75">
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">
                  First Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="first name"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">
                  Last Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="last name"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button className="button">
                <span>Submit form</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
