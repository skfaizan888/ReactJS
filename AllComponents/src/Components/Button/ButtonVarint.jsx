import {Button} from "react-bootstrap"
import { Outline } from "./Outline"
import { BlockButton } from "./BlockButton"
import { ButtonTag } from "./ButtonTag"
export const ButtonVarint=()=>{
    return(
      <div>
        <>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>
        </>
        <Outline/>
        <ButtonTag/>
        <BlockButton/>
      </div>
    )
}