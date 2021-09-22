import { Personalinfo } from "../Components/Home/personalinfo";
import {Professionalinfo} from "../Components/Home/Professionalinfo";
import {ImageGallery} from "../Components/Home/ImageGallery";
import "./Home.css";

export const Home = () =>{
    return(
    <div>
        <table>
            <tr>
                <td>
                <Personalinfo/>
                </td>
                <td>
                <Professionalinfo/>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <ImageGallery/>
                </td>
            </tr>
        </table>
        
    </div>

    )
}
