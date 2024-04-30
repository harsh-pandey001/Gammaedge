import React, { useEffect, useState } from "react";
import style from "./Food.module.css";
import { Link, useNavigate } from "react-router-dom";
import imgCard1 from "../../assets/Destination7.jpeg";
import imgCard2 from "../../assets/Destination2.jpg";
import imgCard3 from "../../assets/Destination3.png";
import imgCard4 from "../../assets/Destination4.jpg";
import imgCard5 from "../../assets/Destination5.jpg";
import imgCard6 from "../../assets/Destination6.jpg";
import imgCard7 from "../../assets/Destination1.png";
import imgCard8 from "../../assets/Destination6.jpg";
import imgCard9 from "../../assets/Destination2.jpg";
import { Badge, CardColumns, Container, Row } from "reactstrap";
import TourCard from "../../components/Packages/Tourcard";

const Dices = [
  {
    id: 1,
    category: ["Dinner", "Lunch"],
    img: imgCard1,
    alt: "Crecent",
    title: "Water Park",
    subtitle: "Resort",
  },
  {
    id: 2,
    category: ["Snacks", "Breakfast"],
    img: imgCard2,
    alt: "lorem ipsum",
    title: "ipsum",
    subtitle: "Carles, Iloilo",
  },
  {
    id: 3,
    category: ["Lunch", "Drinks"],
    img: imgCard3,
    alt: "lorem ipsum",
    title: "dolor sit",
    subtitle: " amet consectetur",
  },
  {
    id: 4,
    category: ["Lunch", "Snacks"],
    img: imgCard4,
    alt: "exercitationem officiis",
    title: "amet",
    subtitle: "voluptates",
  },
  {
    id: 5,
    category: ["Breakfast", "Sweets"],
    img: imgCard5,
    alt: "blah blah",
    title: "Koro Sun Resort & Rainforest Spa",
    subtitle: "Vanua Levu, Fiji",
  },
  {
    id: 6,
    category: ["Dinner", "Snacks"],
    img: imgCard6,
    alt: "blah blah",
    title: "Pi Shan",
    subtitle: "Yangshuo China",
  },
  {
    id: 7,
    category: ["Sweets", "Breakfast"],
    img: imgCard7,
    alt: "blah blah",
    title: "El-Nido",
    subtitle: "Palawan",
  },
  {
    id: 8,
    category: ["Sweets", "Breakfast", "Snacks"],
    img: imgCard8,
    alt: "blah blah",
    title: "Shangri-La’s Boracay Resort and Spa",
    subtitle: "Boracay Resort",
  },
  {
    id: 9,
    category: ["Drinks", "Lunch"],
    img: imgCard9,
    alt: "blah blah",
    title: "HUMANA Island Resort & Spa",
    subtitle: "Palawan",
  },
  {
    id: 10,
    category: ["Breakfast", "Snacks"],
    img: imgCard6,
    alt: "camping in the lake",
    title: "Barobaybay Camp Site",
    subtitle: "Barobaybay, Lavezares N. Samar",
  },
];

const itemCategories = [
  "all",
  "Breakfast",
  "Snacks",
  "Lunch",
  "Drinks",
  "Dinner",
  "Sweets",
];

const Food = (props) => {
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
  // const [topic, settopic] = useState("")

  const search = (query) => {
    return Dices.filter((item) => {
      return item.category.some((category) =>
        category.toLowerCase().includes(query.toLowerCase())
      );
    });
  };


  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    // settopic(query)
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
    setCards(Dices);
  }, []);

  return (
    <>
      <div className={style.container}>
        <h1>Fomous Food in Indore</h1>
        <h3>You can search it by Category</h3>
        <form onSubmit={handleSubmit}>
          <div className="sliderStateSelect selectCategories col-md-4 ">
            <select name="mt-listing-category2" className={style.formControl}  value={query}
          onChange={handleInputChange}>
              <option value="">Categories</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Snacks">Snacks</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="sweets">Sweets</option>
            </select>
          </div>
          <div className="sliderStateSubmit col-md-1  submit">
            <button type="submit" className="form-control btn btn-warning"><a href="#packageBody">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg></a>
            </button>
          </div>
        </form>
      </div>

   
      <div className="subComponent-lg" id="packageBody" >
        {showResults && (
          <div className={style.container1}>
             <h1>Searched Items </h1>
            {searchResults.length === 0 ? (
              <p>No results found.</p>
            ) : (
              searchResults.map((result, index) => (
                <>
                  {/* <h1>Search for {result.category[0]} </h1> */}
                 
                  <div  key={index} className={style.searchResult}>
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

export default Food;
