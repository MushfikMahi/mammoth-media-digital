import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <hr className="border-secondary" />
      <footer class="">
        <div class="flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <Link href="/">
            <Image
              alt="logo"
              src="/Logo Hori Light.svg"
              height={100}
              width={160}
            />
          </Link>

          <p class="text-sm  ">
            © 2024 Mammoth Media Ltd | All Rights Reserved by Mammoth Media
          </p>

          <div class="flex flex-col text-right -mx-2">
            <Link href="https://www.mammothmedia.digital/terms_conditions">TERMS AND CONDITIONS</Link>
            <Link href="https://www.mammothmedia.digital/privacy"> PRIVACY POLICY</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
