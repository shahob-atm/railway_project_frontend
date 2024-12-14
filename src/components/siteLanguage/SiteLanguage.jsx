import styles from "./SiteLanguage.module.scss";
import PropTypes from "prop-types";

const SiteLanguage = ({ color }) => {
    return (
        <>
            <div className={styles._site_language_container}>
                <img src={`src/assets/img/svg/siteLanguage/flag.svg`} alt={"flag"} width={25} height={25} />
                <span style={{color: color}}>{"O'zbek"}</span>
            </div>
        </>
    )
}

SiteLanguage.propTypes = {
    color: PropTypes.string,
};

SiteLanguage.defaultProps = {
    color: "",
};

export default SiteLanguage;