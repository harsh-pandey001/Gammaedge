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
import imgCard3 from "../../assets/Destination3.png";
import imgCard4 from "../../assets/Destination4.jpg";
import imgCard5 from "../../assets/Destination5.jpg";
import imgCard6 from "../../assets/Destination6.jpg";
import imgCard7 from "../../assets/Destination1.png";
import imgCard8 from "../../assets/Destination6.jpg";
import imgCard9 from "../../assets/Destination2.jpg";
import imgBarobaybay from "../../assets/Destination3.png";
import { useNavigate } from "react-router-dom";
import style from "./destination.module.css";

const items = [
  {
    src: resort,
    // altText: "",
    caption: "Crecent Waterpark",
    details:
      "Crescent Water Park is a popular recreational destination in Indore, Madhya Pradesh. The water park is situated amidst lush green surroundings and offers a refreshing break from the hustle and bustle of city life. It is an ideal place for families and friends to spend a fun-filled day together.",
  },
  {
    src: gulp,
    // altText: "Slide 2",
    caption: "Patalpani",
    details:
      "Patalpani is known for the beautiful Patalpani waterfall with a height of approximately 300 feet situated on the Indore – Khandwa train route. Legend has it that the depth of the water is unknown and it goes as deep as the underground world (patal). This place is also a famous trekking spot.",
  },
  {
    src: camp,
    // altText: "Slide 3",
    caption: "Khajrana Mandir",
    details:
      "Khajrana Ganesh Temple is a religious spot which is a popular name among devotees who believe that whoever comes to this temple with a wish never goes back disappointed. The temple comprises a Ganesha statue & several smaller temples which are dedicated to the other deities.",
  },
  {
    src: beach,
    // altText: "Slide 4",
    caption: "Chappan",
    details:
      "Chappan Dukan (Chhappan Dukan/56 Dukan) is a food and shopping Street located in Indore, Madhya Pradesh, India. It is known for its active street food scene and variety of shops, establishing itself as a notable landmark for residents and visitors alike.",
  },
  {
    src: mountain,
    // altText: "Slide 5",
    caption: "Maheshwar",
    details:
      "Maheshwar is a town, near Khargone city in Khargone district of Madhya Pradesh state, in central India. It is located on State Highway-38,13.5 km east of National Highway 3 and 91 km from Indore, the commercial capital of the state. The Town lies on the north bank of the Narmada River",
  },
];

const tours = [
  {
    id: 1,
    category: ["resort", "honeymoon"],
    img: imgCard1,
    alt: "Crecent",
    title: "Water Park",
    subtitle: "Resort",
  },
  {
    id: 2,
    category: ["beach", "mountain"],
    img: imgCard2,
    alt: "lorem ipsum",
    title: "ipsum",
    subtitle: "Carles, Iloilo",
  },
  {
    id: 3,
    category: ["resort", "honeymoon"],
    img: imgCard3,
    alt: "lorem ipsum",
    title: "dolor sit",
    subtitle: " amet consectetur",
  },
  {
    id: 4,
    category: ["climbing", "mountain"],
    img: imgCard4,
    alt: "exercitationem officiis",
    title: "amet",
    subtitle: "voluptates",
  },
  {
    id: 5,
    category: ["resort", "honeymoon", "beach"],
    img: imgCard5,
    alt: "blah blah",
    title: "Koro Sun Resort & Rainforest Spa",
    subtitle: "Vanua Levu, Fiji",
  },
  {
    id: 6,
    category: ["climbing", "mountain"],
    img: imgCard6,
    alt: "blah blah",
    title: "Pi Shan",
    subtitle: "Yangshuo China",
  },
  {
    id: 7,
    category: ["beach", "climbing"],
    img: imgCard7,
    alt: "blah blah",
    title: "El-Nido",
    subtitle: "Palawan",
  },
  {
    id: 8,
    category: ["honeymoon", "beach", "resort"],
    img: imgCard8,
    alt: "blah blah",
    title: "Shangri-La’s Boracay Resort and Spa",
    subtitle: "Boracay Resort",
  },
  {
    id: 9,
    category: ["beach", "resort"],
    img: imgCard9,
    alt: "blah blah",
    title: "HUMANA Island Resort & Spa",
    subtitle: "Palawan",
  },
  {
    id: 10,
    category: ["camping", "beach"],
    img: imgBarobaybay,
    alt: "camping in the lake",
    title: "Barobaybay Camp Site",
    subtitle: "Barobaybay, Lavezares N. Samar",
  },
];

const itemCategories = [
  "all",
  "beach",
  "mountain",
  "resort",
  "climbing",
  "camping",
  "honeymoon",
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
            <p>A Great Collection of Our Tour Packages</p>
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
