import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index.js';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const isActive = (slug) => location.pathname === slug;

  return (
    <header className='py-3 shadow-md bg-zinc-700 text-white relative z-50'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link to='/' className='inline-block mr-4'>
              <Logo width='70px' className="filter brightness-125" /> {/* Slightly brightened logo for dark background */}
            </Link>
            <span className='hidden sm:block text-xl font-bold tracking-tight text-white'>BlogSphere</span>
          </div>

          {/* Mobile Menu Button */}
          <div className='sm:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors duration-200'
              aria-label="Toggle navigation menu"
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                {isMenuOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                )}
              </svg>
            </button>
          </div>

          {/* Desktop and Mobile Menu */}
          <ul className={`
            flex flex-col sm:flex-row sm:ml-auto absolute sm:static
            top-full left-0 w-full sm:w-auto bg-zinc-800 sm:bg-transparent shadow-lg sm:shadow-none
            py-4 sm:py-0 transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
            z-40 sm:z-auto
          `}>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className='mb-2 sm:mb-0 sm:ml-4'>
                  <button
                    onClick={() => { navigate(item.slug); setIsMenuOpen(false); }}
                    className={`
                      block w-full text-left px-5 py-2 rounded-full font-semibold text-base
                      transition-colors duration-200
                      ${isActive(item.slug) ? 'bg-blue-600 text-white' : 'text-white hover:bg-zinc-700'}
                      sm:inline-block sm:w-auto
                    `}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='mt-2 sm:mt-0 sm:ml-4'>
                <LogoutBtn className='w-full sm:w-auto' />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;