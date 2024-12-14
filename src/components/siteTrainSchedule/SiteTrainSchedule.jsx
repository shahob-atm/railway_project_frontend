import { IoTimeOutline } from "react-icons/io5";
import styles from "./SiteTrainSchedule.module.scss";
import PropTypes from "prop-types";

const SiteTrainSchedule = ({ color }) => {
    return (
        <>
            <div className={styles._site_train_schedule_container}>
                <IoTimeOutline style={{width: "20px", height: "20px", color: color}} />
                <span style={{color: color}}>{"Poyezdlar jadvali"}</span>
            </div>
        </>
    )
}

SiteTrainSchedule.propTypes = {
    color: PropTypes.string,
};

SiteTrainSchedule.defaultProps = {
    color: "",
};

export default SiteTrainSchedule;