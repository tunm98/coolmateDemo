import { useState } from "react";
import Data from "./data-VeCoolmate.json";

export default function Menu({ id, item }) {
  const [isHover, setIsHover] = useState(false);
  const [aboutCoolmate, setAboutCoolmate] = useState(Data.data);
  return (
    <div
      className="menu-item"
      key={id}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <li>{item.name}</li>

      {isHover && id === 3 && (
        <div
          className="submenu"
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        >
          <div className="submenu-container">
            {item?.children?.map((child1) => (
              <div key={child1.id} className="child">
                <p className="child-1">{child1.name}</p>
                <div className="divide-column">
                  {child1.children.map((child2) => (
                    <div key={child2.id}>
                      <p className="child-2">{child2.name}</p>
                      {child2.src && (
                        <img className="child-2-img" src={child2.src} />
                      )}
                      <div>
                        {child2?.children?.map((child3) => (
                          <div key={child3.id} className="child child-3">
                            {child3}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isHover && id === 5 && (
        <div
          className="submenu flex column"
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        >
          <div className="flex column">
            <p>Coolmate</p>
            <div className="coolmate">
              {aboutCoolmate.map((item) => (
                <div
                  key={item.id}
                  className="flex aboutCoolmate-container column"
                >
                  <img className="aboutCoolmate" src={item.src} />
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
