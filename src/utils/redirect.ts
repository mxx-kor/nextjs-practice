export const saveRedirectInfo = () => {
  const redirectInfo = {
    path: window.location.pathname,
    // 다른 필요한 정보들도 저장할 수 있음
  };
  localStorage.setItem('redirectInfo', JSON.stringify(redirectInfo));
};

export const redirectToPreviousPage = () => {
  const redirectInfoString = localStorage.getItem('redirectInfo');
  if (redirectInfoString) {
    const redirectInfo = JSON.parse(redirectInfoString);
    localStorage.removeItem('redirectInfo');
    return redirectInfo.path;
  } else {
    return '/';
  }
};
