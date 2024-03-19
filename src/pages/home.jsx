import {useLocation} from "react-router-dom";

const Home =()=>{

    const {state} = useLocation();

    return(<div>{state}</div>)
}

export default Home