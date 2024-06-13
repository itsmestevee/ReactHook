import { Button } from "flowbite-react";

const ButtonComponent = ({onclick, title}) => {
  return (
    <div>
      <Button onClick={onclick} gradientDuoTone="greenToBlue">{title}</Button>
    </div>
  )
}

export default ButtonComponent
