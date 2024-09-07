'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import React, {useState} from 'react';

import {tanstackDefaultOptions} from '@/src/utils/constants';

interface Props {
  children: React.ReactNode;
}

function QueryProvider({children}: Props) {
  const [queryClient] = useState(() => new QueryClient(tanstackDefaultOptions));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools buttonPosition='top-left' />
    </QueryClientProvider>
  );
}

export default QueryProvider;
