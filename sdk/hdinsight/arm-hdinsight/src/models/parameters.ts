/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  Application as ApplicationMapper,
  ClusterCreateParametersExtended as ClusterCreateParametersExtendedMapper,
  ClusterPatchParameters as ClusterPatchParametersMapper,
  ClusterResizeParameters as ClusterResizeParametersMapper,
  AutoscaleConfigurationUpdateParameter as AutoscaleConfigurationUpdateParameterMapper,
  ClusterDiskEncryptionParameters as ClusterDiskEncryptionParametersMapper,
  UpdateGatewaySettingsParameters as UpdateGatewaySettingsParametersMapper,
  UpdateClusterIdentityCertificateParameters as UpdateClusterIdentityCertificateParametersMapper,
  ExecuteScriptActionParameters as ExecuteScriptActionParametersMapper,
  ClusterMonitoringRequest as ClusterMonitoringRequestMapper,
  AzureMonitorRequest as AzureMonitorRequestMapper,
  Extension as ExtensionMapper,
  NameAvailabilityCheckRequestParameters as NameAvailabilityCheckRequestParametersMapper,
  ClusterCreateRequestValidationParameters as ClusterCreateRequestValidationParametersMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const clusterName: OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    serializedName: "clusterName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2024-08-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const applicationName: OperationURLParameter = {
  parameterPath: "applicationName",
  mapper: {
    serializedName: "applicationName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: ApplicationMapper,
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterCreateParametersExtendedMapper,
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterPatchParametersMapper,
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterResizeParametersMapper,
};

export const roleName: OperationURLParameter = {
  parameterPath: "roleName",
  mapper: {
    serializedName: "roleName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: AutoscaleConfigurationUpdateParameterMapper,
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterDiskEncryptionParametersMapper,
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: UpdateGatewaySettingsParametersMapper,
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: UpdateClusterIdentityCertificateParametersMapper,
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: ExecuteScriptActionParametersMapper,
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: {
    serializedName: "parameters",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "String" } },
    },
  },
};

export const configurationName: OperationURLParameter = {
  parameterPath: "configurationName",
  mapper: {
    serializedName: "configurationName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterMonitoringRequestMapper,
};

export const parameters11: OperationParameter = {
  parameterPath: "parameters",
  mapper: AzureMonitorRequestMapper,
};

export const parameters12: OperationParameter = {
  parameterPath: "parameters",
  mapper: ExtensionMapper,
};

export const extensionName: OperationURLParameter = {
  parameterPath: "extensionName",
  mapper: {
    serializedName: "extensionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters13: OperationParameter = {
  parameterPath: "parameters",
  mapper: NameAvailabilityCheckRequestParametersMapper,
};

export const parameters14: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterCreateRequestValidationParametersMapper,
};

export const parameters15: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper,
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const privateLinkResourceName: OperationURLParameter = {
  parameterPath: "privateLinkResourceName",
  mapper: {
    serializedName: "privateLinkResourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const scriptName: OperationURLParameter = {
  parameterPath: "scriptName",
  mapper: {
    serializedName: "scriptName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const scriptExecutionId: OperationURLParameter = {
  parameterPath: "scriptExecutionId",
  mapper: {
    serializedName: "scriptExecutionId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const hosts: OperationParameter = {
  parameterPath: "hosts",
  mapper: {
    serializedName: "hosts",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
};
