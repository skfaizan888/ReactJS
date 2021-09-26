
import { ImageGalleryitm } from "./ImageGalleryitm";
export const ImageGallery=()=>{
    return(
        <div>
        <table>
            <tr>
                <td>
              <ImageGalleryitm 
              wikiUrl="https://en.wikipedia.org/wiki/Narendra_Modi"
              imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Narendra_Modi_2021.jpg/330px-Narendra_Modi_2021.jpg"
              title="Modi" />
                </td>
                <td>
                <ImageGalleryitm/>
                </td>
                <td>
                <ImageGalleryitm/>
                </td>
                <td>
                <ImageGalleryitm/>
                </td>
                <td>
                <ImageGalleryitm/>
                </td>
            </tr>
        </table>
        </div>
    )
}