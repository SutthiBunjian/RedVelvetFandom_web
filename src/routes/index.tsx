import Home from "../pages/Home";
import Header from "../component/Header";
import Footer from "../component/Footer";

export const routes = [
  {
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
    path: "/",
  },
];
