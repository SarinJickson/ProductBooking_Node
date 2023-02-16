const Web3 = require("web3");
const { productBooking } = require("./config");

async function main() {
  const product_name = "toy"; // intiallly setting product name for functionality check
  const quantity = 20; // intiallly setting quantity for functionality check
  const quantity_for_buy = 1; // intiallly setting quantity_for_buy to check buyproduct function
  const price = 1; // intiallly setting price for functionality check
  const payment = Web3.utils.toWei("1", "ether"); // intiallly setting payment to check buyproduct function
  //console.log(payment)

  async function createProduct() {
    await productBooking.methods
      .createProduct(product_name, quantity, price)
      .send({ from: "0x04ecd7262b7123a398a39252d2050fd0cf06856b" })
      .then((receipt) => {
        console.log("Product is added", receipt);
      })
      .catch((error) => {
        console.error("Error in adding products", error);
      });
  }
  await createProduct();

  async function productList() {
    await productBooking.methods
      .productList()
      .send({ from: "0x04ecd7262b7123a398a39252d2050fd0cf06856b" })
      .then((receipt) => {
        console.log("Product List", receipt);
      })
      .catch((error) => {
        console.error("Error in showing Products", error);
      });
  }
  await productList();

  async function contractBalance() {
    await productBooking.methods
      .contractBalance()
      .send({ from: "0x04ecd7262b7123a398a39252d2050fd0cf06856b" })
      .then((receipt) => {
        console.log("Contract balance", receipt);
      })
      .catch((error) => {
        console.error("Error in showing balance", error);
      });
  }
  await contractBalance();

  async function buyProduct() {
    await productBooking.methods
      .buyProduct(product_name, quantity_for_buy)
      .send({
        from: "0x04ecd7262b7123a398a39252d2050fd0cf06856b",
        value: payment,
      })
      .then((receipt) => {
        console.log("Product is buyed", receipt);
      })
      .catch((error) => {
        console.error("Error in buying products", error);
      });
  }
  await buyProduct();
}

main();
