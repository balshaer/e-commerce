import NavbarItems from "./navbar_items/NavbarItems";

export default function Navbar() {
  return (
    <header className="bg-[#fafafa]  shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12"></div>
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <NavbarItems />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
