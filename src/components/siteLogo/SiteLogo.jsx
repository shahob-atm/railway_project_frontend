import styles from "./SiteLogo.module.scss";
import PropTypes from "prop-types";

const SiteLogo = ({ color }) => {
    return (
        <>
            <div className={styles._site_logo_container} style={{color: color}}>
                <img src={`src/assets/img/svg/siteLogo/logo.svg`} alt="Site Logo" />
                <span className={styles._site_logo_text}>
                    <span className={styles._site_logo_text_top}>{"O’ZBEKISTON TEMIR YO’LLARI"}</span>
                    <span className={styles._site_logo_text_bottom}>{"AKSIYADORLIK JAMIYATI"}</span>
                </span>
            </div>
        </>
    )
};

SiteLogo.propTypes = {
    color: PropTypes.string,
};

SiteLogo.defaultProps = {
    color: "",
};

export default SiteLogo;