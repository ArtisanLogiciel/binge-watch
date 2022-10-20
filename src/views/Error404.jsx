import React from "react";
import Layout from "../components/Layout";



function Error404() {
  return (
      <Layout classname={`flex justify-center items-center`}>
          <p>Erreur 404 : Page introuvable</p>
      </Layout>
  );
}

export default Error404;
