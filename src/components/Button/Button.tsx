import React, {ReactNode} from "react";
import { BtnWrap } from "./Button.styled";


export type ButtonType = {
    children : ReactNode
};
export const Button = ({ children }: ButtonType) => (
    <BtnWrap
        radius="full"
        onClick={() => console.log('sas')}
        size="sm"
        variant="faded"
        color= "primary"
    >
        {children}
    </BtnWrap>


);
