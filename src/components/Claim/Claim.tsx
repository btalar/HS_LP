import React, { ReactNode } from "react";
import { Description, Separator, Title, ButtonWrapper } from "./Claim.styled";
import { Button } from "@nextui-org/react";

export type ClaimType = {
  title?: string | ReactNode;
  description?: string | ReactNode;
  hasSeparator?: boolean;
  buttonPrimaryText?: string;
  buttonPrimaryAction?: () => void;
  buttonSecondaryText?: string;
  buttonSecondaryAction?: () => void;
  theme?: "dark" | "light";
  titleClassName?: string;
  descriptionClassName?: string;
};
export const Claim = ({
  title,
  description,
  hasSeparator,
  buttonPrimaryText,
  buttonPrimaryAction,
  buttonSecondaryText,
  buttonSecondaryAction,
  titleClassName,
  descriptionClassName,
  theme = "light",
}: ClaimType) => (
  <>
    <Title
      className={(theme === "dark" ? "!text-white " : "") + titleClassName}
    >
      {title}
    </Title>
    {hasSeparator && <Separator />}
    {description && (
      <Description
        className={
          (theme === "dark" ? "!text-white " : "") + descriptionClassName
        }
      >
        {description}
      </Description>
    )}
    {buttonPrimaryText ||
      (buttonSecondaryText && (
        <section className="gap-8 flex flex-col md:flex-row">
          {buttonPrimaryText && (
            <Button
              radius="full"
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
                <ButtonWrapper
                  radius="full"
                  onClick={buttonSecondaryAction}
                  size="lg"
                  color="primary"
                >
                  {buttonSecondaryText}
                </ButtonWrapper>
          )}
        </section>
      ))}
  </>
);
