import { footerIconLinks } from "../data";
import FooterIcons from "./FooterIcons";

function Footer({ isPlaying, isLightMode }) {
  return (
    <footer
      className={isLightMode ? "footer-color-light" : "footer-color"}
      id="contact"
    >
      <div className="footer-container">
        <h2
          className={
            isLightMode
              ? "footer-name uppercase col-light"
              : "footer-name uppercase"
          }
        >
          Made with ❤️ Niladri Ghosh
        </h2>
        <a
          href="mailto:0xniladri@gmail.com"
          className={isLightMode ? "footer-email footer-light" : "footer-email"}
        >
          0xNILADRI@gmail.com
        </a>
        <div className="footer-icons">
          {footerIconLinks.map(
            ({ key, href, classname, sourceImage, altText }) => {
              return (
                <FooterIcons
                  key={key}
                  href={href}
                  classname={classname}
                  sourceImage={sourceImage}
                  altText={altText}
                />
              );
            }
          )}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
