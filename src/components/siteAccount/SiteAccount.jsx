import PropTypes from "prop-types";
import styles from "./SiteAccount.module.scss";
import { FaRegUserCircle } from "react-icons/fa";

const SiteAccount = ({ color }) => {
    return (
        <>
            <div className={styles._site_account_container}>
                <FaRegUserCircle style={{ color: color, width: "20px", height: "20px" }} />
                <span style={{color: color}}>{"Kirish"}</span>
            </div>
        </>
    )
}

SiteAccount.propTypes = {
    color: PropTypes.string,
};

SiteAccount.defaultProps = {
    color: "",
};

export default SiteAccount;