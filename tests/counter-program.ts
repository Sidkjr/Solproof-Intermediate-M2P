import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { CounterProgram } from "../target/types/counter_program";
import { Keypair, SystemProgram } from "@solana/web3.js";

describe("counter-program", () => {
  let given_secret = Uint8Array.from([]); // Add your local solana wallet key stored as number[]
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());
  const provider = anchor.AnchorProvider.env();
  const program = anchor.workspace.CounterProgram as Program<CounterProgram>;
  let counter = Keypair.generate();
  let authorizer = Keypair.fromSecretKey(given_secret);

  it("Create Counter account!", async () => {
    const tx = await program.methods.createCounter()
      .accounts({
        counter: counter.publicKey,
        authority: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId
      } as unknown as {
        counter: anchor.web3.PublicKey,
        authority: anchor.web3.PublicKey,
        systemProgram: anchor.web3.PublicKey,
      })
      .signers([counter])
      .rpc();
    console.log("Your transaction signature", tx);
  });
  it("Increment Counter account!", async () => {
    const tx = await program.methods.increment()
      .accounts({
        counter: counter.publicKey,
      } as unknown as {
        counter: anchor.web3.PublicKey,
      })
      .signers([authorizer])
      .rpc();
    console.log("Your transaction signature", tx);
  });
  it("Decrement Counter account!", async () => {
    const tx = await program.methods.decrement()
      .accounts({
        counter: counter.publicKey
      } as unknown as {
        counter: anchor.web3.PublicKey,
      })
      .signers([authorizer])
      .rpc();
    console.log("Your transaction signature", tx);
  });
});
