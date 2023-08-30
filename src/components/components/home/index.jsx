/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import AboutUs from "./components/about-us";
import Carousels from "./carousel/index";
import Category from "./components/category";
import OurProduct from "./components/our-product";
import Social from "./components/social";

const Home = () => {
  return (
    <div>
      <Carousels />

      <div>
        <h1>My Form</h1>
        <Formik
          initialValues={{ name: "Đức" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          <input type="text" className="border-2 border-black" />
          <button type="submit">Submit</button>
        </Formik>
      </div>

      <OurProduct />
      <Category />
      <AboutUs />
      <Social />
    </div>
  );
};
export default Home;
