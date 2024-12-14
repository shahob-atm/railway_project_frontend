import PropTypes from 'prop-types';
import styles from './SiteEye.module.scss';
import { MdOutlineRemoveRedEye } from "react-icons/md";

function SiteEye() {
    return (
        <>
            <div className={styles._site_eye_container}>
                <div className={styles._site_eye_center}>
                    <MdOutlineRemoveRedEye style={{width: "20px", height: "20px"}} />
                </div>
            </div>
        </>
    );
}

SiteEye.propTypes = {
};

SiteEye.defaultProps = {
};

export default SiteEye;