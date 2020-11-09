const SHA256 = require('crypto-js/sha256');

class Block{
  constructor(id, timestamp, data, previousHash=''){
    this.id = id;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash(){
    return SHA256(this.id + this.timestamp + this.previousHash + JSON.stringify(data)).toString();
  }
}


class BlockChain{
  constructor(){
    this.chain = [];
  }

  createGenesisBlock(){
    return new Block(0, Date.now(),"Genesis Block","0");
  }

}
