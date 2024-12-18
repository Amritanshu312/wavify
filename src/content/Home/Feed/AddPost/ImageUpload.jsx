import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IsImageCheck } from "@/utils/FileValidation";

const ImageUpload = () => {
  const [ImagePreview, setImagePreview] = useState("");
  const [files, setFiles] = useState(null);

  useEffect(() => {
    if (files) {
      const image = new window.Image();
      const objectUrl = URL.createObjectURL(files);
      image.onload = () => {
        console.log("Image Width:", image.width);
        console.log("Image Height:", image.height);

        // Clean up the object URL after loading
        URL.revokeObjectURL(objectUrl);
      };
      image.src = objectUrl;
    }
  }, [files]);

  const handleDragUpload = (
    dragevent) => {
    dragevent.preventDefault();

    const droppedFiles = dragevent.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      const file = newFiles[0];
      if (!file) return;

      const checkImage = IsImageCheck(file);

      if (checkImage && file) {
        setFiles(file);
        previewImage(file);
      }
    }
  };

  const handleChangeUpload = (
    changeevent) => {
    const file = changeevent.target.files?.[0] ?? null;

    if (!file) return;

    const checkImage = IsImageCheck(file);

    if (file && checkImage) {
      setFiles(file);
      previewImage(file);
    }
  };

  const previewImage = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto mt-4"
      onDrop={(e) => handleDragUpload(e)}
      onDragOver={(event) => event.preventDefault()}
    >
      <div className="flex flex-col space-y-4">
        <Label
          htmlFor="image-upload"
          className="border-2 border-dashed border-zinc-200 rounded-lg p-4 dark:border-zinc-800"
        >
          <div className="flex h-28 select-none items-center justify-center space-x-2">
            <FiUpload size={18} className="text-zinc-500 dark:text-zinc-400" />

            <p className="text-zinc-500 dark:text-zinc-400">
              Drag & Drop your images here
            </p>
          </div>
        </Label>

        <Input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleChangeUpload(e)}
        />

        {ImagePreview && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative">
              <Image
                src={ImagePreview}
                alt="Preview"
                width={200}
                height={200}
                className="aspect-square object-cover border border-zinc-200 w-full rounded-lg overflow-hidden dark:border-zinc-800"
              />

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      className="absolute top-1 right-1 h-6 w-6 p-1"
                      onClick={() => {
                        setImagePreview("");
                        setFiles(null);
                      }}
                    >
                      <IoClose />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Remove This Image</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
