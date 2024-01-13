export const titleWithPathname = {
  '/login': '로그인',
  '/profile': '프로필',
};

export const tanstackDefaultOptions = {
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};
