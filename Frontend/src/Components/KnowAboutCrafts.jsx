import styles from "./KnowAboutCrafts.module.css";
import { useNavigate } from "react-router-dom";

const KnowAboutCrafts = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate('/know-the-craft');
  };

  return (
    <div className={styles.knowAboutCrafts} id="craft">
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.text}>
            <div className={styles.header}>
              <div className={styles.knowAboutCrafts1}>Know About Crafts</div>
              {/* <div className={styles.craftingLegaciesIgniting}> */}
               <h1>Crafting Legacies, Igniting Inspiration</h1> 
              {/* </div> */}
            </div>
            <div className={styles.areYouCurious}>
            
              Are you curious about the world of crafts and tradition? Join us
              on a journey of discovery where every creation tells a story, and
              every artisan is a guardian of culture. Immerse yourself in the
              rich tapestry of heritage and innovation as we celebrate the
              beauty of craftsmanship. Welcome to a world where the past meets
              the present, and where every craft is a treasure waiting to be
              explored.
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.content2}>
              <button className={styles.getStarted} onClick={handleChange}>{`Know More `}</button>
            </div>
            <img
              className={styles.iconarrowRight}
              alt=""
              src="https://res.cloudinary.com/dkotituzn/image/upload/v1701180286/zpn8ueeyv6qp4iuipbrh.svg"
            />
          </button>
        </div>
        <div className={styles.images}>
          <div className={styles.imagePlaceholder}>
            <img
              className={styles.nakshiKatha1Icon}
              alt=""
              src="https://res.cloudinary.com/dkotituzn/image/upload/v1701180331/xji1updzmnixdrip6loc.png"
            />
          </div>
          <div className={styles.imagePlaceholder1}>
            <img className={styles.saree11Icon} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1701180385/g1c6cvib0osask4etwaw.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowAboutCrafts;
