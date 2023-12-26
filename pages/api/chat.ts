import {NextApiRequest} from 'next';

import {NextApiResponseServerIO} from './socket/io';

const chatHandler = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === 'POST') {
    // get message
    const message = JSON.parse(req.body);

    // dispatch to channel "message"
    res.socket.server.io.emit('message', message);

    // return message
    res.status(201).json(message);
  }
};

export default chatHandler;
