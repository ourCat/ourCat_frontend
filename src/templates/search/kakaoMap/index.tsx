import * as S from './style';
import { Label } from 'components';
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

  useEffect(() => {
    const kakaoMapElement = kakaoMapRef.current;
    const options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(kakaoMapElement, options);

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
      var clusterer = new kakao.maps.MarkerClusterer({
        map: kakaoMap,
        averageCenter: true,
        minLevel: 8,
      });

      var markers = positions.map(
        (position: any) =>
          new kakao.maps.Marker({
            position: new kakao.maps.LatLng(position.latitude, position.longitude),
          }),
      );

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
    </S.Wrap>
  );
};
