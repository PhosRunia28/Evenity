import {
  COMPANY,
  EVENITY,
  FEATURES,
  FOOTER_BOTTOM,
} from "@/data/FooterNavigationData";
import { socialMedia } from "@/data/SocialMediaLink";
import FooterLink from "../common/FooterLink";

export default function Footer() {
  return (
    <footer className="container mb-10 font-fredoka text-white lg:mb-16 xl:mb-20">
      <div className="rounded-2xl bg-[#171717] px-10 py-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            {/* title brand */}
            <div className="flex flex-grow flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-semibold">Evenity</h3>
                <p className="text-sm font-medium text-gray-100">
                  Ease of being together
                </p>
              </div>
              <div className="flex flex-col gap-5 sm:flex-row md:flex-col">
                <img
                  src="./appStore.png"
                  alt="App Store image"
                  className="w-full max-w-[10rem] bg-cover bg-center"
                />
                <img
                  src="./googlePlay.png"
                  alt="Google Play image"
                  className="w-full max-w-[10rem] bg-cover bg-center"
                />
              </div>
            </div>
            {/* navigation */}
            <nav className="flex flex-grow-[2] flex-col justify-between gap-10 sm:flex-row lg:flex-grow">
              <FooterLink footer={EVENITY} />
              <FooterLink footer={FEATURES} />
              <FooterLink footer={COMPANY} />
            </nav>
          </div>
          {/* footer bottom */}
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            {/* social media */}
            <div className="flex items-center gap-8">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a href={social.path} key={index} className="">
                    <Icon className="h-8 w-8 text-gray-300" />
                  </a>
                );
              })}
            </div>
            {/* navigation */}
            <ul className="flex flex-col items-center gap-8 sm:flex-row">
              {FOOTER_BOTTOM.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-sm font-medium leading-4 text-gray-300 transition hover:text-white"
                  >
                    {link.linkName}
                  </a>
                </li>
              ))}
            </ul>
            {/* copyright */}
            <div className="lg:ml-auto">
              <p className="font-medium leading-4 text-gray-300 sm:text-sm">
                Copyright © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
