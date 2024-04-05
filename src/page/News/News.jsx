import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import {useParams} from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const {id} = useParams ()
    return (
         <div>
            <Header></Header>
            <Navbar></Navbar>
        <div className="grid grid-cols-4">
            <div className="col-span-3">
                 <h1 className="text-5xl">News details</h1>
                 <p>{id}</p>
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
        </div>
    );
};

export default News;