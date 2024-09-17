import { headerLogo } from '../assets/images'

const Nav = () => {
  return (
    <header className="padding-x py-8  z-10 w-full">
      <nav className="flex justify-between items-center max-container border-b-4 border-black pb-4 max-width-navbar">
        <a href="/" className="flex items-center gap-4">
          <img
            src={headerLogo}
            alt="Logo"
            width={100}
            height={20}
          />   
          <p className="text-black text-[18px] font-bold cursor-pointer">
            Ronney Bawa | Financial Guide 
          </p>
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ml-96">
          
        </ul>
      </nav>
    </header>
  )
}

export default Nav
