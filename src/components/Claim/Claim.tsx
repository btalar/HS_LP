import React from "react";
import {Description, Separator, Title} from "./Claim.styled";
import {Button} from "@nextui-org/react";

type ClaimType= {
    title?: string,
    description?: string,
    hasSeparator?: boolean
    buttonText?: string;
    buttonAction?: () => void;
};
const Claim = ({ title, description, hasSeparator, buttonText, buttonAction }: ClaimType) => (

<>
            <Title>{title}</Title>
            {hasSeparator && <Separator />}
            <Description>
                {description}
            </Description>
            {buttonText && (
            <section className="gap-x-8 flex">
                <Button size="lg" color="warning" variant="shadow">
                    {buttonText}
                </Button>
            </section>
            )}
    </>

    );

export default Claim;
