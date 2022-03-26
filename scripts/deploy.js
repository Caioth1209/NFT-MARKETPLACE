const hre = require("hardhat");

async function main() {
 
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();

  await nftMarket.deployed();

  console.log("nftMarket deployed to:", nftMarket.address);
  // console.log("HASH nftMarket deployed to:", nftMarket.deployTransaction.hash);

  const NFT = await hre.ethers.getContractFactory("NFT");

  const nft = await NFT.deploy(nftMarket.address);

  await nft.deployed();

  console.log("Nft deployed to:", nft.address);
  // console.log("HASH Nft deployed to:", nft.deployTransaction.hash);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
