import {
  Box,
  Button,
  ButtonText,
  CloseIcon,
  Heading,
  Icon,
  Input,
  InputField,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@gluestack-ui/themed";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  newName: string;
  onChangeName: (text: string) => void;
  onPressCreate?: () => void;
}

const ModalCreateFolderView: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  newName,
  onChangeName,
  onPressCreate,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalBackdrop />
    <ModalContent>
      <ModalHeader>
        <Heading size="xl" color="$secondary_yellow4">
          New folder
        </Heading>
        <ModalCloseButton>
          <Icon as={CloseIcon} />
        </ModalCloseButton>
      </ModalHeader>
      <Box pr="$4" pl="$4">
        <Input bgColor="$secondary200">
          <InputField
            color="$black"
            placeholder="Name"
            value={newName}
            onChangeText={(value: string) => onChangeName(value)}
          />
        </Input>
      </Box>

      <ModalFooter>
        <Button
          size="sm"
          action="positive"
          backgroundColor="$secondary_yellow3"
          borderWidth="$0"
          onPress={onPressCreate}
          isDisabled={!newName}
        >
          <ButtonText>Create</ButtonText>
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default ModalCreateFolderView;
