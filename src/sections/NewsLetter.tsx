"use client";
import Section from "@/components/Section";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { newsletterAction } from "@/actions";
import { toast } from "@/hooks/use-toast";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleEmailSubscription = () => {
    startTransition(() => {
      newsletterAction({ email }).then((response) => {
        console.log(response);
        if (!response) return;
        if (response.error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: response.error,
            duration: 5000,
          });
          return;
        }
        toast({
          title: "¡Gracias por suscribirte!",
          description:
            "Recibirás un correo electrónico de confirmación en breve.",
          duration: 5000,
        });
        setEmail("");
      });
    });
  };

  return (
    <Section padding="py-12">
      <div className="bg-card py-20 px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 text-center text-blue-950 dark:text-yellow-500 font-bold capitalize">
          Suscribete a nuestro boletín de noticias
        </h2>
        <p className="text-base lg:text-lg mb-4 text-center">
          Recibe las últimas noticias y ofertas directamente en tu bandeja de
          entrada.
        </p>
        <Input
          type="email"
          placeholder="Tu correo electrónico"
          name="email"
          className="w-full max-w-[300px] md:w-[350px] md:max-w-[350px] lg:w-[450px] lg:max-w-[450px] py-6 rounded-3xl px-4 text-base mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="default"
              className="px-12 py-6 rounded-3xl bg-blue-950 dark:bg-yellow-500 dark:hover:bg-white"
              disabled={isPending}
            >
              Suscribirse
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                ¿Estás seguro de que quieres suscribirte?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Al suscribirte, aceptas recibir correos electrónicos de nuestra
                empresa. Puedes cancelar tu suscripción en cualquier momento.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleEmailSubscription}>
                Continuar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Section>
  );
};

export default NewsLetter;
