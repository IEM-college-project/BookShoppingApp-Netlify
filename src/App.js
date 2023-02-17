import React from "react";
import Category from "./component/category/Category";
import Content from "./component/content/Content";
import Footer from "./component/footer/Footer";
import Nav from "./component/nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Category />
      <Content />
      <Footer />
    </>
  );
}

export default App;
