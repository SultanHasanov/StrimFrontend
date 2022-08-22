import React from 'react';
import styles from "./News.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
    color: 'black',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


const News = () => {
 const [open, setOpen] = React.useState(false);
 const [open1, setOpen1] = React.useState(false);
 const [open2, setOpen2] = React.useState(false);

 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 const handleOpen1 = () => setOpen1(true);
 const handleClose1 = () => setOpen1(false);

 const handleOpen2 = () => setOpen2(true);
 const handleClose2 = () => setOpen2(false);


    return (
      <div className={styles.wrapper}>
        <div className={styles.bloc_news}>
          <span className={styles.text}>Главные новости о нас</span>
          <div className={styles.news_1} onClick={handleOpen}>
            <span>Арби Агрессор советует магазин Mister</span>
            <img
              className={styles.newsImg}
              src="https://aboutan.ru/wp-content/uploads/2022/05/1-2-768x768.jpg"
              alt=""
            />
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <span>Вообще-то я думал здесь кофе</span>
                <img
                  className={styles.newsImg_2}
                  src="https://aboutan.ru/wp-content/uploads/2022/05/1-2-768x768.jpg"
                  alt=""
                />
              </Typography>
            </Box>
          </Modal>

          <div className={styles.news_1} onClick={handleOpen1}>
            <span>Слова Александра Усика после боя</span>
            <img
              className={styles.newsImg}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtc0Cyx_7Ix4hYOLmoJ6ZByxacF4aiQSH-uZa62zECgG7d-sfJesaOWG9_Ww35L3bAjI&usqp=CAU"
              alt=""
            />
          </div>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <span>
                  Наконец-то я смогу себе позволить костюм из магазина Mister
                </span>
                <img
                  className={styles.newsImg_2}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtc0Cyx_7Ix4hYOLmoJ6ZByxacF4aiQSH-uZa62zECgG7d-sfJesaOWG9_Ww35L3bAjI&usqp=CAU"
                  alt=""
                />
              </Typography>
            </Box>
          </Modal>

          <div className={styles.news_1} onClick={handleOpen2}>
            <span>В Тибете нашли камень судьбы</span>
            <img
              className={styles.newsImg}
              src="https://cdnstatic.rg.ru/uploads/images/218/24/30/Petroglify_v_Tibete.jpg"
              alt=""
            />
          </div>
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <span>
                  22 августа 2022 году появится магазин классической одежды
                  Mister
                </span>
                <img
                  className={styles.newsImg_2}
                  src="https://cdnstatic.rg.ru/uploads/images/218/24/30/Petroglify_v_Tibete.jpg"
                  alt=""
                />
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className={styles.cinema}>
          <span style={{ color: "black", fontSize: "20px", fontWeight: 'bold' }}>
            Джон Уик выбирает костюм в магазине Mister
          </span>
          <div className={styles.cinema_2}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Of_9kR0X8mE?start=64"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
};

export default News;