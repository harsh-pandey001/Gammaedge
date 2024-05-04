import React, { useEffect, useState } from "react";
import beach from "../../assets/Destination4.jpg";
import resort from "../../assets/Destination1.png";
import camp from "../../assets/Destination7.jpeg";
import mountain from "../../assets/Destination6.jpg";
import gulp from "../../assets/Destination5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "../../components/Packages/Tourcard";
import imgCard1 from "../../assets/Destination1.png";
import imgCard2 from "../../assets/Destination2.jpg";
import imgCard3 from "../../assets/Destinations/Janapav.jpeg";
import imgCard4 from "../../assets/Destination4.jpg";
import imgCard5 from "../../assets/Destination5.jpg";
import imgCard6 from "../../assets/Destination6.jpg";
import imgCard7 from "../../assets/Destinations/KanchMandir.jpeg";
import imgCard8 from "../../assets/Destinations/Khajuribazar.jpeg";
import imgCard9 from "../../assets/Destinations/BadaGanpati.jpeg";
import imgBarobaybay from "../../assets/Destinations/Museum.jpeg";
import { useNavigate } from "react-router-dom";
import style from "./destination.module.css";



const items = [
  {
    src: resort,
    caption: "Crecent Waterpark",
    details:
      "Crescent Water Park is a popular recreational destination in Indore, Madhya Pradesh. The water park is situated amidst lush green surroundings and offers a refreshing break from the hustle and bustle of city life. It is an ideal place for families and friends to spend a fun-filled day together.",
    lat: 22.647913565341682,
    long: 75.96135703902935,
  },
  {
    src: gulp,
    caption: "Patalpani",
    details:
      "Patalpani is known for the beautiful Patalpani waterfall with a height of approximately 300 feet situated on the Indore – Khandwa train route. Legend has it that the depth of the water is unknown and it goes as deep as the underground world (patal). This place is also a famous trekking spot.",
    lat: 22.50407649305443,
    long: 75.79868090874945,
  },
  {
    src: camp,
    caption: "Khajrana Mandir",
    details:
      "Khajrana Ganesh Temple is a religious spot which is a popular name among devotees who believe that whoever comes to this temple with a wish never goes back disappointed. The temple comprises a Ganesha statue & several smaller temples which are dedicated to the other deities.",
    lat: 22.73145062725913,
    long: 75.90842781813875,
  },
  {
    src: beach,
    caption: "Chappan",
    details:
      "Chappan Dukan (Chhappan Dukan/56 Dukan) is a food and shopping Street located in Indore, Madhya Pradesh, India. It is known for its active street food scene and variety of shops, establishing itself as a notable landmark for residents and visitors alike.",
    lat: 22.723997784887146,
    long: 75.88417780875619,
  },
  {
    src: mountain,
    caption: "Maheshwar",
    details:
      "Maheshwar is a town, near Khargone city in Khargone district of Madhya Pradesh state, in central India. It is located on State Highway-38,13.5 km east of National Highway 3 and 91 km from Indore, the commercial capital of the state. The Town lies on the north bank of the Narmada River",
      lat:22.177241042026463, 
      long:75.58307276576346
  },
];

const tours = [
  { id: 1,
    category: ["camping", "beach"],
    img: imgBarobaybay,
    // alt: "camping in the lake",
    title: "Central Museum",
    subtitle: "The paintings and photographs of British",
  },
  { id: 2,
    category: ["Religious", "Historical"],
    img: imgCard2,
    // alt: "lorem ipsum",
    title: "Krishnapura Chhatris",
    subtitle: "Built by the Holkars as cenotaphs over the spots",
  },
  { id: 3,
    category: ["Natural", "Historical"],
    img: imgCard3,
    // alt: "lorem ipsum",
    title: "Janapav Kuti",
    subtitle: " Janapav Kuti is a mountain at altitude of 854m from sea level and the highest peak in the Vindhayanchal range",
  },
  { id: 4,
    category: ["Foodies", "Shopping"],
    img: imgCard4,
    title: "Chhappan Dukan/56 Dukan",
    subtitle: "Food Street",
  },
  {
    id: 5,
    category: ["Natural", "Historical"],
    img: imgCard5,
    // alt: "blah blah",
    title: "PatalPani",
    subtitle: "Waterfall on the Choral River",
  },
  {
    id: 6,
    category: ["climbing", "mountain"],
    img: imgCard6,
    alt: "blah blah",
    title: "Maheshwar",
    subtitle: "Town lies on the north bank of the Narmada River",
  },
  {
    id: 7,
    category: ["Historical", "Religious"],
    img: imgCard7,
    // alt: "blah blah",
    title: "Kanch Mandir",
    subtitle: "The Craftsmen were hired from Jaipur and Iran to construct this marvelous structure",
  },
  {
    id: 8,
    category: ["Shopping", "Historical", "resort"],
    img: imgCard8,

    title: "Kajuri Bazar",
    subtitle: "Buy and sell used books at your door step We collect, check , deliver books.",
  },
  {
    id: 9,
    category: ["Religious", "Historical"],
    img: imgCard9,
    title: "Bada Ganpati",
    subtitle: "Located at the end of a quiet lane in the city of Indore",
  },
];

const itemCategories = [
  "all",
  "Historical",
  "Religious",
  // "Resorts",
  "Natural",
  "Shopping",
  "Foodies",
];

const Destination = (props) => {
  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      props.showalert("Login to access all features", "info");
      history("/login");
    }
    // eslint-disable-next-line
  }, []);

  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);

  // Function to perform search
  const search = (query) => {
    return tours.filter((item) => {
      return item.category.some((category) =>
        category.toLowerCase().includes(query.toLowerCase())
      );
    });
  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery.length > 0 && /\S/.test(trimmedQuery)) {
      const results = search(trimmedQuery);
      setSearchResults(results);
      setShowResults(true);
      setSearchClicked(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  useEffect(() => {
    setCards(tours);
  }, []);

  return (
    <>
      <h1 className={style.head}>Places To Explore</h1>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((element, key) => (
          <SwiperSlide>
            <div key={key} className={style.container}>
              <div className={style.left}>
                {/* <span>Harsh</span> */}
                <h1>{element.caption}</h1>
                <p>{element.details}</p>
                <div style={{ display: "flex", margin: "2rem 0", gap: "3rem" }}>
                  <button
                    style={{ padding: "0.5rem 2.5rem" }}
                    type="button"
                    class="btn btn-info"
                  >
                    About
                  </button>
                  <button
                    style={{ padding: "0.5rem 2.5rem" }}
                    className="btn btn-outline-info"
                  >
                    Start Trip
                  </button>
                </div>
              </div>
              <div className={style.right}>
                <img
                  src={element.src}
                  alt={element.altText}
                  className="img-carousel"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <form
        onSubmit={handleSubmit}
        style={{ width: "20%", margin: "3rem auto" }}
        className="container d-flex "
        role="search"
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search by category"
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="subComponent-lg" id="packageBody">
        {showResults && (
          <div className={style.container1}>
            {searchResults.length === 0 ? (
              <p>No results found.</p>
            ) : (
              searchResults.map((result, index) => (
                <>
                  {/* <h1>Search from {result.category[0]}</h1> */}
                  <div key={index} className={style.searchResult}>
                    <TourCard key={index} tourcard={result} />
                  </div>
                </>
              ))
            )}
          </div>
        )}
        <Container>
          <header className="headerTitle text-center">
            <h1>More To Explore</h1>
            <p>Search places by the Category</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "info" : "dark"}
                onClick={() => setCategory(badge)}
              >
                {badge}
              </Badge>
            ))}
            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map((tourcard) =>
                      tourcard.category.includes(category) ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null
                    )
                  : cards.map((tourcard) => (
                      <TourCard key={tourcard.id} tourcard={tourcard} />
                    ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
};

export default Destination;
