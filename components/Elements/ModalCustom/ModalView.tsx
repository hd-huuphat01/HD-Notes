import {
  Button,
  ButtonText,
  CloseIcon,
  Heading,
  Icon,
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
  title: string;
  content: string;
  leftButtonText?: string;
  rightButtonText?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

const ModalView: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  leftButtonText,
  rightButtonText,
  onPressLeft,
  onPressRight,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalBackdrop />
    <ModalContent>
      <ModalHeader>
        <Heading size="lg" color="$secondary_yellow4">
          {title}
        </Heading>
        <ModalCloseButton>
          <Icon as={CloseIcon} />
        </ModalCloseButton>
      </ModalHeader>
      <ModalBody>
        <Text color="$black">{content}</Text>
      </ModalBody>
      <ModalFooter>
        {leftButtonText && (
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            borderColor="$secondary_yellow3"
            onPress={onPressLeft}
          >
            <ButtonText color="$black">{leftButtonText}</ButtonText>
          </Button>
        )}
        <Button
          size="sm"
          action="positive"
          backgroundColor="$secondary_yellow3"
          borderWidth="$0"
          onPress={onPressRight}
        >
          <ButtonText>{rightButtonText}</ButtonText>
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default ModalView;
