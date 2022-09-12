import "./styles.css"
import { useState, useEffect, useRef } from "react"
import Banner1 from "../carousel/photos/banner1.jpg"
import Banner2 from "../carousel/photos/banner2.jpeg"
import Banner3 from "../carousel/photos/banner3.jpeg"

export default function Carousel() {
  const buttons = [
    "Miễn phí vận chuyển cho đơn hàng trên 200K",
    "60 ngày đổi trả vì bất kỳ lí do gì",
    "Đến tận nơi nhận hàng trả, hoàn tiền trong 24h",
  ]
  const bannerImg = [Banner2, Banner3, Banner1]
  const [bannerImageIndex, setBannerImageIndex] = useState(0)
  const [isOn, setIsOn] = useState(true)
  const bannerIndexRef = useRef(0)
  const timer = useRef()
  const reTimer = useRef()

  const controlAutoChange = () => {
    clearTimeout(reTimer.current)
    clearInterval(timer.current)
    reTimer.current = setTimeout(() => {
      autoChange()
    }, 3000)
  }
  const handleNext = () => {
    controlAutoChange()
    if (bannerIndexRef.current < bannerImg.length - 1) {
      bannerIndexRef.current += 1
      setBannerImageIndex(bannerIndexRef.current)
    } else {
      bannerIndexRef.current = 0
      setBannerImageIndex(bannerIndexRef.current)
    }
  }

  const handlePrev = () => {
    controlAutoChange()
    if (bannerIndexRef.current >= 1) {
      bannerIndexRef.current -= 1
      setBannerImageIndex(bannerIndexRef.current)
    } else {
      bannerIndexRef.current = bannerImg.length - 1
      setBannerImageIndex(bannerIndexRef.current)
    }
  }

  const autoChange = () => {
    timer.current = setInterval(() => {
      if (bannerIndexRef.current < bannerImg.length - 1) {
        bannerIndexRef.current += 1
        setBannerImageIndex(bannerIndexRef.current)
      } else {
        setBannerImageIndex(0)
        bannerIndexRef.current = 0
      }
    }, 5000)
  }

  useEffect(() => {
    autoChange()
  }, [])

  const handleChangebar = (index) => {
    setBannerImageIndex(index)
    bannerIndexRef.current=index
    setIsOn(true)
  }
  return (
    <div className="carousel-container">
      <div className="banner">
        <div className="changebar-container flex center">
          {bannerImg.map((img, index) => (
            <div
              key={index}
              className={`${
                bannerIndexRef.current === index && isOn
                  ? "changebar on"
                  : "changebar off"
              }`}
              onClick={() => handleChangebar(index)}
            ></div>
          ))}
        </div>
        <img src={bannerImg[bannerImageIndex]} alt="ảnh quảng cáo" />
        <div className="button-container flex">
          <div className="button prev flex center" onClick={handlePrev}>
            <div className="prev-container flex center">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
          </div>
          <div className="button next flex center" onClick={handleNext}>
            <div className="prev-container flex center">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="click flex">
          {buttons.map((button, index) => (
            <button key={index} className="">
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
