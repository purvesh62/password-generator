const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-100 h-12 absolute inset-x-0 bottom-0">
      <aside>
        <p className="text-center font-body text-primary md:text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
            Made with ❤{" "}
            <a href="https://github.com/purvesh62" target="_blank">
              Purvesh Rathod
            </a>
          </span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
