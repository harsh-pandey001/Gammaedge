import React, { useState } from "react";
import { IonIcon } from "@ionic/react"; // Assuming you have imported Ionicons as React components
// import "./caraousel.css"; 
function Caraousel() {
  const [items, setItems] = useState([
    {
      id: 1,
      backgroundImage:
        "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
      title: '"Rajwada"',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 2,
      backgroundImage:
        "Rajwada",
      title: '"Lossless Youths"',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 3,
      backgroundImage:
        "Rajwada",
      title: '"Lossless Youths"',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 4,
      backgroundImage:
        "Rajwada",
      title: '"Lossless Youths"',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 5,
      backgroundImage:
        "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
      title: '"Rajwada"',
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    // Add other items similarly
  ]);

  const activate = (e) => {
    const slider = document.querySelector(".slider");
    const itemsCopy = [...items];
    if (e.target.matches(".next")) {
      const firstItem = itemsCopy.shift();
      setItems([...itemsCopy, firstItem]);
    } else if (e.target.matches(".prev")) {
      const lastItem = itemsCopy.pop();
      setItems([lastItem, ...itemsCopy]);
    }
  };

  return (
    <div className="caru">
      <main>
        <ul className="slider">
          {items.map((item) => (
            <li
              key={item.id}
              className="item"
              style={{
                backgroundImage: `url("./assets/backgroundImage.jpeg");`,
              }}
            >
              <div className="content">
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
                <button>Read More</button>
              </div>
            </li>
          ))}
        </ul>
        <nav className="nav">
          <IonIcon
            className="btn prev"
            name="arrow-back-outline"
            onClick={activate}
          ></IonIcon>
          <IonIcon
            className="btn next"
            name="arrow-forward-outline"
            onClick={activate}
          ></IonIcon>
        </nav>
      </main>
    </div>
  );
}
export default Caraousel;
