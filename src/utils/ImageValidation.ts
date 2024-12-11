export const IsImageCheck = (file: File | null): boolean => {
  if (!file) {
    console.error("No file provided.");
    return false;
  }

  const validImageTypes: string[] = ["image/jpeg", "image/png", "image/gif"];
  const maxFileSize = 5 * 1024 * 1024; // 5MB max file size

  // Check if the file type is valid
  if (!validImageTypes.some((type) => file.type.includes(type))) {
    console.error("Invalid file type. Please upload a JPEG, PNG, or GIF image.");
    return false;
  }

  // Check if the file size is within the limit
  if (file.size > maxFileSize) {
    console.error("File is too large. Please upload an image smaller than 5MB.");
    return false;
  }

  // Check if the file is not empty
  if (file.size === 0) {
    console.error("File is empty.");
    return false;
  }

  // If all checks pass
  console.log("File is a valid image.");
  return true;
};

