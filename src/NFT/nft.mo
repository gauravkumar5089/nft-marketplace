import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor class NFT (name:Text,owner:Principal,content:[Nat8]) = this{
    let itemName = name;
    let itemOwner = owner;
    let itemContent = content;


    public query func getName() : async Text {
        return itemName; 
    };
    public query func getOwner() : async Principal {
        return itemOwner;
    };
    public query func getImage() : async [Nat8] {
        return itemContent;
    };

    public query func getCaninsterId() : async Principal{
        return Principal.fromActor(this);
    };
}
