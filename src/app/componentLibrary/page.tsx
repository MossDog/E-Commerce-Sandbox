"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
} from "@/components/ui/alert-dialog";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";
import { Dialog } from "@/components/ui/dialog";
import { Drawer } from "@/components/ui/drawer";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { HoverCard } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menubar } from "@/components/ui/menubar";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Pagination } from "@/components/ui/pagination";
import { Popover } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup } from "@/components/ui/radio-group";
import { ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Table } from "@/components/ui/table";
import { Tabs } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";
import { Tooltip } from "@/components/ui/tooltip";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <div>
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Product Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.</p>
              <p>Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Shipping Details</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.</p>
              <p>All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Return Policy</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>We stand behind our products with a comprehensive 30-day return policy. If you&apos;re not completely satisfied, simply return the item in its original condition.</p>
              <p>Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Open Alert Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Delete Item</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this item? This action cannot be undone.
            </AlertDialogDescription>
            <div className="flex gap-2 justify-end mt-4">
              <AlertDialogCancel asChild>
                <Button variant="outline">Cancel</Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button variant="destructive">Delete</Button>
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong!</AlertDescription>
        </Alert>
      </div>
      <div>
        <AspectRatio ratio={16/9} className="bg-muted flex items-center justify-center">
          <Image src="/sample.jpg" alt="Sample Alt" className="object-cover w-full h-full rounded-md" width={800} height={450} />
        </AspectRatio>
      </div>
      <div>
        <Avatar>
          <Image src="/avatar.jpg" alt="User avatar" className="rounded-full" width={100} height={100} />
        </Avatar>
      </div>
      <div>
        <Badge variant="secondary">New</Badge>
      </div>
      <div>
        <Breadcrumb>
          <nav aria-label="breadcrumb">
            <ol className="flex space-x-2">
              <li><a href="#" className="text-blue-600 hover:underline">Home</a></li>
              <li>/</li>
              <li><a href="#" className="text-blue-600 hover:underline">Products</a></li>
              <li>/</li>
              <li className="text-gray-500">Details</li>
            </ol>
          </nav>
        </Breadcrumb>
      </div>
      <div>
        <Button variant="elevated">Click Me</Button>
      </div>
      <div>
        <Calendar mode="single" selected={new Date()} onSelect={() => {}} />
      </div>
      <div>
        <Card>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Card Title</h3>
            <p>This is a card with some sample content. Cards are useful for grouping related information.</p>
          </div>
        </Card>
      </div>
      <div>
        <Carousel>
          <div className="flex space-x-4 overflow-x-auto">
            <div className="min-w-[200px] h-32 bg-gray-200 flex items-center justify-center rounded">Slide 1</div>
            <div className="min-w-[200px] h-32 bg-gray-300 flex items-center justify-center rounded">Slide 2</div>
            <div className="min-w-[200px] h-32 bg-gray-400 flex items-center justify-center rounded">Slide 3</div>
          </div>
        </Carousel>
      </div>
      <div>
        <Checkbox defaultChecked /> Accept terms and conditions
      </div>
      <div>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="outline">Toggle Section</Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="p-4">This is a collapsible section. Click the trigger to expand or collapse.</div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div>
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className="p-4 border rounded cursor-pointer select-none">Right-click me for context menu</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Copy</ContextMenuItem>
            <ContextMenuItem>Paste</ContextMenuItem>
            <ContextMenuItem>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
      {/*PROPERLY IMPLEMENTED UNTIL THIS POINT*/}
      -----PROPERLY IMPLEMENTED UNTIL THIS POINT-----
      <div>
        <Dialog>
          <Button>Open Dialog</Button>
        </Dialog>
      </div>
      <div>
        <Drawer>
          <Button>Open Drawer</Button>
        </Drawer>
      </div>
      <div>
        <DropdownMenu>
          <Button>Open Dropdown</Button>
        </DropdownMenu>
      </div>
      <div>
        <HoverCard>
          <div className="p-4 border rounded">Hover over me for more info</div>
        </HoverCard>
      </div>
      <div>
        <Input placeholder="Enter your name" />
      </div>
      <div>
        <Label htmlFor="username">Username</Label>
      </div>
      <div>
        <Menubar>
          <div className="flex gap-2">
            <Button>File</Button>
            <Button>Edit</Button>
            <Button>View</Button>
          </div>
        </Menubar>
      </div>
      <div>
        <NavigationMenu>
          <nav className="flex gap-4">
            <a href="#" className="text-blue-600 hover:underline">Dashboard</a>
            <a href="#" className="text-blue-600 hover:underline">Settings</a>
            <a href="#" className="text-blue-600 hover:underline">Profile</a>
          </nav>
        </NavigationMenu>
      </div>
      <div>
        <Pagination>
          <div className="flex gap-2">
            <Button variant="outline">Previous</Button>
            <span>Page 1 of 5</span>
            <Button variant="outline">Next</Button>
          </div>
        </Pagination>
      </div>
      <div>
        <Popover>
          <Button>Open Popover</Button>
        </Popover>
      </div>
      <div>
        <Progress value={70} />
      </div>
      <div>
        <RadioGroup>
          <div className="flex flex-col gap-2">
            <label><input type="radio" name="option" value="1" /> Option 1</label>
            <label><input type="radio" name="option" value="2" /> Option 2</label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <ResizablePanelGroup direction="horizontal">
          <div className="flex-1 p-4 border">Panel 1</div>
          <div className="flex-1 p-4 border">Panel 2</div>
        </ResizablePanelGroup>
      </div>
      <div>
        <ScrollArea className="h-24 w-48 border rounded">
          <div className="h-48">Scrollable content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </ScrollArea>
      </div>
      <div>
        <Select>
          <select className="border p-2 rounded" title="Fruit">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
          </select>
        </Select>
      </div>
      <div>
        <Separator className="my-4" />
      </div>
      <div>
        <Sheet>
          <Button>Open Sheet</Button>
        </Sheet>
      </div>
      <div>
        <Skeleton className="w-32 h-8" />
      </div>
      <div>
        <Slider defaultValue={[30]} max={100} step={1} />
      </div>
      <div>
        <Switch defaultChecked />
      </div>
      <div>
        <Table>
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Alice</td>
                <td className="border px-4 py-2">24</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Bob</td>
                <td className="border px-4 py-2">29</td>
              </tr>
            </tbody>
          </table>
        </Table>
      </div>
      <div>
        <Tabs>
          <div className="flex gap-2">
            <Button>Tab 1</Button>
            <Button>Tab 2</Button>
          </div>
        </Tabs>
      </div>
      <div>
        <Textarea placeholder="Type your message here..." />
      </div>
      <div>
        <ToggleGroup type="single" defaultValue="1">
          <Toggle value="1">Toggle 1</Toggle>
          <Toggle value="2">Toggle 2</Toggle>
        </ToggleGroup>
      </div>
      <div>
        <Toggle>Toggle Me</Toggle>
      </div>
      <div>
        <Tooltip>
          <Button>Hover for Tooltip</Button>
        </Tooltip>
      </div>
    </div>
  );
}
