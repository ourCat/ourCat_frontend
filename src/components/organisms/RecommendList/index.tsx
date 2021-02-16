import { IComponent } from 'common';
import { Recommend } from 'components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './style';

const sampleData = {
  data: [
    { id: 1, img: '/images/img.png', label: 'cat1', url: '/cat1' },
    { id: 2, img: '/images/img.png', label: 'cat2', url: '/cat2' },
    { id: 3, img: '/images/img.png', label: 'cat3', url: '/cat3' },
    { id: 4, img: '/images/img.png', label: 'cat4', url: '/cat4' },
    { id: 5, img: '/images/img.png', label: 'cat5', url: '/cat5' },
    { id: 6, img: '/images/img.png', label: 'cat6', url: '/cat6' },
    { id: 7, img: '/images/img.png', label: 'cat7', url: '/cat7' },
    { id: 8, img: '/images/img.png', label: 'cat8', url: '/cat8' },
    { id: 9, img: '/images/img.png', label: 'cat8', url: '/cat8' },
    { id: 10, img: '/images/img.png', label: 'cat8', url: '/cat8' },
  ],
};

export interface IRecommendListProps extends IComponent {}

export const RecommendList: React.FC<IRecommendListProps> = ({ ...props }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <S.Wrap {...props}>
      <Slider {...settings}>
        {sampleData.data.map(cat => {
          return <Recommend img={cat.img} labelText={cat.label} key={cat.id} width={'2rem'} />;
        })}
      </Slider>
    </S.Wrap>
  );
};
