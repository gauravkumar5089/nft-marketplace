export const idlFactory = ({ IDL }) => {
  const NFT = IDL.Service({
    'getCaninsterId' : IDL.Func([], [IDL.Principal], ['query']),
    'getImage' : IDL.Func([], [IDL.Vec(IDL.Nat8)], ['query']),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getOwner' : IDL.Func([], [IDL.Principal], ['query']),
  });
  return NFT;
};
export const init = ({ IDL }) => {
  return [IDL.Text, IDL.Principal, IDL.Vec(IDL.Nat8)];
};
