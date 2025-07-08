import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const Page = () => {
    return ( 
        <div className="p-4">
            <div className="flex flex-col gap-y-4">
                <div>
                    <Button>
                        I am a button!
                    </Button>
                </div>
                <div>
                    <Input placeholder="I am an input!" />
                </div>
                <div>
                    <Progress value={50} />
                </div>
                <div>
                    <Textarea placeholder="I am a text area!" />
                </div>
            </div>
        </div>
     );
}
 
export default Page;