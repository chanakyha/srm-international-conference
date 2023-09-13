import React from "react";
import Image from "next/image";
import Icon from "../../assets/icon.png";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
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
                                <Link
                                    href="/"
                                    className="flex flex-col items-center"
                                >
                                    <Image
                                        src={"/assets/srmlogo.webp"}
                                        alt="Codelance Devs"
                                        width={100}
                                        height={100}
                                        className=" h-auto w-56 md:ml-[12px] lg:mb-0"
                                    />
                                    <h1 className=" text-2xl tracking-widest font-bold lg:mb-0">
                                        ICACST&apos;23
                                    </h1>
                                </Link>
                                <div className="text-center lg:text-left lg:w-96">
                                    <p className="font-semibold">
                                        SRM Institute of Science and Technology
                                        <br></br>
                                        Ramapuram Campus
                                    </p>
                                    <p className="text-sm mt-2">
                                        Bharathi Salai, Ramapuram, Chennai – 600
                                        089.
                                    </p>
                                    <div className="flex flex-col mt-2">
                                        <Link
                                            className="hover:underline"
                                            href={
                                                "mailto:helpdesk@srmrmp.edu.in"
                                            }
                                        >
                                            helpdesk@srmrmp.edu.in
                                        </Link>
                                        <Link
                                            className="hover:underline"
                                            href={"tel:1800 102 1525"}
                                        >
                                            1800 102 1525
                                        </Link>
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
                            <div className="mb-4 flex flex-col items-stretch justify-center text-center md:flex-row">
                                {/* <Link
                                    href="/terms-and-conditions"
                                    className="py-2 text-[14px] text-[#777a85] md:mr-[24px]"
                                >
                                    Terms and Conditions
                                </Link>
                                <Link
                                    href="/privacy-policy"
                                    className="py-2 text-[14px] text-[#777a85] md:mr-[24px]"
                                >
                                    Privacy Policy
                                </Link> */}
                            </div>
                            <p className="mb-4 text-[12px] text-[#777a85] text-center lg:text-right">
                                Copyright &copy; {new Date().getFullYear()} SRM
                                Institute of Science and technology, Ramapuram
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
