// src/components/DemoModal.js
import React from 'react';
import { Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

function DemoModal({ isOpen, onClose, onOpen }) {
  return (
    <>
      <Button onClick={onOpen} key="full" m={4}>
        Watch Demo
      </Button>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Watch Demo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text></Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DemoModal;
