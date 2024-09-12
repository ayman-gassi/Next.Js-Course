import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-gray-100 border-b border-gray-300">
      <Link href="/" className="text-blue-500 font-semibold mx-4 hover:text-blue-700 transition-colors duration-300">
        Home
      </Link>
      <Link href="/about" className="text-blue-500 font-semibold mx-4 hover:text-blue-700 transition-colors duration-300">
        About
      </Link>
    </div>
  );
};

export default Header;
