import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard - Crypto Wallet
import Dashboard from "../pages/Dashboard/index"
import CryptoExchange from "../pages/crypto-exchange"
import CryptoWallet from "../pages/wallet-login"
import CryptoOrders from "../pages/CryptoOrders/crypto-orders"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  //profile
  { path: "/profile", component: UserProfile },

  //exchange & wallet page
  { path: "/wallet-login", component: CryptoWallet },
  { path: "/exchange", component: CryptoExchange },
  { path: "/orders", component: CryptoOrders },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { userRoutes, authRoutes }
