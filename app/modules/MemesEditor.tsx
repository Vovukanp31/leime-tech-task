"use client";

import { useEffect, useState } from "react";
import TableOfMemes from "../components/tables/TableOfMemes";
import { IMeme } from "../interfaces/meme";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { MemeValidationErrorEnum } from "../enums/memeValidationError.enum";
import { hasMemeChanges, validateMeme } from "../lib/memeUtils";
import { useMemes } from "../hooks/useMemes";

const MemesEditor = () => {
  const { memes, updateMeme } = useMemes();

  const [selectedMeme, setSelectedMeme] = useState<IMeme | null>(null);
  const [editedMeme, setEditedMeme] = useState<IMeme | null>(null);
  const [incorrectDataError, setIncorrectDataError] =
    useState<MemeValidationErrorEnum | null>(null);

  const isOpen = !!selectedMeme?.id;

  useEffect(() => {
    if (selectedMeme) {
      setEditedMeme({ ...selectedMeme });
    }
  }, [selectedMeme]);

  const handleInputChange = (field: keyof IMeme, value: string | number) => {
    setEditedMeme((prev) => prev && { ...prev, [field]: value });
  };

  const handleClose = () => {
    setIncorrectDataError(null);
    setSelectedMeme(null);
    setEditedMeme(null);
  };

  const submitHandler = () => {
    if (!editedMeme || !selectedMeme) return;

    if (!hasMemeChanges(selectedMeme, editedMeme)) {
      handleClose();
      return;
    }

    const validationError = validateMeme(editedMeme);

    if (validationError) {
      setIncorrectDataError(validationError);
      return;
    }

    updateMeme(editedMeme);
    handleClose();
  };

  return (
    <section className="w-full">
      <TableOfMemes memes={memes} onEdit={setSelectedMeme} />

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>

              <ModalBody>
                <Input
                  isReadOnly
                  label="ID"
                  type="number"
                  value={String(editedMeme?.id ?? "")}
                />
                <Input
                  label="Title"
                  value={editedMeme?.title ?? ""}
                  isInvalid={
                    incorrectDataError === MemeValidationErrorEnum.TITLE
                  }
                  errorMessage="Title must be 3 to 100 characters long."
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
                <Input
                  label="Image URL"
                  value={editedMeme?.image ?? ""}
                  isInvalid={
                    incorrectDataError === MemeValidationErrorEnum.IMAGE
                  }
                  errorMessage="Incorrect URL. It have to contain jpg, jpeg, png, gif formats"
                  onChange={(e) => handleInputChange("image", e.target.value)}
                />
                <Input
                  label="Likes"
                  value={String(editedMeme?.likes ?? 0)}
                  isInvalid={
                    incorrectDataError === MemeValidationErrorEnum.LIKES
                  }
                  errorMessage="It have to be integer between 0 and 99."
                  onChange={(e) =>
                    handleInputChange("likes", parseInt(e.target.value) || 0)
                  }
                />
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={submitHandler}>
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default MemesEditor;
