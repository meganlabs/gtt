import type { NextPage } from "next";
import Head from "next/head";
import image from "../helper/image";
<script async src="https://cdn.splitbee.io/sb.js"></script>

const defaultData = {
  description: "Free UPI Payment Link Generator",
  keywords:"upi link generator, upi payment link generator free, upi payment link generator, upi deep link generator, upilink",
  copyright: "PPR Digital",
  topic: "UPI Payment Link ",
  sitename: "UpiLink.in",
  email: "mail.paul.developer@gmail.com",
  url: "https://upilink.in/",
  ogImage: image("", 50),
};

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  imagePath?: string;
}

const Meta: NextPage<Props> = (props) => {
  try {
    var url = window?.location?.href;
  } catch (error) {
    var url = defaultData.url;
  }

  return (
    <Head>
      <script async src="https://cdn.splitbee.io/sb.js"></script>
      <title>{props.title || defaultData.sitename}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content={props.description || defaultData.description}
      />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="keywords" content={props.keywords || defaultData.keywords} />
      <meta name="copyright" content={defaultData.copyright} />
      <meta name="robots" content="index,follow" />
      <meta name="topic" content={defaultData.topic} />
      <meta name="MobileOptimized" content="320" />
      <meta name="og:title" content={props.title || defaultData.sitename} />
      <meta name="og:type" content={defaultData.topic} />
      <meta name="og:site_name" content={defaultData.sitename} />
      <meta
        name="og:description"
        content={props.description || defaultData.description}
      />
      <meta name="og:url" content={url} />
      <meta name="og:email" content={defaultData.email} />
      <meta
        property="og:image"
        content={props.imagePath || defaultData.ogImage}
      />
    </Head>
  );
};

export default Meta;
