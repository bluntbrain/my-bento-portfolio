import React from "react";
import { Card } from "../ui/card";

export function GoExperience() {
  return (
    <Card
      className="col-span-1 sm:col-span-2 lg:col-span-2 bg-gh-900 border border-gh-700"
      variant="go"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4">GO Experience</h2>
      <p className="mb-4 text-sm sm:text-base">
        Worked on Micro-service Architecture in GO: Developed a distributed
        application with micro services, Utilized JSON, RPC, and gRPC for
        inter-service communication, Implemented event-driven architecture with
        RabbitMQ, Deployed on Docker Swarm and Kubernetes
      </p>
    </Card>
  );
}
