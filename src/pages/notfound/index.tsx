import { useEffect } from "react";
import "./notfound.scss";
const NotFound = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0414a7";
    return () => {
      document.body.style.backgroundColor = "none";
    };
  }, []);
  return (
    <>
      <main className="bsod container-notfound">
        <h1 className="neg title">
          <span className="bg">Error - 404</span>
        </h1>
        <p>An error has occured, to continue:</p>
        <p>
          * Return to our homepage.
          <br />* Send us an e-mail about this error and try later.
        </p>
      </main>
    </>
  );
};

export default NotFound;
