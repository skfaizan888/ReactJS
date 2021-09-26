export const ImageGalleryitm=(props)=>{
    return(
        
            <a href={props.wikiUrl} target="_blank">
            <div>
           <table>
                <tr>
                    <td>
                      <img 
                      src={props.imgUrl}
                       alt={props.title}
                        width="150px" />
                    </td>
                    <tr>
                    <td>
                        <b>{props.title}</b>
                    </td>
                </tr>
                </tr>
            </table>
            
        </div>
        </a>

    );
};