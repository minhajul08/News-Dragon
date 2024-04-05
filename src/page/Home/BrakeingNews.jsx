import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BrakeingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Braking News</button>
            <Marquee speed={150} pauseOnHover={true}>
            <Link className="mx-12" to="/"> I can be a React component, multiple React components, or just some text....</Link>
            <Link className="mx-12" to="/"> I can be a React component, multiple React components, or just some text....</Link>
            <Link className="mx-12" to="/"> I can be a React component, multiple React components, or just some text....</Link>
            </Marquee>
        </div>
    );
};

export default BrakeingNews;