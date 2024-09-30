import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-[#2d3142] text-lg font-semibold sm:text-2lg rounded md:p-0 hover:text-[#C5705D] hover:border-b-2 hover:delay-200 transition-all ">
      {title} 
    </Link>
  );
};

export default NavLink;