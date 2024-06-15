# Anchor Program Tests
This project is about creating test cases using Anchor.

## Description

There are two functions (Increment -> +1 to count, Decrement -> -1 to count) which are defined in the lib.rs file and with the help of the IDL we can create test-cases for both functions.
## Getting Started

### Setting up the project

After using git clone, run the command

```javascript
yarn install
```
To install the necessary dependencies required.

### Build and Deploy the Program

In the test file, paste your local Solana wallet key in the form of number[] inside the .config/solana/ folder.
```typescript
  let given_secret = Uint8Array.from([]); // Add your local solana wallet key stored as number[]

```
Before you move on to building, Verify in the Anchor.toml file that the path in the wallet actually matches the path of your stored Keypair.
```typescript
[provider]
cluster = "devnet"
wallet = "~/.config/solana/devnet.json"
```
![image](https://github.com/Sidkjr/Solproof-Intermediate-M2P/assets/40859683/30e47864-d3b6-4554-9182-f9b5e8261d87)

Since My wallet is stored in devnet.json, I've added the related path. Make sure to verify your's. It will most probably be id.json.
Next go ahead and build it using 
```typescript
anchor build
```

After the build is successful, It's time to Deploy
```typescript
anchor deploy
```

### Run the tests

To run the tests simply type 
```typescript
anchor test
```

### Correctness

In the end you'll recieve Tx signatures for CreateAccount, Increment and Decrement functions, Which you can go ahead and paste it in the Solana Explorer to verify the logs. Happy Coding!

## Authors

Siddhant Khare
