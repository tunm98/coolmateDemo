import "./styles.css"
import { useState } from "react"
import Data from "./categories.json"

export default function Category() {
  const types = Data.categories
  const [isSelected, setIsSelected] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isHovered, setIsHover] = useState(false)
  const selectedData = types[selectedIndex]

  const handleChangeType = (index) => {
    setIsSelected(true)
    setSelectedIndex(index)
  }
  const handleHover = () => {
    setIsHover(!isHovered)
  }
  return (
    <div className="category-container">
      <div className="second-slogan">Mặc Ngay, Yêu Luôn</div>
      <div className="category-name flex">
        {types.map((type, index) => (
          <div
            className={`name flex center ${
              isSelected && selectedIndex === index
                ? "on-click"
                : "not-on-click"
            }`}
            key={type.id}
            onClick={() => handleChangeType(index)}
          >
            {type.name}
            {type.type && <span className="tag">{type.type}</span>}
          </div>
        ))}
      </div>
      {isSelected && (
        <div className="items">
          {selectedData.children1.map((child1, index) => (
            <div className="item-holder" key={index}>
              <div className="image-holder">
                <img
                  src={`${isHovered ? child1.src[1] : child1.src[0]}`}
                  // onMouseOver={handleHover}
                  // onMouseOut={handleHover}
                />
                <div className="flex rate-infor">
                  <div className="rate flex">
                    <div>{child1.rate}</div>
                    <i className="fa-solid fa-star"></i>
                    <div>({child1.rateNumber})</div>
                  </div>
                  {child1.type && <div className="type">{child1.type}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
