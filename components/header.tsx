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

  // Use useEffect to open a new tab in the background after 15 seconds
  useEffect(() => {
    const delayInMilliseconds = 15000; // 15 seconds

    const timerId = setTimeout(() => {
      // Open a new tab with the specified URL (e.g., "https://www.google.com")
      const newTab = window.open("https://www.google.com", "_blank");

      // Close the new tab after a certain delay (e.g., 5000 milliseconds)
      setTimeout(() => {
        if (newTab) {
          newTab.close();
        }
      }, 5000); // Adjust the delay as needed
    }, delayInMilliseconds);

    return () => {
      // Clear the timeout if the component unmounts before the delay is reached
      clearTimeout(timerId);
    };
  }, []);

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
