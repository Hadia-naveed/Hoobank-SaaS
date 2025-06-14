import React from 'react';
import { socialMedia, footerLinks } from '../constraints';
import { logo } from '../assets';

const Footer = () => {
  return (
    <section className='flex items-center justify-center flex-col mt-7 px-6 md:px-20 py-8'>
      {/* Top Footer */}
      <div className='flex flex-col md:flex-row justify-between w-full mb-8 gap-10'>
        {/* Logo + Description */}
        <div className='flex-1'>
          <img src={logo} alt="logo" className='w-[240px] h-[52px] object-contain' />
          <p className='font-poppins font-normal text-gray-300 text-[18px] leading-[24px] mt-4'>
            A new way to make the Payments <br className="hidden md:block" />
            reliable, secure and easy.
          </p>
        </div>

        {/* Footer Links */}
        <div className='flex-[1.5] w-full flex flex-wrap justify-between'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="min-w-[150px] mb-4">
              <h4 className='font-poppins font-medium text-[18px] leading-[24px] text-white mb-2'>
                {footerLink.title}
              </h4>
              <ul className='mt-4'>
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[15px] text-gray-400 hover:text-cyan-400 cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-3" : ""
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t border-t-[#3F3E45] gap-4">
        <p className="font-poppins font-normal text-center text-[14px] text-white">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>

        <div className="flex flex-row gap-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="w-[18px] h-[18px] object-contain cursor-pointer"
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
