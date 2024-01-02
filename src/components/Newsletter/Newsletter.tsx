import { Claim } from "../Claim";
import { Button, cn, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import instance from "../../axios";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { AxiosError } from "axios";
import { actionAddSubscriber } from "../../actions";
import { Checkbox } from "@nextui-org/react";
type Inputs = {
  email: string;
  policy: boolean;
};

export const Newsletter = () => {
  const [formState, setFormState] = useState<
    "ready" | "loading" | "success" | "error"
  >("ready");

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, policy }) => {
    console.log({ policy });
    if (!policy) {
      toast.error("Konieczne jest zaakceptowanie polityki prywatności");
      setFormState("error");
    }

    try {
      setFormState("loading");
      const { status } = await actionAddSubscriber(email);
      if (status === 200) {
        toast("Zapisano do newslettera");
        setFormState("success");
      }
    } catch (err) {
      //@ts-expect-error
      console.log(err.response.data.message);
      toast.error(err.response.data.message || "Błąd");
      setFormState("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-1 flex-col gap-[40px] md:gap-[80px]"
    >
      <Claim
        title="Dołącz do newslettera"
        titleClassName="text-center md:text-left text-[32px]"
      />
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-row  gap-4">
          <div className="flex flex-1 flex-col">
            <Input
              classNames={{
                innerWrapper:
                  "inline-flex w-full h-full box-border items-center",
              }}
              {...register("email")}
              radius="full"
              size="sm"
              label="Email"
              variant="bordered"
            />
          </div>
          <Button
            type="submit"
            className={cn(
              `text-[12px] text-white bg-black rounded-full`,
              formState === "error" && "bg-red-500",
              formState === "success" && "bg-green-500",
            )}
            size="lg"
            radius="sm"
          >
            {
              {
                ready: <>Wyślij</>,
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
                success: <>Wysłano</>,
                error: <>Wyślij Ponownie</>,
              }[formState]
            }
          </Button>
        </div>
        <Controller
          name="policy"
          control={control}
          render={({ field }) => {
            console.log(field);
            return (
              <Checkbox value={field.value} onChange={field.onChange}>
                Polityka prywatności
              </Checkbox>
            );
          }}
        />
      </div>
    </form>
  );
};
