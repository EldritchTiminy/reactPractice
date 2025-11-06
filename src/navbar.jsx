let navigationComp = (
  <div id="navigation">
    <ul id="navLinks">
      <li className="navLink">Homepage</li>
      <li className="navLink">Store</li>
      <li className="navLink">About</li>
      <li className="navLink">Contact Us</li>
      <li className="navLink">I am JSX (2 + 3)</li>
      <li className="navLink">I am JS in JSX ({2 + 3})</li>
      <li className="navLink">This is a variable test ({40/2})</li>
    </ul>
  </div>
);

function NavBar () {
  return (
    <>
      {navigationComp}
    </>
  );
};

export {NavBar};