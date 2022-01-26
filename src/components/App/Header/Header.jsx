function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#">
          <img src="logo.svg" alt="Logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
