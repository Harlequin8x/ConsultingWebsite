import { headerLogo } from '../assets/images/index'
import { copyright } from '../assets/images/index'
import { socialMedia, footerLinks } from '../constants/index'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        
        {/* Linker Bereich: Logo, Beschreibung und Social Media */}
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={headerLogo}
              width={150}
              height={46}
              alt="Logo"
            />
          </a>

          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">
            Finanzberatung Finanzberatung Finanzberatung Finanzberatung.
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <a
                href={icon.href}
                key={icon.alt}
              >
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>   

        {/* Rechter Bereich: Footer Links */}
        <div className="flex flex-wrap gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Copyright Bereich */}
      <div className="flex justify-end text-white-400 mt-6 max-sm:flex-col max-sm:items-center">
        <div className="flex items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyright}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <div className="text-white">
            <p>Ronney Bawa 2024</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
