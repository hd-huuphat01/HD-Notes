import { Button, ButtonSpinner, ButtonText } from "@gluestack-ui/themed";
import React from "react";

interface CustomButtonViewProps {
  buttonText: string;
  onSubmit: () => void;
  accessibilityLabel?: string;
  isSubmitting?: boolean;
  isDisabled?: boolean;
}

const CustomButtonView: React.FC<CustomButtonViewProps> = ({
  buttonText,
  onSubmit,
  accessibilityLabel = "Next",
  isSubmitting = false,
  isDisabled = false,
}) => (
  <Button
    isDisabled={isDisabled}
    onPress={onSubmit}
    size="xl"
    rounded="$lg"
    w="$full"
    accessibilityLabel={accessibilityLabel}
    accessibilityRole="button"
    bgColor="$primary600"
  >
    {isSubmitting ? (
      <ButtonSpinner />
    ) : (
      <ButtonText color="$white">{buttonText}</ButtonText>
    )}
  </Button>
);

export default CustomButtonView;
