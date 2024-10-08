import {QueryClient} from '@tanstack/react-query';
import {cache} from 'react';

import {tanstackDefaultOptions} from '@/src/utils/constants';

const getQueryClient = cache(() => new QueryClient(tanstackDefaultOptions));
export default getQueryClient;
