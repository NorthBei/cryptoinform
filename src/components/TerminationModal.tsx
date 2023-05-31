import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';

function TerminalModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      preserveScrollBarGap={false}
      isCentered
    >
      <ModalContent>
        <ModalHeader>Termination of Service</ModalHeader>
        <ModalBody>
          <Text>
            Our services be terminated on 2023/06/01. We apologize for any
            inconvenience caused and appreciate your support.
          </Text>
          <Text mt="20px">Thank you for your understanding.</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="brand" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default TerminalModal;
