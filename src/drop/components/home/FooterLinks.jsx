import Link from "next/link";
import React from "react";

const FooterNavLinks = () => {
  return (
    <>
      <Link href="/blog">Blog</Link>
      <Link href="/price">Pricing</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/faq">FAQ</Link>
    </>
  );
};

const FooterSocialLinks = () => {
  return (
    <>
      <>
        <Link href="https://facebook.com">Facebook</Link> |
        <Link href="https://twitter.com">Twitter</Link> |
        <Link href="https://dribbble.com">Dribbble</Link> |
        <Link href="https://instargam.com">Instagram</Link>
      </>
    </>
  );
};

export { FooterNavLinks, FooterSocialLinks };
