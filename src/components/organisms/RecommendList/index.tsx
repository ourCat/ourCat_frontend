import { useRouter } from 'next/router';
import { IComponent } from 'common';
import { Recommend } from 'components';
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
    { id: 9, img: '/images/img.png', label: 'cat9', url: '/cat9' },
    { id: 10, img: '/images/img.png', label: 'cat10', url: '/cat10' },
  ],
};
type dataType = {
  id: number;
  img: string;
  label: string;
  url: string;
};

export interface IRecommendListProps extends IComponent {
  // 서버랑 연결하면 ?를 지울예정입니다.
  Datas?: dataType[];
}

export const RecommendList: React.FC<IRecommendListProps> = ({ Datas, ...props }) => {
  const router = useRouter();
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    isArrow: false,
  };
  const handleImgUrl = (url: string) => {
    router.push(url);
  };
  return (
    <S.Wrap {...props}>
      <S.ReactSlider {...settings}>
        {sampleData.data.map(cat => {
          return (
            <Recommend
              img={cat.img}
              labelText={cat.label}
              onClick={() => handleImgUrl(cat.url)}
              key={cat.id}
            />
          );
        })}
      </S.ReactSlider>
    </S.Wrap>
  );
};
