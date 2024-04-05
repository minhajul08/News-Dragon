import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakeingNews from "./BrakeingNews";
import {useLoaderData} from 'react-router-dom';
import NewsCard from "./NewsCard";


const Home = () => {
    const news =  useLoaderData ()
    console.log (news)
    return(
        <div>
            <Header></Header>
            <BrakeingNews></BrakeingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    {
                        news.map (aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                    </div>
                <div>
                <RightSideNav></RightSideNav>
                    
                </div>
            </div>
        </div>
         
    );
};

export default Home;