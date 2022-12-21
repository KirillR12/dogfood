import "./footer.css"

const year = new Date().getFullYear();
const Footer = () => {
   return (
<footer>
<span className="footer__copy">C {year} Безопасный сайт</span>
</footer>
   ) 
}

export {
    Footer
}