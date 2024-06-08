import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import styles from  './AppLayout.module.css'
import Map from "../../Components/Map/Map.jsx";
import User from "../../Components/User/User.jsx";

const AppLayout = () => {
    return (
        <div className={styles.app}>
            <Sidebar/>
            <Map/>
            <User/>
        </div>
    );
};

export default AppLayout;