import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import GridContainer from "@/components/GridContainer/GridContainer";
import EventCards from "@/components/EventCards/EventCards";
import Banner from "@/components/Banner/Banner";

const inter = Inter({ subsets: ["latin"] });

const cardData = [
  {
    image: "./images/cards/rocky_horror.svg",
    title: "The Rocky Horror Tribute Show",
    subTitle: `The UK's Leading Premier tribute to the hit stage show and classic 1975 film.`,
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
  {
    image: "./images/cards/cabare.svg",
    title: "The Rocky Horror Tribute Show",
    subTitle: `The UK's Leading Premier tribute to the hit stage show and classic 1975 film.`,
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
  {
    image: "./images/cards/carniva.svg",
    title: "The Rocky Horror Tribute Show",
    subTitle: `The UK's Leading Premier tribute to the hit stage show and classic 1975 film.`,
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
  {
    image: "./images/cards/rocky_horror.svg",
    title: "The Rocky Horror Tribute Show",
    subTitle: `The UK's Leading Premier tribute to the hit stage show and classic 1975 film.`,
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
  {
    image: "./images/cards/cabare.svg",
    title: "The Rocky Horror Tribute Show",
    subTitle: `The UK's Leading Premier tribute to the hit stage show and classic 1975 film.`,
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
  {
    image: "./images/cards/carniva.svg",
    title: "The Rocky Horror Tribute Show",
    subTitle: `The UK's Leading Premier tribute to the hit stage show and classic 1975 film.`,
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
  {
    image: "./images/cards/rocky_horror.svg",
    title: "The Rocky Horror Tribute Show",
    subTitle: `The UK's Leading Premier tribute to the hit stage show and classic 1975 film.`,
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
  {
    image: "./images/cards/cabare.svg",
    title: "The Rocky Horror Tribute Show",
    subTitle: `The UK's Leading Premier tribute to the hit stage show and classic 1975 film.`,
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
  {
    image: "./images/cards/carniva.svg",
    title: "The Rocky Horror Tribute Show",
    subTitle: `The UK's Leading Premier tribute to the hit stage show and classic 1975 film.`,
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
];

export default function Home() {
  return (
    <>
      <Banner />
      <GridContainer
        cardData={cardData}
        title={`What's On At Glasgow's Coolest Event Space.`}
        btnText='View All'
        customClass={styles.gridContainer}
      />
      {/* <EventCards/> */}
      {/* <EventCards /> */}
    </>
  );
}
