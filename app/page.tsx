"use client"

import Image from "next/image";
import * as React from "react"
import { useState } from 'react'
import Headernya from "./page_components/sections/header/header";
import NyamuraIntroduce from "./page_components/sections/introduce/mainintroduce";
import NyamuraStreamGraph from "./page_components/sections/graphic/maingraphsection";
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
} from "@/components/ui/alert-dialog"




export default function Home() {
  return (
    <>
      <AlertDialog>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-2xl font-bold">
              Внимание!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-semibold text-center text-2sm">
              Этот сайт создан фанатом и не являеться официальным ресурсом Нямуры.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex !justify-center">
            <AlertDialogAction>
              Понятно
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <>
        <Headernya />


        <main className="flex flex-wrap">
          <NyamuraIntroduce/>
          <NyamuraStreamGraph />
        </main>


        <footer className="bg-white grid">
          <Image src="/MEWO.webp" alt="мяво" width={64} height={64} className="justify-self-end bottom-0" unoptimized />
        </footer>
      </>
    </>
  );
}
