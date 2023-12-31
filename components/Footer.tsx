import React from "react";
import Image from "next/image";
import Icon from "../../assets/icon.png";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#f6f7fc]">
      <div className="mx-auto max-w-[1440px] px-[12px] pt-[72px] md:px-[20px] lg:px-[5vw]">
        <div className="flex flex-col items-stretch justify-start">
          <div className="w-full border-b p-2 md:p-4">
            <div className="flex flex-col items-center justify-between md:items-start lg:w-full lg:flex-row">
              <div className="flex flex-col md:flex-row items-center lg:w-full mb-[40px]">
                <Link href="/" className="flex flex-col items-center">
                  <Image
                    src={"/assets/srmlogo.webp"}
                    alt="SRMIST Logo"
                    width={1000}
                    height={1000}
                    className=" h-auto w-56 md:ml-[12px] lg:mb-0"
                  />
                  <h1 className=" text-2xl tracking-widest font-bold lg:mb-0">
                    ICACST &apos;23
                  </h1>
                </Link>
                <div className="text-center lg:text-left lg:w-96">
                  <p className="font-semibold">
                    SRM Institute of Science and Technology
                    <br></br>
                    Ramapuram Campus
                  </p>
                  <p className="text-sm mt-2">
                    Bharathi Salai, Ramapuram, Chennai – 600 089.
                  </p>
                  <div className="flex flex-col mt-2">
                    <p className="text-sm font-semibold">For Queries:</p>

                    <p>Dr.M.Ayyadurai-Asst. Prof-CSE</p>
                    <Link
                      className="hover:underline"
                      href={"mailto:rmpicacst@srmist.edu.in"}
                    >
                      rmpicacst@srmist.edu.in
                    </Link>
                    <p className="flex justify-center lg:justify-start items-center gap-2">
                      Mobile no:
                      <Link
                        className="hover:underline"
                        href={"tel:+917708911254"}
                      >
                        +91 77089 11254
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-between md:flex-row lg:justify-end">
                {/* <div className="mb-4 flex flex-col items-stretch justify-start text-center">
                                    <a className="p-3 text-[14px] md:px-3 md:py-4 lg:mx-3 lg:py-2 ">
                                        SRM Institute of Science and Technology
                                        Ramapuram Campus
                                    </a>
                                    <a className="p-3 text-[14px] md:px-3 md:py-4 lg:mx-3 lg:py-2 ">
                                        Services
                                    </a>
                                    <a className="p-3 text-[14px] md:px-3 md:py-4 lg:mx-3 lg:py-2 ">
                                        Solution
                                    </a>
                                    <a className="p-3 text-[14px] md:px-3 md:py-4 lg:mx-3 lg:py-2 ">
                                        FAQs
                                    </a>
                                </div> */}
                <div className="mb-4 flex items-center justify-start lg:ml-[64px]">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/srmist.rmp/"
                    className="mx-[2px] p-3 transition-all duration-300 hover:text-cyan-400"
                  >
                    <FacebookIcon strokeWidth={1.5} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/35950519/"
                    className="mx-[2px] p-3 transition-all duration-300 hover:text-cyan-400"
                  >
                    <LinkedinIcon strokeWidth={1.5} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/srmistramapuram"
                    className="mx-[2px] p-3 transition-all duration-300 hover:text-cyan-400"
                  >
                    <TwitterIcon strokeWidth={1.5} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/srmist.rmp/"
                    className="mx-[2px] p-3 transition-all duration-300 hover:text-cyan-400"
                  >
                    <InstagramIcon strokeWidth={1.5} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCPiZwXRaA2NMNQ0xdDmzpmA"
                    className="mx-[2px] p-3 transition-all duration-300 hover:text-cyan-400"
                  >
                    <YoutubeIcon strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-2 md:p-4">
            <div className="flex flex-col items-center justify-start md:flex-row md:justify-between">
              <p className="text-[12px] text-[#777a85]">
                Copyright &copy; {new Date().getFullYear()} SRM Institute of
                Science and technology, Ramapuram
              </p>
              <div className="mb-4 flex flex-col items-stretch justify-center text-center md:flex-row">
                <Link
                  target="_blank"
                  href="https://srmrmp.edu.in/terms-conditions/"
                  className="py-2 text-[14px] text-[#777a85] md:mr-[24px]"
                >
                  Terms and Conditions
                </Link>
                <Link
                  target="_blank"
                  href="https://srmrmp.edu.in/privacy-policy-2-2/"
                  className="py-2 text-[14px] text-[#777a85] md:mr-[24px]"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="w-full text-center">
              <span className="text-xs text-slate-500">
                Designed and Developed by{" "}
                <Link
                  target="_blank"
                  className="hover:underline hover:text-blue-500"
                  href={"https://linktr.ee/tech_takaliss"}
                >
                  Students of SRMRMP
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
