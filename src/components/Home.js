import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    console.log(location.state);
    return (
        <div>
            {location.state.username}-{location.state.password}
        </div>
    )
}
export default Home;