import React from "react";

export const Header = React.lazy(() => import("../components/header/Header"));
export const Wallet = React.lazy(() => import("../components/wallet/Wallet"));
export const Footer = React.lazy(() => import("../components/footer/Footer"));
export const BottomContainer = React.lazy(() =>
  import("../components/BottomContainer"),
);
