import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>
        <a href="mailto:ask.codeoptics@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            } }          
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full px-10">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          Copyright © 2024 CodeOptics
        </p>

        <div className="flex justify-center md:order-none order-first md:mb-0 mb-6">
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <a href={info.link} key={info.id} target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                  <img src={info.img} alt={info.name} width={20} height={20} />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="md:text-base text-sm md:font-normal font-light">
            Kayastan Street Near Gola<br />
            Mahadev Mandir Chandausi,<br />
            Distt: Sambhal 244412
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
