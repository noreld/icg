"use client";

import { useRouter } from "next/navigation";
import { title } from "@/components/primitives";
import { Card, CardBody, Listbox, ListboxItem, Progress } from "@nextui-org/react";
import { User } from "@geist-ui/icons";

export default function DashboardPage() {
  const router = useRouter()

  const users = [
    {
      "name": "OptiFire",
      "approximate_job": "Software Developer",
      "percentage": 65
    },
    {
      "name": "Goku",
      "approximate_job": "Engineer",
      "percentage": 43
    }
  ]

  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <h1 className={title({ color: "violet" }) + " p-2"}>Dashboard</h1>
      <Card className="w-full">
        <CardBody className="flex p-6 gap-5">
          <Listbox>
            {users.map((user, i) => (
              <ListboxItem variant="faded" key={i} classNames={{ base: "flex items-center justify-center gap-4 p-3" }} startContent={<div className="bg-neutral-800 p-3 border border-neutral-700 rounded-full"><User className="w-8 h-8 text-violet" /></div>}>
                <span className="text-medium font-bold">{user.name}</span>
                <Progress
                  className="max-w-full"
                  color="secondary"
                  label={user.approximate_job}
                  maxValue={100}
                  showValueLabel={true}
                  size="sm"
                  value={user.percentage}
                />
              </ListboxItem>
            ))}
          </Listbox>
        </CardBody>
      </Card>
    </div>
  );
}
