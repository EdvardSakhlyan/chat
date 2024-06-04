import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:4000/somepath").then(console.log);
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
