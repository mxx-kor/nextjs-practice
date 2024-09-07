import {Socket} from 'socket.io-client';

import {IMessage} from './chat';

export interface ServerToClientEvents {
  basicEmit: (a: number, b: string, c: Buffer) => void;
  error: (error: Error) => void;
  message: (f: IMessage) => void;
}

export type ClientSocketType = Socket<ServerToClientEvents>;
