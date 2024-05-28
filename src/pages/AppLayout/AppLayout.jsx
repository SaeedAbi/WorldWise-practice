import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import styles from  './AppLayout.module.css'
import Map from "../../Components/Map/Map.jsx";

const AppLayout = () => {
    return (
        <div className={styles.app}>
            <Sidebar/>
            <Map/>
        </div>
    );
};

export default AppLayout;