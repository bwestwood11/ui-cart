"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { components } from "@/__registry__";
import { Button } from "./ui/button";


interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: keyof typeof components;
  // description?: string;
  hideCode?: boolean;
}

export function ComponentPreview({
  name,
  className,
  // description,
  hideCode = false,
  ...props
}: ComponentPreviewProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const files = components[name].files;

  console.log("files", files);
  const Preview = React.useMemo(() => {
    const Component = components[name].component;

    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name]);

  // const Code = React.useMemo(() => {
  //   return (
  //     <pre className="text-sm text-muted-foreground">
  //       {files.map((file) => {
  //         return (
  //           <code className="block" key={file.path}>
  //             {file.content}
  //           </code>
  //         )
  //       })}
  //     </pre>
  //   )
  // }, [files])

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          {!hideCode && (
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="preview"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Preview
              </TabsTrigger>
              {files.map((file) => {
                return (
                  <TabsTrigger
                    key={file.path}
                    value={file.path}
                    className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                  >
                    {file.path.split("/").pop()}
                  </TabsTrigger>
                );
              })}

              {/* <TabsTrigger
                value="preview"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Code
              </TabsTrigger> */}
            </TabsList>
          )}
        </div>
        <TabsContent
          value="preview"
          className={cn(
            !isExpanded && "h-[400px] overflow-hidden",
            "relative rounded-md border"
          )}
        >
          <div className="absolute bottom-0 right-0 left-0 w-full h-[200px] bg-gradient-to-t from-background to-transparent z-[19]"></div>
          <Button
            variant="outline"
            className="absolute right-1/2 translate-x-1/2 bottom-5 z-[20]"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {!isExpanded ? "Expand" : "Collapse"}
          </Button>

          <div className="flex items-center w-full justify-center p-4">
            <div className="flex items-center gap-2">
              {/* <Link href={`/preview/${components[name].type}/${name}`} className={buttonVariants({className: ""})}>
                      Preview Component
         </Link> */}
              {Preview}
            </div>
          </div>
          {/* <div
              className={cn(
                "preview flex min-h-[350px] w-full justify-center p-10",
                {
                  "items-center": align === "center",
                  "items-start": align === "start",
                  "items-end": align === "end",
                }
              )}
            >
              <React.Suspense
                fallback={
                  <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </div>
                }
              >
                {Preview}
              </React.Suspense>
            </div> */}
        </TabsContent>
        {files.map((file) => {
          return (
            <TabsContent key={file.path} value={file.path}>
              <div className="flex flex-col space-y-4">
                <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                  <pre
                    className="text-sm text-muted-foreground"
                    key={file.path}
                  >
                    <code className="block break-words text-wrap">{file.content}</code>
                  </pre>
                </div>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
