"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState, useTransition } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { contactSchema } from "@/schemas";
import { contactAction } from "@/actions";

const Contact = () => {
  const [isPending, startTransition] = useTransition();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  console.log(recaptchaToken);
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setRecaptchaToken(null);
    startTransition(() => {
      contactAction(data, recaptchaToken as string)
        .then((response) => {
          if ("error" in response) {
            toast({
              variant: "destructive",
              title: "Error",
              description: response.error,
              duration: 6000,
            });
          } else if ("success" in response) {
            toast({
              title: "Éxito",
              description: response.success,
              duration: 6000,
            });
            form.reset();
          }
        })
        .catch((error) => {
          if (error instanceof Error) {
            toast({
              variant: "destructive",
              title: "Error",
              description: error.message,
              duration: 6000,
            });
          }
        })
        .finally(() => {
          console.log("resetting recaptcha");
          recaptchaRef.current?.reset();
        });
    });
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8 lg:flex lg:flex-col lg:justify-between lg:space-y-0">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Nombre</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Juan Pérez"
                        type="text"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">
                      Correo Electrónico
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="juanperez@email.com"
                        type="email"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Teléfono</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="12345678"
                        type="tel"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="h-full max-h-full overflow-y-hidden">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Escribe tu mensaje"
                        className="resize-none h-32 lg:h-72 "
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center sm:flex-row justify-between">
            <Button
              type="submit"
              className=""
              disabled={!recaptchaToken || isPending}
            >
              Enviar
            </Button>
            <div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={
                  process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY as
                    | string
                    | ""
                }
                onChange={(token) => setRecaptchaToken(token)}
                onExpired={handleRecaptchaExpired}
                onError={() => recaptchaRef.current?.reset()}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Contact;
