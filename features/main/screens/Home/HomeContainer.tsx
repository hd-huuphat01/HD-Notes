import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";

import HomeView from "./HomeView";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Folder } from "@/type/CollectionType";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  const [showModalLogout, setShowModalLogout] = useState<boolean>(false);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [nameNewGroup, setNameNewGroup] = useState<string>("");
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection("Folders")
      // .doc(auth().currentUser?.getIdToken)
      .onSnapshot((querySnapshot) => {
        console.log("Folders data: ", querySnapshot.docs);
        const listFolder: Folder[] = [];

        querySnapshot.forEach((documentSnapshot: any) => {
          listFolder.unshift({
            key: documentSnapshot.id,
            title: documentSnapshot.data.title,
            by: documentSnapshot.data.by,
          });
        });

        setFolders(listFolder);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [folders]);

  const onHandleCreateFolder = () => {
    console.log("nameNewGroup", nameNewGroup);
    firestore()
      .collection("Folders")
      .add({
        title: nameNewGroup,
        by: auth().currentUser?.uid,
      })
      .then(() => {
        console.log("Folder added!");
        setNameNewGroup("");
        setShowModalCreate(false);
      })
      .catch((error) => {
        console.log("error add", error);
      });
  };
  return (
    <HomeView
      showModalLogout={showModalLogout}
      handleSetShowModalLogout={() => setShowModalLogout(!showModalLogout)}
      folderList={folders}
      showModalCreate={showModalCreate}
      handleSetShowModalCreate={() => setShowModalCreate(!showModalCreate)}
      newNameGroup={nameNewGroup}
      handleEditName={(text) => setNameNewGroup(text)}
      handleLogout={async () => {
        await auth().signOut();
        await AsyncStorage.setItem("@currentUser", "");
        router.replace("/sign-in");
      }}
      hanlderCreateFolder={onHandleCreateFolder}
    />
  );
};

export default HomeContainer;
