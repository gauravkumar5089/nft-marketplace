import type { Principal } from '@dfinity/principal';
export interface NFT {
  'getCaninsterId' : () => Promise<Principal>,
  'getImage' : () => Promise<Array<number>>,
  'getName' : () => Promise<string>,
  'getOwner' : () => Promise<Principal>,
}
export interface _SERVICE extends NFT {}
