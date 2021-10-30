const HOME_URL = process.env.NEXT_PUBLIC_HOME_URL;

export const PAGE = {
  HOME: '/',
  INSERT: '/insert',
  SEARCH: '/search',
  ALARM: '/alarm',
  ME: '/me',
  CAT_DETAIL: (id: number) => `/cat/${id}`,

  NAVER_CALLBACK: `${HOME_URL}/callback/naver`,
  KAKAO_CALLBACK: `${HOME_URL}/callback/kakao`,
};
