import React from "react";
import { Description, Separator, Title } from "./Claim.styled";
import { Button } from "@nextui-org/react";

export type ClaimType = {
  title?: string;
  description?: string;
  hasSeparator?: boolean;
  buttonPrimaryText?: string;
  buttonPrimaryAction?: () => void;
  buttonSecondaryText?: string;
  buttonSecondaryAction?: () => void;
};
export const Claim = ({
  title,
  description,
  hasSeparator,
  buttonPrimaryText,
  buttonPrimaryAction,
  buttonSecondaryText,
  buttonSecondaryAction,
}: ClaimType) => (
  <>
    <Title>{title}</Title>
    {hasSeparator && <Separator />}
    <Description>{description}</Description>
    <section className="gap-8 flex flex-col md:flex-row">
      {buttonPrimaryText && (
        <Button
          onClick={buttonPrimaryAction}
          size="lg"
          color="warning"
          variant="flat"
        >
          {buttonPrimaryText}
        </Button>
      )}
      {buttonSecondaryText && (
        <Button
          onClick={buttonPrimaryAction}
          size="lg"
          color="primary"
          variant="flat"
        >
          {buttonSecondaryText}
        </Button>
      )}
    </section>
  </>
);
