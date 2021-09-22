import { Personalinfo } from "./Home/Personalinfo";
import { Professionalinfo } from "./Home/Professionalinfo";
import {ImageGallery} from "./Home/ImageGallery"
import "./Home.css";

export const Home = () => {
    return (
        <div>
            
            <table>
                <tr>
                    <td>
                        <Personalinfo />
                    </td>
                    <td>
                        <Professionalinfo />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <ImageGallery/>
                    </td>
                </tr>
            </table>
            {/* <Personalinfo />
            <Professionalinfo /> */}
        </div>
    )
};
