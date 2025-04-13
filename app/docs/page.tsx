import Link from "next/link"
import { ArrowLeft, Book, Code, FileText, Lightbulb, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocsPage() {
  return (
    <div className="container max-w-6xl py-12 md:py-16">
      <div className="flex items-center mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Solana Documentation</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Get started with Solana development. Learn how to build decentralized applications on the fastest blockchain
            in the world.
          </p>
        </div>
        <Tabs defaultValue="quickstart" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
            <TabsTrigger value="quickstart">Quickstart</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
          </TabsList>
          <TabsContent value="quickstart" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-purple-500" />
                  Installation
                </CardTitle>
                <CardDescription>Set up your development environment for Solana</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  To get started with Solana development, you'll need to install the Solana CLI tools. Run the following
                  command in your terminal:
                </p>
                <div className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>sh -c "$(curl -sSfL https://release.solana.com/v1.17.0/install)"</code>
                </div>
                <p>
                  This will download and install the latest Solana release. After installation, you can verify it's
                  working by running:
                </p>
                <div className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>solana --version</code>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-500" />
                  Create Your First Program
                </CardTitle>
                <CardDescription>Build a simple Solana program using Rust</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Solana programs are written in Rust. Here's a simple "Hello World" program to get you started:</p>
                <div className="bg-muted p-4 rounded-md overflow-x-auto">
                  <pre>
                    <code>{`use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    msg!("Hello, Solana!");
    Ok(())
}`}</code>
                  </pre>
                </div>
                <p>
                  Save this code in a file named <code>lib.rs</code> and build it using the Solana BPF toolchain.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-purple-500" />
                  Key Concepts
                </CardTitle>
                <CardDescription>Essential concepts to understand Solana</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-semibold">Accounts</h3>
                    <p className="text-muted-foreground">
                      In Solana, accounts store data and SOL tokens. Every account has an address (public key) and is
                      owned by a program.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Programs</h3>
                    <p className="text-muted-foreground">
                      Programs (smart contracts) in Solana are stateless. They operate on accounts passed to them during
                      execution.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Transactions</h3>
                    <p className="text-muted-foreground">
                      Transactions contain one or more instructions, each specifying a program to call, accounts to
                      pass, and data.
                    </p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Rent</h3>
                    <p className="text-muted-foreground">
                      Accounts must maintain a minimum balance to stay "rent-exempt" and avoid being purged from the
                      network.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="guides" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-purple-500" />
                  Development Guides
                </CardTitle>
                <CardDescription>Step-by-step tutorials for Solana development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Creating a Token on Solana (SPL Token)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Building a Simple NFT Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Implementing Cross-Program Invocation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Working with Program Derived Addresses (PDAs)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Optimizing Program Performance
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-blue-500" />
                    Web3.js Integration
                  </CardTitle>
                  <CardDescription>Connect your frontend to Solana</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The <code>@solana/web3.js</code> library allows you to interact with the Solana blockchain from
                    JavaScript applications.
                  </p>
                  <div className="bg-muted p-4 rounded-md overflow-x-auto">
                    <pre>
                      <code>{`import { Connection, PublicKey } from '@solana/web3.js';

// Connect to the Solana devnet
const connection = new Connection(
  'https://api.devnet.solana.com',
  'confirmed'
);

// Get account info
const publicKey = new PublicKey('YOUR_ADDRESS');
const accountInfo = await connection.getAccountInfo(publicKey);`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-purple-500" />
                    Wallet Integration
                  </CardTitle>
                  <CardDescription>Connect user wallets to your dApp</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Use the <code>@solana/wallet-adapter</code> libraries to easily integrate with popular Solana
                    wallets:
                  </p>
                  <div className="bg-muted p-4 rounded-md overflow-x-auto">
                    <pre>
                      <code>{`import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function App() {
  const { publicKey, sendTransaction } = useWallet();
  
  return (
    <div>
      <WalletMultiButton />
      {publicKey && <p>Connected: {publicKey.toString()}</p>}
    </div>
  );
}`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="api" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Solana API Reference</CardTitle>
                <CardDescription>
                  Comprehensive documentation for Solana's core libraries and interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Core Libraries</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          solana_program
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          @solana/web3.js
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          @solana/spl-token
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          @solana/wallet-adapter
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">RPC Methods</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                          <Terminal className="h-4 w-4" />
                          getAccountInfo
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                          <Terminal className="h-4 w-4" />
                          getBalance
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                          <Terminal className="h-4 w-4" />
                          getTransaction
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                          <Terminal className="h-4 w-4" />
                          sendTransaction
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-primary hover:underline flex items-center gap-2">
                          <Terminal className="h-4 w-4" />
                          getProgramAccounts
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">API Endpoints</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-mono">Mainnet Beta:</span>
                      <span className="font-mono text-muted-foreground">https://api.mainnet-beta.solana.com</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-mono">Testnet:</span>
                      <span className="font-mono text-muted-foreground">https://api.testnet.solana.com</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-mono">Devnet:</span>
                      <span className="font-mono text-muted-foreground">https://api.devnet.solana.com</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}