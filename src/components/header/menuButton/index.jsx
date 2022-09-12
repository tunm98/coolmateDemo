import { useState } from "react"
import Search from "../../header/photos/icon-search-header.svg"
import Data from "../data-Menu.json"
import "./menuButtonStyles.css"

export default function menuButton({ isOpen, toggleMenu, isNotSearching }) {
  const [isSelected, setIsSelected] = useState(true)
  const [isSelectedIndex, setSelectedIndex] = useState(0)
  const [more, setMore] = useState(false)
  const categorySelected = Data.menu[isSelectedIndex]

  const handleMore = () => {
    setMore(!more)
  }
  const handleChangeCategory = (index) => {
    setIsSelected(true)
    setSelectedIndex(index)
  }

  return (
    <div className="menu-button-container">
      <div
        className={`menu-button flex center ${isNotSearching ? "appear" : "none"}`}
        onClick={toggleMenu}
      >
        <i
          className={`open-close fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}
        ></i>
      </div>
      {!isNotSearching && (
        <input
          className="search"
          type="search"
          placeholder="Tìm kiếm sản phẩm..."
        />
      )}
      {isOpen && (
        <div className="menu-container flex column">
          <div className="search-container center">
            <img className="search-icon" src={Search} />
            <input
              className="search"
              type="search"
              placeholder="Tìm kiếm sản phẩm..."
            />
          </div>
          <div className="flex menu-category-container">
            {Data.menu.map((category, index) => {
              return (
                <div key={JSON.stringify(category)} className="item-column">
                  <div
                    className="menu-category"
                    key={category.id}
                    onClick={() => handleChangeCategory(index)}
                  >
                    <span
                      className={`${
                        isSelected && isSelectedIndex === index
                          ? "focus"
                          : "notFocus"
                      }`}
                    >
                      {category.name}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
          <hr />
          {isSelected && (
            <div className="menu-children1">
              {categorySelected.children1.map((child1) => (
                <div className="item-container">
                  <div className="header-item" key={child1.id}>
                    {child1.name}
                  </div>
                  <div className="menu-children2">
                    {child1.children2.map((child2, index) => (
                      <div className="items" key={index}>
                        {child2}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="more-container">
            <hr />
            <div className="red">Oulet</div>
            <hr />
            <div>Combo Tiết kiệm</div>
            <hr />
            <div>CoolXPrint - Thiết kế theo yêu cầu</div>
            <hr />
            <div>Chọn Size</div>
            <hr />
            <div>
              <div className="detail flex">
                <div>Về Coolmate</div>
                <div className="angle flex center" onClick={handleMore}>
                  <i
                    className={`fa-solid flex center ${
                      more ? "fa-angle-up" : "fa-angle-down"
                    }`}
                  ></i>
                </div>
              </div>
              {more && (
                <ul>
                  <li>Coolmate 101 - Gia nhập coolmate</li>
                  <li>Dịch vụ 100% hài lòng</li>
                  <li>CoolClub - Khách hàng thân thiết</li>
                  <li>Câu chuyện Coolmate</li>
                </ul>
              )}
            </div>
            <hr />
            <div>Blog</div>
            <img src="https://mcdn.coolmate.me/image/August2022/Banner-Marvel-LDP_(3)_(1)_(1).jpg" />
          </div>
        </div>
      )}
    </div>
  )
}
