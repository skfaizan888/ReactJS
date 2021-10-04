import { ImageGallaryItem } from "./ImageGallaryItem";
import {BollywoodData} from "../../State/Reducer/bollywoodData";

export const ImageGallery= ( ) => {
  console.log(BollywoodData.data); 
  return (
    <table>
      <tr>
        {
          BollywoodData.data.map((item) =>{
            <td>
              <ImageGallaryItem 
              wikiUrl={item.wikiUrl}
              imgUrl={item.imgUrl}
              title={item.title}
              />
            </td>
          }
          )
        }
                 
                    
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
        
    )
}