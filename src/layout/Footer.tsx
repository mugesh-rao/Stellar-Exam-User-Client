import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="px-7 pt-6 pb-3 bg-white">
      <p className="text-[15px] text-[#b4b7bd]">
        COPYRIGHT &copy; 2021{' '}
        <span className="text-[#7367f0]">
          <Link to="/">Mugesh rao</Link>
        </span>
        <span className="hidden sm:inline-block">, All rights Reserved</span>
      </p>
    </footer>
  )
}

export default Footer
