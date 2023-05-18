import { Button } from "@/components/uis/button"; //"@/components/uis/button";
import { ModeToggle } from "./ModeToggle";
import { Icons } from "@/components/icons";
import { appWindow } from "@tauri-apps/api/window";
import { X } from "lucide-react";

function Titlebar() {
  const minimizeWindow = () => {
    appWindow?.minimize();
  };

  const closeWindow = () => {
    appWindow?.close();
  };

  return (
    <>
      <div
        role="menubar"
        className="flex items-center h-10 p-1 pl-2 space-x-1 border border-b rounded-none bg-background lg:pl-4 focus:outline-none"
        tabIndex={0}
        data-orientation="horizontal"
      >
        <div
          data-tauri-drag-region
          className="inline-flex justify-end w-full h-full"
        >
          <p
            data-tauri-drag-region
            className="w-full font-bold text-left align-middle pointer-events-none poin"
          >
            Tauri Desktop Template Demo
          </p>
          <div className="pr-3">
            <ModeToggle />
          </div>

          <Button
            onClick={minimizeWindow}
            variant="ghost"
            className="h-8 focus:outline-none"
          >
            <Icons.minimize className="w-3 h-3" />
          </Button>
          <Button
            onClick={closeWindow}
            variant="ghost"
            className="h-8 focus:outline-none"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Titlebar;
