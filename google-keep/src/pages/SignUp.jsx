import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  let navigate = useNavigate();
  const [data, setData] = useState("");

  const handleRegister = () => {
    if (data.name === "" || data.age < 0) {
      alert("Please fill full name and valid age!");
    } else {
      auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user.uid);

          const patient = {
            Name: data.name,
            Age: data.age,
            UserID: user.uid,
          };

          const myDoc = db
            .collection("users")
            .doc(user.uid)
            .set({ patient })
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        })
        .catch((error) => alert(error.message));
    }
  };
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate(`/login`);
      }
    });

    return unsub;
  }, []);
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        onChange={(event) =>
                          setData({ ...data, name: event.target.value })
                        }
                      />
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Name
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="number"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        onChange={(event) =>
                          setData({ ...data, age: event.target.value })
                        }
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Age
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        onChange={(event) =>
                          setData({ ...data, email: event.target.value })
                        }
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Your Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        onChange={(event) =>
                          setData({ ...data, password: event.target.value })
                        }
                      />
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Your Password
                      </label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3g"
                      >
                        I agree all statements in
                        <a href="#" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={handleRegister}
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      <Link to="/login">Login here</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
