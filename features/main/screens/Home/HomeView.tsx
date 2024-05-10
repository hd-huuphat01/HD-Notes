import React from "react";
import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  VStack,
  Image,
  Text,
  Icon,
  SettingsIcon,
  SearchIcon,
  FlatList,
  PaperclipIcon,
  ChevronRightIcon,
  AddIcon,
  Pressable,
} from "@gluestack-ui/themed";
import { FolderClosed, FolderPlus } from "lucide-react-native";
import { ModalCustom } from "@/components/Elements";
import { ModalCreateFolder } from "@/components/Elements";
import { Folder } from "@/type/CollectionType";
// import Swipeable from "react-native-gesture-handler/Swipeable";

interface HomeViewProps {
  showModalLogout: boolean;
  handleSetShowModalLogout: () => void;
  handleLogout: () => void;

  folderList: Folder[];

  showModalCreate: boolean;
  handleSetShowModalCreate: () => void;
  newNameGroup: string;
  handleEditName: (text: string) => void;
  hanlderCreateFolder: () => void;
}

// const renderLeftActions = (progress, dragX) => {
//   const trans = dragX.interpolate({
//     inputRange: [0, 50, 100, 101],
//     outputRange: [-20, 0, 0, 1],
//   });
//   return (
//     <Pressable>
//       <FolderPlus color="#DAA520" size={24} strokeWidth={2} />
//     </Pressable>
//   );
// };

const data = [0, 1, 2, 3, 4, 5, 6];

const HomeView: React.FC<HomeViewProps> = ({
  showModalLogout,
  handleSetShowModalLogout,
  handleLogout,

  folderList,

  showModalCreate,
  handleSetShowModalCreate,
  newNameGroup,
  handleEditName,
  hanlderCreateFolder,
}) => (
  <Box pt="$16" paddingHorizontal="$4" pb="$10" flex={1}>
    <Box alignItems="flex-end">
      <Pressable onPress={handleSetShowModalLogout}>
        <Icon as={SettingsIcon} color="$secondary_yellow4" w="$6" h="$6" />
      </Pressable>
    </Box>
    <Text color="$black" fontSize="$xl" fontWeight="bold" pt="$4">
      Folders
    </Text>
    <Input mt="$3" bgColor="$secondary300">
      <InputSlot pl="$3">
        <InputIcon as={SearchIcon} color="$secondary500" />
      </InputSlot>
      <InputField color="$black" placeholder="Search..." />
    </Input>
    <Box flex={1} w="$full" pt="$5">
      {folderList && (
        <FlatList
          data={folderList}
          renderItem={({ item }) => (
            <Box
              p="$2"
              flexDirection="row"
              bgColor="$white"
              mb="$3"
              borderRadius="$md"
              justifyContent="space-between"
            >
              <Box flexDirection="row" alignItems="center">
                {/* <Icon as={FolderClosed} color="#DAA520" w="$10" h="$10" /> */}
                <FolderClosed color="#DAA520" size={24} strokeWidth={1} />
                <Text color="$black" fontSize="$xl" ml="$2" fontWeight="$light">
                  Notes group
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="center">
                <Text
                  color="$secondary600"
                  fontSize="$lg"
                  ml="$2"
                  fontWeight="$light"
                >
                  5
                </Text>
                <Icon
                  as={ChevronRightIcon}
                  color="$secondary400"
                  w="$6"
                  h="$6"
                />
              </Box>
            </Box>
          )}
          // keyExtractor={(item) => item}
        />
      )}
    </Box>
    <Box
      flexDirection="row"
      alignItems="center"
      pt="$1"
      justifyContent="flex-end"
    >
      <Pressable onPress={handleSetShowModalCreate}>
        <FolderPlus color="#DAA520" size={24} strokeWidth={2} />
      </Pressable>
      {/* <Icon as={FolderPlus} color="$secondary_yellow4" w="$10" h="$10" /> */}
    </Box>
    <ModalCustom
      isOpen={showModalLogout}
      onClose={handleSetShowModalLogout}
      title="Logout"
      content="Are you want to log out?"
      leftButtonText="No"
      rightButtonText="Yes"
      onPressLeft={handleSetShowModalLogout}
      onPressRight={handleLogout}
    />
    <ModalCreateFolder
      isOpen={showModalCreate}
      onClose={handleSetShowModalCreate}
      newName={newNameGroup}
      onChangeName={handleEditName}
      onPressCreate={hanlderCreateFolder}
    />
  </Box>
);
export default HomeView;
