import DeafultCard from "@/components/DefaultCard/DefaultCard";
import GridContainer from "@/components/GridContainer/GridContainer";
import Title from "@/components/Title/Title";
import styles from "./BookVenue.module.scss";

const cardData = [
  {
    image: "./images/bookvenue/wine.svg",
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
  {
    image: "./images/bookvenue/juice.svg",
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
  {
    image: "./images/bookvenue/ice-cream.svg",
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
  {
    image: "./images/bookvenue/curry.svg",
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
  {
    image: "./images/bookvenue/cracker.svg",
    description:
      "The Rocky Horror Tribute Show promises to be one of the most enjoyable interactive theatre experiences you will ever see. Join us for some spooky cocktails",
    amount: 17,
    showDate: "10th December 2022",
  },
];

const BookVenue = () => {
  return (
    <div className={styles.BookVenueWrapper}>
      <div>
        <Title
          text="At 18 Candelriggs we make it happen"
          customClass={styles.title}
        />
        <div className={styles.bookVenue}>
          <DeafultCard
            image="./images/venue-one.svg"
            customClass={styles.bookVenueOne}
          />
          <DeafultCard
            image="./images/venue-two.svg"
            customClass={styles.bookVenueTwo}
          />
        </div>
      </div>
      
      <div className={styles.messImageWrapper}>
        <Title text='Book Venue' />
        <img src="./images/mess.svg" alt="mess logo"/>
      </div>

      <div className={styles.collection}>
        <GridContainer cardData={cardData} customClass={styles.verticleGrid} />
        <div className={styles.info}>
          <p>
            A one-stop cabaret lounge in the heart of Merchant City, 18
            Candleriggs (formerly known as Wild Cabaret) knows no bounds when it
            comes to unique dabbles, daring nights and dashing shows.
          </p>
          <p>
            Echoing its eccentric entertainment, the decor is markedly Art Deco.
            Gilded in gold, with a bar boasting its name up in Hollywood-style
            lights, these two spaces epitomize showbiz and glistening sass.
            Sashay down to a table of baroque seats and let the show commence.
          </p>
          <p>
            Events are the name of the game at 18 Candelriggs, where live music
            and cabaret reign supreme. From burlesque shows and circus troupes
            to comedy nights and luxe shows, it's at the top of its game when it
            comes to providing guests with a wholly unique drinking and dining
            experience in the city. Top hats? Sparkles? And feather boas? These
            all come as standard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookVenue;
