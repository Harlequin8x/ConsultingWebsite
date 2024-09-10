import { headerLogo } from '../assets/images/index'
import { copyright } from '../assets/images/index'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={headerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">
            Finanzberatung Finanzberatung Finanzberatung Finanzberatung.
          </p>
        </div>

        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start gap-2 font-montserrat cursor-pointer">
            <img
              src={copyright}
              alt="copy right sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <div className="text-white">
            <p>Ronney Bawa 2024.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
