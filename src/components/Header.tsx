import React from 'react'

const ThemeToggle = () => {
  return (
    <button
      // onClick={toggleTheme}
      role="switch"
      // aria-checked={isDarkTheme()}
      aria-label="Toggle Theme"
      className="c-theme-toggle"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37256 24 0 18.6274 0 12C0 5.37256 5.37256 0 12 0C18.6274 0 24 5.37256 24 12ZM21.5 12C21.5 17.2467 17.2468 21.5 12 21.5C6.75317 21.5 2.5 17.2467 2.5 12C2.5 6.7533 6.75317 2.5 12 2.5C17.2468 2.5 21.5 6.7533 21.5 12Z"
        />
        <g clipPath="url(#dark-theme-icon-clip-path)">
          <path d="M0 0H24V24H0V0Z" id="dark-theme-transition-path" />
        </g>
        <defs>
          <clipPath id="dark-theme-icon-clip-path">
            <circle cx="12" cy="12" r="12" fill="none" />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}

const Header = () => {
  return (
    <div className="w-full h-16 bg-white shadow-md flex justify-between items-center px-4">
      <div className="w-1/4">
        <div className="text-center">
          <a href="#">Logo</a>
        </div>
      </div>
      <div className="w-2/4">
        <nav className="px-4 py-2 h-full">
          <ul className="h-full flex justify-between items-center">
            <li className="p-4 font-sans text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-black">
              <a href="/">Web</a>
            </li>
            <li className="p-4 font-sans text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-black">
              Business
            </li>
            <li className="p-4 font-sans text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-black">
              Design
            </li>
            <li className="p-4 font-sans text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-black">
              Technology
            </li>
            <li className="p-4 font-sans text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-black">
              Football
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-1/4 text-center">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Header
