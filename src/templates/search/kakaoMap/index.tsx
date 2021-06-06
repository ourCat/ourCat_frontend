import * as S from './style';
import { Label, Image } from 'components';
import { useEffect, useRef, useState } from 'react';

export interface KakaoMapProps {}

declare const kakao: any;

interface PositionProps {
  title: string;
  latitude: number;
  longitude: number;
}

export interface KakaoMapProps {
  address?: string;
  positions?: Array<PositionProps>;
  height?: string;
}

export const KakaoMap: React.FC<KakaoMapProps> = ({
  address,
  positions,
  height = '',
}: KakaoMapProps) => {
  const kakaoMapRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');
  const [clickedItem, setClickedItem] = useState('');

  useEffect(() => {
    const kakaoMapElement = kakaoMapRef.current;
    const options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567), //지도 중심좌표
      level: 3, //지도의 확대 레벨
    };
    const kakaoMap = new kakao.maps.Map(kakaoMapElement, options); //지도 생성

    const places = new kakao.maps.services.Places();

    //검색 결과를 받을 콜백 함수
    function placesSearchCB(data: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        setError('');
        const bounds = new kakao.maps.LatLngBounds();

        data.forEach((item: any) => bounds.extend(new kakao.maps.LatLng(item.y, item.x)));
        console.log(data);
        kakaoMap.setBounds(bounds);
      } else {
        setError('검색 결과를 찾을 수 없습니다.');
      }
    }
    //입력한 keyword를 통하여 주소 검색
    if (address) places.keywordSearch(address, placesSearchCB);

    if (positions) {
      // 마커 클러스터러를 생성
      const clusterer = new kakao.maps.MarkerClusterer({
        map: kakaoMap,
        averageCenter: true,
        minLevel: 8,
      });

      const imageSrc = '/images/place.PNG';
      const imageSize = new kakao.maps.Size(36, 36);
      const imageOption = { offset: new kakao.maps.Point(18, 18) };
      const makerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

      // 인포윈도우를 표시하는 클로저를 만드는 함수
      function makeOverListener(map: any, marker: any, infowindow: any) {
        return function () {
          infowindow.open(map, marker);
        };
      }

      // 인포윈도우를 닫는 클로저를 만드는 함수
      function makeOutListener(infowindow: any) {
        return function () {
          infowindow.close();
        };
      }
      const markers = positions.map((position: any) => {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(position.latitude, position.longitude),
          image: makerImage,
        });

        const iwContent = `<div>${position.cat}</div>`;
        const infoWindow = new kakao.maps.InfoWindow({
          content: iwContent,
        });
        kakao.maps.event.addListener(
          marker,
          'mouseover',
          makeOverListener(kakaoMap, marker, infoWindow),
        );
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infoWindow));
        kakao.maps.event.addListener(marker, 'click', function () {
          console.log(`${position.cat}`);
          setClickedItem(`${position.cat}`);
        });
        return marker;
      });

      clusterer.addMarkers(markers);
    }
  }, [address, positions]);

  return (
    <S.Wrap>
      <S.Map ref={kakaoMapRef} height={height} isError={error} />
      {error && (
        <Label font={14} color="RED" margin={'5px 0 0'}>
          {error}
        </Label>
      )}
      {clickedItem && (
        <S.CatDescription>
          <S.CatDescriptionContent>
            <Image src={'/images/place.PNG'} width="36px" margin={'0 5px 0 0'} />
            <Label font={16} weight="bold" margin={'0 20px 0 0'}>
              {clickedItem}
            </Label>
            <Image src={'/images/heart.PNG'} width="12px" margin={'0 2px 0 0'} />
            <Label font={14}>팔로워 1.7k</Label>
          </S.CatDescriptionContent>
        </S.CatDescription>
      )}
    </S.Wrap>
  );
};
