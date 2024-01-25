import { Button, cn, Input, Textarea } from "@nextui-org/react";
import { ContactForm as StyledContactForm } from "../../modules/Footer/Footer.styled";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { actionSendEmail } from "../../actions";
import {useIntl} from "gatsby-plugin-intl";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export const ContactForm = () => {
  const [formState, setFormState] = useState<
    "ready" | "loading" | "success" | "error"
  >("ready");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (Object.values(data).some((e) => e === "")) {
      toast.error("Uzupełnij brakujące pola");
      return;
    }
    if (data.phoneNumber.length < 9) {
      toast.error("Numer telefonu jest za krótki");
      return;
    }
    try {
      setFormState("loading");
      const { status } = await actionSendEmail(data);
      if (status === 200) {
        toast.success("Dziękujemy za wiadomość wkrótce się odezwiemy");
        setFormState("success");
      }
    } catch (err) {
      toast.error("Ups... coś poszło nie tak");
      setFormState("error");
    }
  };
  const intl = useIntl();
  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col md:flex-row  justify-around md:gap-3 gap-[30px]">
          <Input
            {...register("firstName")}
            classNames={{
              innerWrapper: "inline-flex w-full h-full box-border items-center",
            }}
            variant="bordered"
            labelPlacement="inside"
            label={intl.formatMessage({ id: 'input.name' })}
            radius="full"
          />
          <Input
            {...register("lastName")}
            classNames={{
              innerWrapper: "inline-flex w-full h-full box-border items-center",
            }}
            variant="bordered"
            labelPlacement="inside"
            label={intl.formatMessage({ id: 'input.surname' })}
            radius="full"
          />
        </div>
        <div className="flex flex-col md:flex-row  justify-around md:gap-3 gap-[30px]">
          <Input
            {...register("email")}
            classNames={{
              innerWrapper: "inline-flex w-full h-full box-border items-center",
            }}
            variant="bordered"
            type="email"
            labelPlacement="inside"
            label={intl.formatMessage({ id: 'input.email' })}
            radius="full"
          />
          <Input
            classNames={{
              innerWrapper: "inline-flex w-full h-full box-border items-center",
            }}
            {...register("phoneNumber")}
            variant="bordered"
            labelPlacement="inside"
            label={intl.formatMessage({ id: 'input.phone' })}
            radius="full"
          />
        </div>
        <div>
          <Textarea
            classNames={{
              innerWrapper: "inline-flex w-full h-full box-border items-center",
            }}
            {...register("message")}
            className="textarea"
            variant="bordered"
            labelPlacement="inside"
            label={intl.formatMessage({ id: 'input.message' })}
            radius="full"
          />
        </div>
        <div className="flex flex-row gap-[20px] items-center md:gap-[30px]">
          <Button
            type="submit"
            radius="sm"
            className={cn(
              "text-white !borer-none bg-primary rounded-full",
              formState === "error" && "bg-red-500",
              formState === "success" && "bg-green-500",
            )}
          >
            {
              {
                ready: <> {intl.formatMessage({ id: 'btn.send' })}</>,
                loading: (
                  <RotatingLines
                    visible={true}
                    height="96px"
                    width="96"
                    strokeColor="white"
                    strokeWidth="3"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                  />
                ),
                success: <>{intl.formatMessage({ id: 'btn.send' })}</>,
                error: <>:( Please again</>,
              }[formState]
            }
          </Button>
          <p>
            {intl.formatMessage({ id: 'policy.text' })}
          </p>
        </div>
      </div>
    </StyledContactForm>
  );
};
