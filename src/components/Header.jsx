const Header = () => {
  return (
    <>
      <div className="navbar bg-base-300 nav">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            Password Generator
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <select
                placeholder="Theme"
                data-choose-theme
                className="focus:outline-none h-10 rounded-full px-3 border">
                <option value="dark">Dark</option>
                <option value="black">Black</option>
                <option value="pink">Pink</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
