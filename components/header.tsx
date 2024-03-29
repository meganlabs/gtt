import type { NextPage } from "next";
import Link from "next/link";
import * as gtag from "../analytic/gtag";

interface Props {
  title?: string;
  share?: boolean;
}

const Header: NextPage<Props> = (props) => {
  async function share() {
    if (props.share) {
      try {
        if (navigator.share) {
          await navigator.share({
            title: "Share | upilink.in",
            text: "UPI Payment Link Generator",
            url: window.location.href,
          });
          gtag.event({
            action: "clicked_share",
            category: "engagement",
            label: `Shared by user`,
            value: `User clicked share`,
          });
        } else {
          throw new Error("Web share is not sipported !");
        }
      } catch (error) {
        alert((error as object).toString());
      }
    }
  }

  return (
    <header className="header">
      <p>
  <a href="https://google.com">
    <img
      src="https://ik.imagekit.io/pngserver/dhruv-ads.gif"
      className="upilogo"
      width="350"
      alt="Upi Icon"
    />
  </a>
</p>
    </header>
  );
};

export default Header;
