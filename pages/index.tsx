import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Meta from "../components/meta";
import * as gtag from "../analytic/gtag";

interface Input {
  vpa: string;
  amount: any;
}

interface Invalid {
  show: boolean;
  text: string;
}

interface Generated {
  show: boolean;
  url: string;
}

const Index: NextPage = () => {
  const [input, setinput] = useState<Input>({
    vpa: "",
    amount: "",
  });
  const [invalid, setinvalid] = useState<Invalid>({
    show: false,
    text: "",
  });
  const [generated, setgenerated] = useState<Generated>({
    show: false,
    url: "",
  });
  const [copied, setcopied] = useState<boolean>(false);

  function generate() {
    // generate a deep link
    const vpa: string = input.vpa;
    const amount: any = input.amount;

    if (vpa && vpa !== "" && vpa.includes("@")) {
      setgenerated({
        show: true,
        url: `${window.location.protocol}//${
          window.location.hostname
        }/pay/${vpa}${amount && amount > 0 ? "?am=" + amount : ""}`,
      });
      gtag.event({
        action: "create_payment_link",
        category: "engagement",
        label: `Vpa: ${vpa} - Amount: ${amount || "null"}`,
        value: `Created payment Deep Link by user`,
      });
    } else {
      setinvalid({
        show: true,
        text: !vpa || vpa === "" ? "* Enter an UPI ID" : "* Invalid UPI Id",
      });
    }
    return;
  }

  function copy() {
    const url: string = generated.url;
    navigator.clipboard.writeText(url);
    setcopied(true);
  }

  return (
    <>
      <Meta title="Free UPI Link Generator | upilink.in" />
      <main>
        <Header title="Get Your UPI Link" share={true} />
        <section className="content">
          <h4 className="heading">Free UPI Link Generator</h4>

          {!generated.show ? (
            <>
              {/* Generate section start */}

              <div className="generate">
                <div className="center">
                  <p className="pdetailupiid">Enter Your VPA (UPI ID)</p>
                  <input
                    type="text"
                    placeholder="UPI ID"
                    className="inputbox"
                    onChange={(e) =>
                      setinput({ ...input, vpa: e.target.value })
                    }
                    value={input.vpa}
                  />
                </div>
                <div className="amountdiv">
                  <p className="pdetailamount">
                    Amount ={" "}
                    <input
                      type="number"
                      placeholder="₹"
                      className="amountbox"
                      onChange={(e) =>
                        setinput({ ...input, amount: e.target.value })
                      }
                      value={input.amount}
                    />
                    {" ₹"}
                  </p>
                  <p className="vsmalltext">(Optional)</p>
                </div>
                <div className="center">
                  <button className="createbutton" onClick={generate}>
                    Get Link
                  </button>
                  {invalid.show && (
                    <p className="invalidtext">{invalid.text}</p>
                  )}
                </div>
              </div>

              {/* Generate section end */}
            </>
          ) : (
            <>
              {/* Generated section start */}
              <div className="generate">
                <p className="paymentlinktxt">
                  Send this link to Recieve Payment
                </p>
                <div className="center">
                  <input
                    type="text"
                    value={generated.url}
                    readOnly
                    className="inputbox"
                  />
                  <p className="copied">
                    {copied ? "Copied 👍" : "Click copy to copy url 🔗"}
                  </p>
                  <a className="createbutton" onClick={copy}>
                    C O P Y
                  </a>
                </div>
              </div>
              {/* Generated section end */}
            </>
          )}

          {/* Additional data section start */}
          <div className="additionaldata">
            <p className="additionaltext">
              By using our service, you agree to our <Link href="https://www.upilink.in/terms/index.html">TOS</Link> and <Link href="https://www.privacypolicygenerator.info/live.php?token=rYNEgtn7ll5td7wSPd5n4W0cDfdg8STj">Privacy Policy</Link>
            </p>
            <p className="additionaltext">
              Affiliated with{" "}
              <a href="https://cashkaro.com?r=16309943&fname=UPI+Online">
                CashKaro
              </a>{" "}
              
            </p>
            <p className="hashtag">#GoCashless</p>
            <p className="india">Made in India</p>
          </div>
          {/* Additional data section end */}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Index;
