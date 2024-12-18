import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IsVideoCheck } from "@/utils/FileValidation";

const VideoUpload = () => {
  const [VideoPreview, setVideoPreview] = useState("");
  const [files, setFiles] = useState(null);

  console.log(files, VideoPreview);

  useEffect(() => {
    if (!files) return;

    // Generate the preview
    const videoUrl = URL.createObjectURL(files);
    setVideoPreview(videoUrl);

    // Cleanup on unmount
    return () => {
      URL.revokeObjectURL(videoUrl);
      setVideoPreview(null);
    };
  }, [files]);

  const handleDragUpload = (
    dragevent) => {
    dragevent.preventDefault();

    const droppedFiles = dragevent.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      const file = newFiles[0];
      if (!file) return;

      const checkVideo = IsVideoCheck(file);

      if (checkVideo && file) {
        setFiles(file);
      }
    }
  };

  const handleChangeUpload = (
    changeevent
  ) => {
    const file = changeevent.target.files?.[0] ?? null;

    if (!file) return;

    const checkVideo = IsVideoCheck(file);

    if (file && checkVideo) {
      setFiles(file);
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
          htmlFor="video-upload"
          className="border-2 border-dashed border-zinc-200 rounded-lg p-4 dark:border-zinc-800"
        >
          <div className="flex h-28 select-none items-center justify-center space-x-2">
            <FiUpload size={18} className="text-zinc-500 dark:text-zinc-400" />

            <p className="text-zinc-500 dark:text-zinc-400">
              Drag & Drop your video here
            </p>
          </div>
        </Label>

        <Input
          id="video-upload"
          type="file"
          accept="video/*"
          className="hidden"
          onChange={(e) => handleChangeUpload(e)}
        />

        {VideoPreview && (
          <div className="relative">
            <video
              src={VideoPreview}
              className="aspect-video border border-zinc-200 w-full rounded-lg overflow-hidden dark:border-zinc-800"
              controls
            />

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="absolute top-1 right-1 h-6 w-6 p-1"
                    onClick={() => {
                      setVideoPreview("");
                      setFiles(null);
                    }}
                  >
                    <IoClose />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Remove This Video</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoUpload;
