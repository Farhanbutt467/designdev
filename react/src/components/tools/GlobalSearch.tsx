import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalSearch = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        hideClose={true}
        className="max-w-[506px] h-[450px] overflow-hidden pr-0 bg-transparent"
      >
        <DialogHeader className="hidden">
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
        <div>
          <div className="bg-background rounded-[10px] border-2 border-border shadow-common-2">
            <Input
              placeholder="Search Anything"
              className="focus-visible:border-0"
            />
          </div>
          <div className="h-[350px]">
            <div className="bg-background mt-2.5 rounded-[10px] border-2 border-border shadow-common-2">
              <div className="max-h-[350px] overflow-y-auto overflow-x-hidden shadow-select border-0 p-3">
                <p>No item found</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalSearch;
