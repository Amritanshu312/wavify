import { toast } from "react-toastify";

export const IsImageCheck = (file: File | null): boolean => {
  if (!file) {
    toast("No file provided.")
    return false;
  }

  const validImageTypes: string[] = ["image/jpeg", "image/png", "image/gif"];
  const maxFileSize = 5 * 1024 * 1024; // 5MB max file size

  // Check if the file type is valid
  if (!validImageTypes.some((type) => file.type.includes(type))) {
    toast("Invalid file type. Please upload a JPEG, PNG, or GIF image.");
    return false;
  }

  // Check if the file size is within the limit
  if (file.size > maxFileSize) {
    toast("File is too large. Please upload an image smaller than 5MB.");
    return false;
  }

  // Check if the file is not empty
  if (file.size === 0) {
    toast("File is empty.");
    return false;
  }

  return true;
};

