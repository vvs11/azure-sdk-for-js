/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ClusterResizeData,
  HDInsightContainersManagementClient,
} from "@azure/arm-hdinsightcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Resize an existing Cluster.
 *
 * @summary Resize an existing Cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsightOnAks/preview/2024-05-01-preview/examples/ResizeCluster.json
 */
async function hdInsightClusterResize() {
  const subscriptionId =
    process.env["HDINSIGHT_SUBSCRIPTION_ID"] ||
    "10e32bab-26da-4cc4-a441-52b318f824e6";
  const resourceGroupName =
    process.env["HDINSIGHT_RESOURCE_GROUP"] || "hiloResourcegroup";
  const clusterPoolName = "clusterpool1";
  const clusterName = "cluster1";
  const clusterResizeRequest: ClusterResizeData = {
    location: "West US 2",
    properties: { targetWorkerNodeCount: 5 },
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightContainersManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.clusters.beginResizeAndWait(
    resourceGroupName,
    clusterPoolName,
    clusterName,
    clusterResizeRequest,
  );
  console.log(result);
}

async function main() {
  hdInsightClusterResize();
}

main().catch(console.error);
