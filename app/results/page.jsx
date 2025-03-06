"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { title } from "@/components/primitives";

import { Card, CardBody, Progress, Button } from "@nextui-org/react";

export default function ResultsPage() {
  const [data, setData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const savedValue = window.localStorage.getItem("result");
    if (savedValue) {
      try {
        const parsedMessage = JSON.parse(savedValue);
        const patchedMessage = JSON.parse(parsedMessage.message.slice(7, -4));
        const sortedMessage = Object.entries(patchedMessage).sort(
          (a, b) => b[1] - a[1]
        );
        setData(sortedMessage);
      } catch (error) {
        console.log(error);
        router.push("/questions");
      } finally {
        window.localStorage.removeItem("result");
      }
    }
  }, []);

  const handleGoBack = () => {
    router.push("/");
    window.localStorage.removeItem("result");
  };

  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <h1 className={title({ color: "blue" }) + " p-2"}>
        Here are top jobs that matched your skills...
      </h1>
      <Card className="w-full">
        <CardBody className="flex p-6 gap-5">
          {data.map(([job, score], i) => (
            <Progress
              classNames={{
                base: "max-w-full",
                track: "drop-shadow-md h-2 border border-default",
                indicator: "bg-gradient-to-r from-violet-700 to-purple-400",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              key={i}
              label={job}
              radius="sm"
              size="sm"
              showValueLabel={true}
              value={score}
            />
          ))}
        </CardBody>
      </Card>
      <Button
        radius="full"
        className="w-1/2"
        variant="shadow"
        color="primary"
        onClick={handleGoBack}
      >
        Go Back
      </Button>
    </div>
  );
}
