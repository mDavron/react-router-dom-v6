import React from 'react'
import { Link } from 'react-router-dom'
import errorImg from './../images/error-404.webp'

const styles = {
  imgBox: {
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },
  img: {
    width: "300px",
    height: "230px",
    objectFit:"contain"
  },
  h2: {
    color: "red",
    textAlign:"center"
  }

}
const NotFound = () => {
  return (
    <div style={styles.imgBox}>
      <h2 style={styles.h2}>Page Not Found!</h2>
      <img style={styles.img} src={errorImg} />
      <h3 style={styles.h2}><Link to={"/"}> <span style={styles.h2}>⬅</span> Bosh Sahifaga Qaytish</Link></h3>

    </div>
  )
}

export default NotFound