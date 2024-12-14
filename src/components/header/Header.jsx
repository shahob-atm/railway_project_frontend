import styles from "./Header.module.scss";
import SiteLogo from "../siteLogo/SiteLogo.jsx";
import SiteEye from "../siteEye/SiteEye.jsx";
import SiteLanguage from "../siteLanguage/SiteLanguage.jsx";
import SiteTrainSchedule from "../siteTrainSchedule/SiteTrainSchedule.jsx";
import SiteAccount from "../siteAccount/SiteAccount.jsx";

const Header = () => {
    return (
        <>
            <div className={styles._header}>
                <div className={styles._container}>
                    <div className={styles._left_bar}>
                        <SiteLogo />
                    </div>
                    <div className={styles._right_bar}>
                        <SiteEye />
                        <SiteLanguage />
                        <SiteTrainSchedule />
                        <SiteAccount />
                    </div>
                </div>
            </div>
        </>
    );
}

Header.propTypes = {
};

Header.defaultProps = {
};

export default Header;