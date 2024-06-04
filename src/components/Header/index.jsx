// import something here

function Header(props) {
  // console.log(props.children);
  return (
    <header className="header">
      <h1>Luke</h1>
      {props.children}
    </header>
  );
}

export default Header;
