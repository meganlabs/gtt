import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <h1 className="logo">upilink.in</h1>
      <p className="slogan">
        Pay with any {" "} 
        <img
          src="/images/upi.svg"
          className="upilogo"
          width="40"
          alt="Upi Icon"
        /> App.
      </p>
      <p className="tpf">
        <Link href={"http://bit.ly/3JMWNQc"} passHref>
          <h2 className="app">Download UPI Link Offical App</h2>
        </Link>
      </p>
      <Link href={"http://bit.ly/3JMWNQc"} passHref>
          <h2 className="app">Download UPI Link Offical App</h2>
        </Link>
      <p className="tuhin">
         {" "}
        <a
          href="http://upilink.in/?ref=footer"
          target="_blank"
          rel="noreferrer"
        >
          
        </a>
      </p>
    </footer>
  );
};

export default Footer;
