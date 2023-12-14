import styles from "./Category.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
  {
    title: 'Pottery',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179095/qqxhvifkdgvazlox348p.gif',
  },
  {
    title: 'Bedsheets and Katha',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179177/hgh7sjxkvbfjtrovadfw.jpg',
  },
  {
    title: 'Furniture',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179226/i598ili73kvus9yvysda.jpg',
  },
  {
    title: 'Saree',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179275/qlfuldexzuijmwc3ksfu.jpg',
  },
  {
    title: 'Utensils',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179381/wtn9zok4lllj1ziwtqtq.jpg',
  },
  {
    title: 'Jewelry',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179425/yfiscqdsarmkzbcbdvz9.jpg',
  },
  {
    title: 'Mats and Rugs',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179482/ltczhbxbxd6to9zmz9v0.jpg',
  },
  {
    title: 'Home Decor',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179571/w8vpkypwnm0we8yfjczy.jpg',
  },
  {
    title: 'Mufler/Scarf',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179614/w9ipqirbybnkguo3sgto.jpg',
  },
  {
    title: 'Kurta/Punjabi',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179655/tsh6jrsak8nhfhxdzeck.jpg',
  },
  {
    title: 'Fotua/Salware Kameez',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179715/rtydcgozfxubq71dxyor.jpg',
  },
  {
    title: 'Pant/Pajama',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179749/t17pacggaskceezx6cks.jpg',
  },
  {
    title: 'Lungi',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179944/gtjzib8ds8q6revghi1v.jpg',
  },
  {
    title: 'Flower Vase',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179944/qtqcrfuehmdhc2pdrv8c.webp',
  },
  {
    title: 'Footwear',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179945/p17pd3pfbijzd5voropv.jpg',
  },
  {
    title: 'Musical Instrument',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179945/h9vhxajgg6ksdu3ffgxa.jpg',
  },
  {
    title: 'Painting',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179942/roavedsg1epw4d73c3hs.jpg',
  },
  {
    title: 'Cap/Hat/Pagri',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179944/dysxdssb1qbsilhgkbyc.png',
  },
  {
    title: 'Bags',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179942/ypqlmvei6jsiqcn3ticu.jpg',
  },
  {
    title: 'WoodBlock Printing',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179944/wwxgwxrwihz0wfiutdeb.jpg',
  },
  {
    title: 'Conch Shell Craft',
    image: 'https://res.cloudinary.com/dkotituzn/image/upload/v1701179943/hvg8uqwotwqmjtm4cwsm.jpg',
  },
];

const Category = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.shopByCategoryContainer}>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>Shop by Category</h1>
      </div>
      <Slider {...settings} className={styles.carousel}>
        {categories.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={item.image} alt={item.title} />
            <button className={styles.productButton}>{item.title}</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default Category;


