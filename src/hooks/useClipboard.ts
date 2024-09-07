import {useCallback, useState} from 'react';

import {createBlob} from '@/src/utils/image';

type ClipboardDataType = string | {type: string; url: string};

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(async (data: ClipboardDataType) => {
    try {
      if (typeof data === 'string') {
        await navigator.clipboard.writeText(data);
      } else if (data && typeof data === 'object') {
        const imageBlob = await createBlob(data.url);
        await navigator.clipboard.write([
          new ClipboardItem({
            [imageBlob.type]: imageBlob,
          }),
        ]);
      }

      setIsCopied(true);
      alert('복사에 성공했습니다.');
    } catch (error) {
      alert('복사에 실패했습니다.');
    }
  }, []);
  return {copyToClipboard, isCopied};
};

export default useClipboard;
