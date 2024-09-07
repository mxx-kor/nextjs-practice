import {NextApiRequest} from 'next';

import {IMessage} from '@/src/types/chat';

import {NextApiResponseServerIO} from './socket/io';

const chatHandler = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === 'POST') {
    // get message
    const message = JSON.parse(req.body) as IMessage;

    // dispatch to channel "message"
    res.socket.server.io.emit('message', message);

    // return message
    res.status(201).json(message);
  }
};

export default chatHandler;
