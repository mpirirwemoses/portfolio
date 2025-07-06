

const Navbar = () => {
    return (  <header className="bg-gradient-to-r sticky top-0 from-purple-900 z-10 via-blue-500 to-purple text-white py-6">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-8">
              <img className="rounded-full ml-8 h-[55px] w-[55px] object-cover " src ={image67} alt="logo"/>
            <h1 className="text-3xl font-bold">Moses M</h1>
            </div>
            <nav>
              <ul className="flex space-x-8  items-center">
                <li><a href="#about" className="hover:underline px-3 hover:bg-blue-500 py-2 italic rounded text-2xl">About</a></li>
                <li><a href="#projects" className="hover:underline hover:bg-blue-500 px-3 py-2 italic rounded text-2xl">Projects</a></li>
                <li><a href="#contact" className="hover:underline hover:bg-blue-500 px-3 py-2 italic rounded text-2xl">Contact</a></li>
                <li><a href="#experience" className="hover:underline hover:bg-blue-500 px-3 py-2 italic rounded text-2xl">Experience</a></li>
            <Link path to= "/contact" >   <li><button className="px-4 py-2 border border-transparent hover:bg-purple-400 hover:text-black hover:border-blue-500 rounded-full bg-purple-700 text-white text-lg">Hire Me</button></li></Link>
              </ul>
            </nav>
          </div>
        </header> );
}
 
export default Navbar;