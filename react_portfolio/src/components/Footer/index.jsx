function Footer() {
  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github iconList",
      link: "https://github.com/",
    },
    {
      name: "fab fa-linkedin iconList",
      link: "https://www.linkedin.com/",
    },
    {
      name: "fab fa-stack-overflow iconList",
      link: "https://stackoverflow.com/",
    },
  ];

  return (
    <footer className="footer">
      {icons.map((icon) => (
        <a className="iconList"
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
}

export default Footer;
