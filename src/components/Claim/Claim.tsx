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
  theme?: "dark" | "light";
};
export const Claim = ({
  title,
  description,
  hasSeparator,
  buttonPrimaryText,
  buttonPrimaryAction,
  buttonSecondaryText,
  theme = "light",
}: ClaimType) => (
  <>
    <Title className={theme === "dark" ? "!text-white" : ""}>{title}</Title>
    {hasSeparator && <Separator />}
    {description && (
      <Description className={theme === "dark" ? "!text-white" : ""}>
        {description}
      </Description>
    )}
    {buttonPrimaryText ||
      (buttonSecondaryText && (
        <section className="gap-8 flex flex-col md:flex-row">
          {buttonPrimaryText && (
            <Button
              radius="sm"
              onClick={buttonPrimaryAction}
              size="lg"
              color="secondary"
              className={"text-black border-primary bg-secondary"}
              variant="bordered"
            >
              {buttonPrimaryText}
            </Button>
          )}
          {buttonSecondaryText && (
            <Button
              radius="sm"
              onClick={buttonPrimaryAction}
              size="lg"
              color="primary"
            >
              {buttonSecondaryText}
            </Button>
          )}
        </section>
      ))}
  </>
);
