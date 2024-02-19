function FooterIcons({ href, classname, sourceImage, altText }) {
  return (
    <a href={href}>
      <img className={classname} src={sourceImage} alt={altText} />
    </a>
  );
}
export default FooterIcons;
