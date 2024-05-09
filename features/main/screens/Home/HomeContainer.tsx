import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";

import HomeView from "./HomeView";
// import { useCreateAccount, useLogIn } from "firebase";

interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  return <HomeView />;
};

export default HomeContainer;
