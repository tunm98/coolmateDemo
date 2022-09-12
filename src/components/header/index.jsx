import { useState } from "react"
import Account from "../header/photos/icon-account-header.svg"
import Cart from "../header/photos/icon-cart-header.svg"
import Search from "../header/photos/icon-search-header.svg"
import Logo from "../header/photos/logo-coolmate.svg"
import Google from "../header/photos/logo-google.png"
import MenuButton from "./menuButton"
import Menu from "./menu"
import "./style.css"
import Data from "./data-SanPham.json"

export default function Header() {
  const [menu, setMenu] = useState(Data.data)
  const [isNotSearching, setIsNotSearching] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isNotRegistering, setIsNotRegistering] = useState(true)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleSearch = () => {
    setIsNotSearching(false)
  }
  const handleRegister = () => {
    setIsNotRegistering(false)
  }
  const handleExit = () => {
    setIsNotSearching(true) || setIsNotRegistering(true)
  }

  return (
    <div className="header-container">
      <div className="slogan">
        <strong>Combo tiết kiệm ưu đãi 44%</strong>
        <div
          className={`${
            isNotSearching ? "navbar flex " : "navbar flex navbar-search"
          }`}
        >
          <MenuButton
            toggleMenu={toggleMenu}
            isOpen={isOpen}
            isNotSearching={isNotSearching}
          />
          {isNotSearching ? (
            <div className="logo">
              <img src={Logo} />
            </div>
          ) : (
            <div className="exit" onClick={handleExit}></div>
          )}
          <div className="menu">
            {isNotSearching ? (
              <ul className="flex">
                {menu.map((item) => (
                  <Menu key={item.id} id={item.id} item={item} />
                ))}
              </ul>
            ) : (
              <input
                className="search"
                type="search"
                placeholder="Tìm kiếm sản phẩm..."
              />
            )}
          </div>
          <div className="icons flex center">
            <div className="icon flex" onClick={() => handleSearch()}>
              <img src={`${!isOpen ? Search : ""}`} />
            </div>
            <div className="icon flex" onClick={() => handleRegister()}>
              <img src={`${isNotSearching ? Account : ""}`} />
            </div>
            <div className="icon flex">
              <img src={`${isNotSearching ? Cart : ""}`} />
            </div>
          </div>
        </div>
      </div>
      {!isNotRegistering && (
        <div className="overlay-container">
          <div className="overlay" onClick={handleExit}></div>
          <form className="registerForm flex column">
            <div className="exitButton" onClick={handleExit}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <h1>Đăng nhập</h1>
            <p className="warning">
              Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính
              năng <a>"Lấy mật khẩu"</a> để có thể truy cập vào tài khoản bằng
              email nhé.
            </p>
            <input
              type="text"
              placeholder="Email/SĐT của bạn"
              autoComplete="on"
            />
            <input type="password" placeholder="Mật khẩu" autoComplete="on" />
            <button type="submit" className="login first-button">
              Đăng nhập
            </button>
            <div className="divider flex column">
              <hr className="line" />
              <span className="or flex center">Hoặc</span>
            </div>
            <button type="submit" className="login facebook">
              Đăng nhập với Facebook{" "}
              <i className="fa-brands fa-square-facebook"></i>
            </button>
            <button type="submit" className="login google">
              Đăng nhập với Google <img src={Google} />
            </button>
            <div className="flex more">
              <a>Đăng ký tài khoản mới</a>
              <a>Quên mật khẩu</a>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
