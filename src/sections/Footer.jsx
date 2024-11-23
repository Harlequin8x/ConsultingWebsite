import { headerLogo } from '../assets/images/index'
import { copyright } from '../assets/images/index'
import { socialMedia, footerLinks } from '../constants/index'
import { energy, karriere, mitNORM1, mitNORM2, personal } from '../assets/icons'

const Footer = () => {
  return (
    <footer className="max-container bg-beige">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        
        {/* Footer left side */}
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={headerLogo}
              width={150}
              height={46}
              alt="Logo"
            />
          </a>

          <p className="mt-6 leading-7 font-montserrat text-gray-800 sm:max-w-sm font-bold text-2xl">
            Dein Financial Guide
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <a
                href={icon.href}
                key={icon.alt}
              >
                <div className="flex justify-center items-center w-12 h-12 bg-gray-200 rounded-full">
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

        {/* Footer mid */}
        <div className="flex flex-col items-center gap-14 mt-2">
          <div className="flex justify-center gap-10">
            <a href="https://www.mitnorm.de" target="_blank" rel="noopener noreferrer">
              <img src={mitNORM2} alt="MitNORM2 Icon" width={200} height={150} />
            </a>            
            <a href="https://www.daskarriereinstitut.de/de" target="_blank" rel="noopener noreferrer">
              <img src={karriere} alt="Karriere Icon" width={200} height={200} />
            </a>
            <a href="https://www.wirpersonalberater.de/" target="_blank" rel="noopener noreferrer">
              <img src={personal} alt="Personal Icon" width={200} height={150} />
            </a>
          </div>
          <div className="flex justify-center gap-10">
            <a href="https://www.energyfinance.de/" target="_blank" rel="noopener noreferrer">
              <img src={energy} alt="Energy Icon" width={200} height={200} />
            </a>
            <a href="https://www.mitnormfirmenberatung.de" target="_blank" rel="noopener noreferrer">
              <img src={mitNORM1} alt="MitNORM1 Icon" width={200} height={150} />
            </a>            
          </div>
        </div>

        {/* Footer right side */}
        <div className="flex flex-wrap gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-gray-800 font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-gray-800 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
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
      <div className="flex justify-end text-gray-600 mt-6 max-sm:flex-col max-sm:items-center">
        <div className="flex items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyright}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <div className="text-gray-800">
            <p>Ronney Bawa 2024</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
