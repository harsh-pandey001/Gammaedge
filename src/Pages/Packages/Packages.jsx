import React, { useState, useEffect } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import style from "./packages.module.css";
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
import PackCard from "../../components/Packages/PackCard";

// const tours = [
//   {
//     id: 1,
//     category: ["resort", "honeymoon"],
//     img: imgCard1,
//     alt: "Crecent",
//     title: "Water Park",
//     subtitle: "Resort",
//   },
//   {
//     id: 2,
//     category: ["beach", "mountain"],
//     img: imgCard2,
//     alt: "lorem ipsum",
//     title: "ipsum",
//     subtitle: "Carles, Iloilo",
//   },
//   {
//     id: 3,
//     category: ["resort", "honeymoon"],
//     img: imgCard3,
//     alt: "lorem ipsum",
//     title: "dolor sit",
//     subtitle: " amet consectetur",
//   },
//   {
//     id: 4,
//     category: ["climbing", "mountain"],
//     img: imgCard4,
//     alt: "exercitationem officiis",
//     title: "amet",
//     subtitle: "voluptates",
//   },
//   {
//     id: 5,
//     category: ["resort", "honeymoon", "beach"],
//     img: imgCard5,
//     alt: "blah blah",
//     title: "Koro Sun Resort & Rainforest Spa",
//     subtitle: "Vanua Levu, Fiji",
//   },
//   {
//     id: 6,
//     category: ["climbing", "mountain"],
//     img: imgCard6,
//     alt: "blah blah",
//     title: "Pi Shan",
//     subtitle: "Yangshuo China",
//   },
//   {
//     id: 7,
//     category: ["beach", "climbing"],
//     img: imgCard7,
//     alt: "blah blah",
//     title: "El-Nido",
//     subtitle: "Palawan",
//   },
//   {
//     id: 8,
//     category: ["honeymoon", "beach", "resort"],
//     img: imgCard8,
//     alt: "blah blah",
//     title: "Shangri-La’s Boracay Resort and Spa",
//     subtitle: "Boracay Resort",
//   },
//   {
//     id: 9,
//     category: ["beach", "resort"],
//     img: imgCard9,
//     alt: "blah blah",
//     title: "HUMANA Island Resort & Spa",
//     subtitle: "Palawan",
//   },
//   {
//     id: 10,
//     category: ["camping", "beach"],
//     img: imgBarobaybay,
//     alt: "camping in the lake",
//     title: "Barobaybay Camp Site",
//     subtitle: "Barobaybay, Lavezares N. Samar",
//   },
// ];
// const itemCategories = [
//   "all",
//   "beach",
//   "mountain",
//   "resort",
//   "climbing",
//   "camping",
//   "honeymoon",
// ];

const Packages = (props) => {
  let history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      props.showalert("Login to access all features", "info");
      history("/login");
    }
    // eslint-disable-next-line
  }, []);

  // const [cards, setCards] = useState([]);
  // const [category, setCategory] = useState("all");
  // const [query, setQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const [showResults, setShowResults] = useState(false);
  // const [searchClicked, setSearchClicked] = useState(false);

  // Function to perform search
  // const search = (query) => {
  //   return tours.filter((item) => {
  //     return item.category.some((category) =>
  //       category.toLowerCase().includes(query.toLowerCase())
  //     );
  //   });
  // };
  // const handleInputChange = (e) => {
  //   const inputValue = e.target.value;
  //   setQuery(inputValue);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const trimmedQuery = query.trim();
  //   if (trimmedQuery.length > 0 && /\S/.test(trimmedQuery)) {
  //     const results = search(trimmedQuery);
  //     setSearchResults(results);
  //     setShowResults(true);
  //     setSearchClicked(true);
  //   } else {
  //     setSearchResults([]);
  //     setShowResults(false);
  //   }
  // };

  // useEffect(() => {
  //   setCards(tours);
  // }, []);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ width: "20%" }}
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
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
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
      <PackCard />
    </>
  );
};

export default Packages;
