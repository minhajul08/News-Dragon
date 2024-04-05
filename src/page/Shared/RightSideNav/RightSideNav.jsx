import { IoLogoGoogle , IoLogoGithub} from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-2 mb-6">
                <h2>Login with</h2>
                <button className="btn btn-outline w-full">
                    <IoLogoGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                <IoLogoGithub />
                    Github
                </button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-3xl">Find us on</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                <FaFacebook className="mr-3" />
                <span>Facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center border-x " href="">
                <FaTwitter className="mr-3" />
                <span>Twitter</span>
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                <FaInstagram className="mr-3" />
                <span>Instagram</span>
                </a>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-3xl">Q zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                </div>
        </div>
    );
};

export default RightSideNav;