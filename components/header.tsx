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
      // Define a function to perform the redirection
function redirectToPage() {
  // Replace 'your-target-url' with the URL you want to redirect to
  window.location.href = 'your-target-url';
}

// Set a timeout for 30 seconds (30,000 milliseconds)
const inactivityTimeout = setTimeout(redirectToPage, 30000);

// Add event listeners to reset the timeout on user interaction
document.addEventListener('mousemove', () => {
  clearTimeout(inactivityTimeout); // Reset the timeout on mouse movement
});

document.addEventListener('keydown', () => {
  clearTimeout(inactivityTimeout); // Reset the timeout on keypress
});

      <p>
  <a href="https://google.com">
    <img
      src="https://ik.imagekit.io/pngserver/add.png"
      className="upilogo"
      width="350"
      alt="Upi Icon"
    />
  </a>
</p>
      <h1 className="title">{props.title}</h1>
      <Link href={"/"} passHref>
        <div className="icon">
          <img
            src={`/images/${props.share ? "share" : "plus"}.svg`}
            alt="Share | Create"
            width="30"
            height="30"
            onClick={share}
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
