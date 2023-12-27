function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto bg-gray-50 max-w-7xl sm:px-6 lg:px-16">
        <div className="flex flex-wrap items-baseline lg:justify-center">
          <span className="mt-2 text-sm font-light text-gray-500">
            Copyright © 2023 - 2024
            <a
              href="https://github.com/itsteatv"
              target="_blank"
              className="mx-2 text-emerald-500 hover:text-emerald-600 duration-300"
              rel="noopener noreferrer"
            >
              @itsteatv
            </a>
            <a
              href="https://github.com/amirhosseinforouhar"
              target="_blank"
              className="mr-2 text-emerald-500 hover:text-emerald-600 duration-300"
              rel="noopener noreferrer"
            >
              @amirhosseinforouhar
            </a>
            . Since 2023
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
