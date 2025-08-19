import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant={"elevated"}>Clicable Button</Button>
        </div>

        <div>
          <Input placeholder="i am an input" />
        </div>

        <div>
          <Progress value={33} />
        </div>

        <div>
          <Textarea value={"I am a text area"} />
        </div>

        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
