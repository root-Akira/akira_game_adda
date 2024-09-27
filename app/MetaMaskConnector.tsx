// components/MetaMaskConnector.tsx

'use client'

import { useEffect, useState } from 'react'
import Web3 from 'web3'
import { Button } from "@/components/ui/button"

const MetaMaskConnector = () => {
  const [account, setAccount] = useState<string | null>(null)
  const [web3, setWeb3] = useState<Web3 | null>(null)

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        // Create a Web3 instance
        const web3Instance = new Web3(window.ethereum)
        setWeb3(web3Instance)

        // Get the user's account
        const accounts = await web3Instance.eth.getAccounts()
        setAccount(accounts[0])
      } catch (error) {
        console.error("Error connecting to MetaMask:", error)
      }
    } else {
      alert('Please install MetaMask!')
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum)
      setWeb3(web3Instance)

      // Get the user's account if already connected
      web3Instance.eth.getAccounts().then((accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0])
        }
      })
    }
  }, [])

  return (
    <div className="text-center my-8">
      {account ? (
        <div>
          <p className="text-lg">Connected Account: {account}</p>
          <Button onClick={() => setAccount(null)}>Disconnect</Button>
        </div>
      ) : (
        <Button onClick={connectToMetaMask} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" >
          Connect MetaMask
        </Button>
      )}
    </div>
  )
}

export default MetaMaskConnector