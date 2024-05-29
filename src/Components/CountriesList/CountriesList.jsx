import Spinner from "../Spinner/Spinner.jsx";
import Message from "../Message/Message.jsx";
import styles from "./CountryList.module.css"
import CountryItem from "../CountryItem/CountryItem.jsx";

const CountriesList = ({isLoading,cities}) => {
    if (isLoading) return <Spinner/>

    if (!cities.length) return <Message message='Add your first city by clicking on map'/>

    // const countries=cities.reduce((arr,city)=> {
    //         if (!arr.map(el => el.country).include(city.country))
    //             return [...arr,{country:city.country,emoji: city.emoji}]
    //     else return arr
    //     },[]);
    return (
        <ul className={styles.countryList}>
            {
                cities.map(city=><CountryItem city={city} key={city.id}/>)
            }
        </ul>
    );
};

export default CountriesList;