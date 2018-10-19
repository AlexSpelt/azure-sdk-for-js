/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ms-rest-azure-js'), require('ms-rest-js')) :
    typeof define === 'function' && define.amd ? define(['exports', 'ms-rest-azure-js', 'ms-rest-js'], factory) :
    (factory((global.Azure = global.Azure || {}, global.Azure.ArmIotcentral = {}),global.msRestAzure,global.msRest));
}(this, (function (exports,msRestAzure,msRest) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /**
     * Defines values for AppSku.
     * Possible values include: 'F1', 'S1'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: AppSku = <AppSku>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var AppSku;
    (function (AppSku) {
        AppSku["F1"] = "F1";
        AppSku["S1"] = "S1";
    })(AppSku || (AppSku = {}));
    /**
     * Defines values for AppNameUnavailabilityReason.
     * Possible values include: 'Invalid', 'AlreadyExists'
     * @readonly
     * @enum {string}
     */
    var AppNameUnavailabilityReason;
    (function (AppNameUnavailabilityReason) {
        AppNameUnavailabilityReason["Invalid"] = "Invalid";
        AppNameUnavailabilityReason["AlreadyExists"] = "AlreadyExists";
    })(AppNameUnavailabilityReason || (AppNameUnavailabilityReason = {}));

    var index = /*#__PURE__*/Object.freeze({
        get AppSku () { return AppSku; },
        get AppNameUnavailabilityReason () { return AppNameUnavailabilityReason; }
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var CloudError = msRestAzure.CloudErrorMapper;
    var BaseResource = msRestAzure.BaseResourceMapper;
    var AppSkuInfo = {
        serializedName: "AppSkuInfo",
        type: {
            name: "Composite",
            className: "AppSkuInfo",
            modelProperties: {
                name: {
                    required: true,
                    serializedName: "name",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var Resource = {
        serializedName: "Resource",
        type: {
            name: "Composite",
            className: "Resource",
            modelProperties: {
                id: {
                    readOnly: true,
                    serializedName: "id",
                    type: {
                        name: "String"
                    }
                },
                name: {
                    readOnly: true,
                    serializedName: "name",
                    constraints: {
                        Pattern: /^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,99}[a-zA-Z0-9]$/
                    },
                    type: {
                        name: "String"
                    }
                },
                type: {
                    readOnly: true,
                    serializedName: "type",
                    type: {
                        name: "String"
                    }
                },
                location: {
                    required: true,
                    serializedName: "location",
                    type: {
                        name: "String"
                    }
                },
                tags: {
                    serializedName: "tags",
                    type: {
                        name: "Dictionary",
                        value: {
                            type: {
                                name: "String"
                            }
                        }
                    }
                }
            }
        }
    };
    var App = {
        serializedName: "App",
        type: {
            name: "Composite",
            className: "App",
            modelProperties: __assign({}, Resource.type.modelProperties, { applicationId: {
                    readOnly: true,
                    serializedName: "properties.applicationId",
                    type: {
                        name: "String"
                    }
                }, displayName: {
                    serializedName: "properties.displayName",
                    constraints: {
                        Pattern: /^.{1,200}$/
                    },
                    type: {
                        name: "String"
                    }
                }, subdomain: {
                    serializedName: "properties.subdomain",
                    constraints: {
                        Pattern: /^[a-z0-9-]{1,63}$/
                    },
                    type: {
                        name: "String"
                    }
                }, template: {
                    serializedName: "properties.template",
                    type: {
                        name: "String"
                    }
                }, sku: {
                    required: true,
                    serializedName: "sku",
                    type: {
                        name: "Composite",
                        className: "AppSkuInfo"
                    }
                } })
        }
    };
    var AppPatch = {
        serializedName: "AppPatch",
        type: {
            name: "Composite",
            className: "AppPatch",
            modelProperties: {
                tags: {
                    serializedName: "tags",
                    type: {
                        name: "Dictionary",
                        value: {
                            type: {
                                name: "String"
                            }
                        }
                    }
                },
                applicationId: {
                    readOnly: true,
                    serializedName: "properties.applicationId",
                    type: {
                        name: "String"
                    }
                },
                displayName: {
                    serializedName: "properties.displayName",
                    constraints: {
                        Pattern: /^.{1,200}$/
                    },
                    type: {
                        name: "String"
                    }
                },
                subdomain: {
                    serializedName: "properties.subdomain",
                    constraints: {
                        Pattern: /^[a-z0-9-]{1,63}$/
                    },
                    type: {
                        name: "String"
                    }
                },
                template: {
                    serializedName: "properties.template",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var ErrorDetails = {
        serializedName: "ErrorDetails",
        type: {
            name: "Composite",
            className: "ErrorDetails",
            modelProperties: {
                code: {
                    readOnly: true,
                    serializedName: "code",
                    type: {
                        name: "String"
                    }
                },
                message: {
                    readOnly: true,
                    serializedName: "message",
                    type: {
                        name: "String"
                    }
                },
                target: {
                    readOnly: true,
                    serializedName: "target",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var OperationDisplay = {
        serializedName: "OperationDisplay",
        type: {
            name: "Composite",
            className: "OperationDisplay",
            modelProperties: {
                provider: {
                    readOnly: true,
                    serializedName: "provider",
                    type: {
                        name: "String"
                    }
                },
                resource: {
                    readOnly: true,
                    serializedName: "resource",
                    type: {
                        name: "String"
                    }
                },
                operation: {
                    readOnly: true,
                    serializedName: "operation",
                    type: {
                        name: "String"
                    }
                },
                description: {
                    readOnly: true,
                    serializedName: "description",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var Operation = {
        serializedName: "Operation",
        type: {
            name: "Composite",
            className: "Operation",
            modelProperties: {
                name: {
                    readOnly: true,
                    serializedName: "name",
                    type: {
                        name: "String"
                    }
                },
                display: {
                    serializedName: "display",
                    type: {
                        name: "Composite",
                        className: "OperationDisplay"
                    }
                }
            }
        }
    };
    var OperationInputs = {
        serializedName: "OperationInputs",
        type: {
            name: "Composite",
            className: "OperationInputs",
            modelProperties: {
                name: {
                    required: true,
                    serializedName: "name",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var AppNameAvailabilityInfo = {
        serializedName: "AppNameAvailabilityInfo",
        type: {
            name: "Composite",
            className: "AppNameAvailabilityInfo",
            modelProperties: {
                nameAvailable: {
                    readOnly: true,
                    serializedName: "nameAvailable",
                    type: {
                        name: "Boolean"
                    }
                },
                reason: {
                    readOnly: true,
                    serializedName: "reason",
                    type: {
                        name: "Enum",
                        allowedValues: [
                            "Invalid",
                            "AlreadyExists"
                        ]
                    }
                },
                message: {
                    serializedName: "message",
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
    var AppListResult = {
        serializedName: "AppListResult",
        type: {
            name: "Composite",
            className: "AppListResult",
            modelProperties: {
                nextLink: {
                    serializedName: "nextLink",
                    type: {
                        name: "String"
                    }
                },
                value: {
                    serializedName: "",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "App"
                            }
                        }
                    }
                }
            }
        }
    };
    var OperationListResult = {
        serializedName: "OperationListResult",
        type: {
            name: "Composite",
            className: "OperationListResult",
            modelProperties: {
                nextLink: {
                    serializedName: "nextLink",
                    type: {
                        name: "String"
                    }
                },
                value: {
                    readOnly: true,
                    serializedName: "",
                    type: {
                        name: "Sequence",
                        element: {
                            type: {
                                name: "Composite",
                                className: "Operation"
                            }
                        }
                    }
                }
            }
        }
    };

    var mappers = /*#__PURE__*/Object.freeze({
        CloudError: CloudError,
        BaseResource: BaseResource,
        AppSkuInfo: AppSkuInfo,
        Resource: Resource,
        App: App,
        AppPatch: AppPatch,
        ErrorDetails: ErrorDetails,
        OperationDisplay: OperationDisplay,
        Operation: Operation,
        OperationInputs: OperationInputs,
        AppNameAvailabilityInfo: AppNameAvailabilityInfo,
        AppListResult: AppListResult,
        OperationListResult: OperationListResult
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */

    var Mappers = /*#__PURE__*/Object.freeze({
        App: App,
        Resource: Resource,
        BaseResource: BaseResource,
        AppSkuInfo: AppSkuInfo,
        ErrorDetails: ErrorDetails,
        AppPatch: AppPatch,
        AppListResult: AppListResult,
        OperationInputs: OperationInputs,
        AppNameAvailabilityInfo: AppNameAvailabilityInfo
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var acceptLanguage = {
        parameterPath: "acceptLanguage",
        mapper: {
            serializedName: "accept-language",
            defaultValue: 'en-US',
            type: {
                name: "String"
            }
        }
    };
    var apiVersion = {
        parameterPath: "apiVersion",
        mapper: {
            required: true,
            serializedName: "api-version",
            type: {
                name: "String"
            }
        }
    };
    var nextPageLink = {
        parameterPath: "nextPageLink",
        mapper: {
            required: true,
            serializedName: "nextLink",
            type: {
                name: "String"
            }
        },
        skipEncoding: true
    };
    var resourceGroupName = {
        parameterPath: "resourceGroupName",
        mapper: {
            required: true,
            serializedName: "resourceGroupName",
            type: {
                name: "String"
            }
        }
    };
    var resourceName = {
        parameterPath: "resourceName",
        mapper: {
            required: true,
            serializedName: "resourceName",
            type: {
                name: "String"
            }
        }
    };
    var subscriptionId = {
        parameterPath: "subscriptionId",
        mapper: {
            required: true,
            serializedName: "subscriptionId",
            type: {
                name: "String"
            }
        }
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /** Class representing a Apps. */
    var Apps = /** @class */ (function () {
        /**
         * Create a Apps.
         * @param {IotCentralClientContext} client Reference to the service client.
         */
        function Apps(client) {
            this.client = client;
        }
        Apps.prototype.get = function (resourceGroupName$$1, resourceName$$1, options, callback) {
            return this.client.sendOperationRequest({
                resourceGroupName: resourceGroupName$$1,
                resourceName: resourceName$$1,
                options: options
            }, getOperationSpec, callback);
        };
        /**
         * Create or update the metadata of an IoT Central application. The usual pattern to modify a
         * property is to retrieve the IoT Central application metadata and security metadata, and then
         * combine them with the modified values in a new body to update the IoT Central application.
         * @param resourceGroupName The name of the resource group that contains the IoT Central
         * application.
         * @param resourceName The ARM resource name of the IoT Central application.
         * @param app The IoT Central application metadata and security metadata.
         * @param [options] The optional parameters
         * @returns Promise<Models.AppsCreateOrUpdateResponse>
         */
        Apps.prototype.createOrUpdate = function (resourceGroupName$$1, resourceName$$1, app, options) {
            return this.beginCreateOrUpdate(resourceGroupName$$1, resourceName$$1, app, options)
                .then(function (lroPoller) { return lroPoller.pollUntilFinished(); });
        };
        /**
         * Update the metadata of an IoT Central application.
         * @param resourceGroupName The name of the resource group that contains the IoT Central
         * application.
         * @param resourceName The ARM resource name of the IoT Central application.
         * @param appPatch The IoT Central application metadata and security metadata.
         * @param [options] The optional parameters
         * @returns Promise<Models.AppsUpdateResponse>
         */
        Apps.prototype.update = function (resourceGroupName$$1, resourceName$$1, appPatch, options) {
            return this.beginUpdate(resourceGroupName$$1, resourceName$$1, appPatch, options)
                .then(function (lroPoller) { return lroPoller.pollUntilFinished(); });
        };
        /**
         * Delete an IoT Central application.
         * @param resourceGroupName The name of the resource group that contains the IoT Central
         * application.
         * @param resourceName The ARM resource name of the IoT Central application.
         * @param [options] The optional parameters
         * @returns Promise<msRest.RestResponse>
         */
        Apps.prototype.deleteMethod = function (resourceGroupName$$1, resourceName$$1, options) {
            return this.beginDeleteMethod(resourceGroupName$$1, resourceName$$1, options)
                .then(function (lroPoller) { return lroPoller.pollUntilFinished(); });
        };
        Apps.prototype.listBySubscription = function (options, callback) {
            return this.client.sendOperationRequest({
                options: options
            }, listBySubscriptionOperationSpec, callback);
        };
        Apps.prototype.listByResourceGroup = function (resourceGroupName$$1, options, callback) {
            return this.client.sendOperationRequest({
                resourceGroupName: resourceGroupName$$1,
                options: options
            }, listByResourceGroupOperationSpec, callback);
        };
        Apps.prototype.checkNameAvailability = function (name, options, callback) {
            return this.client.sendOperationRequest({
                name: name,
                options: options
            }, checkNameAvailabilityOperationSpec, callback);
        };
        /**
         * Create or update the metadata of an IoT Central application. The usual pattern to modify a
         * property is to retrieve the IoT Central application metadata and security metadata, and then
         * combine them with the modified values in a new body to update the IoT Central application.
         * @param resourceGroupName The name of the resource group that contains the IoT Central
         * application.
         * @param resourceName The ARM resource name of the IoT Central application.
         * @param app The IoT Central application metadata and security metadata.
         * @param [options] The optional parameters
         * @returns Promise<msRestAzure.LROPoller>
         */
        Apps.prototype.beginCreateOrUpdate = function (resourceGroupName$$1, resourceName$$1, app, options) {
            return this.client.sendLRORequest({
                resourceGroupName: resourceGroupName$$1,
                resourceName: resourceName$$1,
                app: app,
                options: options
            }, beginCreateOrUpdateOperationSpec, options);
        };
        /**
         * Update the metadata of an IoT Central application.
         * @param resourceGroupName The name of the resource group that contains the IoT Central
         * application.
         * @param resourceName The ARM resource name of the IoT Central application.
         * @param appPatch The IoT Central application metadata and security metadata.
         * @param [options] The optional parameters
         * @returns Promise<msRestAzure.LROPoller>
         */
        Apps.prototype.beginUpdate = function (resourceGroupName$$1, resourceName$$1, appPatch, options) {
            return this.client.sendLRORequest({
                resourceGroupName: resourceGroupName$$1,
                resourceName: resourceName$$1,
                appPatch: appPatch,
                options: options
            }, beginUpdateOperationSpec, options);
        };
        /**
         * Delete an IoT Central application.
         * @param resourceGroupName The name of the resource group that contains the IoT Central
         * application.
         * @param resourceName The ARM resource name of the IoT Central application.
         * @param [options] The optional parameters
         * @returns Promise<msRestAzure.LROPoller>
         */
        Apps.prototype.beginDeleteMethod = function (resourceGroupName$$1, resourceName$$1, options) {
            return this.client.sendLRORequest({
                resourceGroupName: resourceGroupName$$1,
                resourceName: resourceName$$1,
                options: options
            }, beginDeleteMethodOperationSpec, options);
        };
        Apps.prototype.listBySubscriptionNext = function (nextPageLink$$1, options, callback) {
            return this.client.sendOperationRequest({
                nextPageLink: nextPageLink$$1,
                options: options
            }, listBySubscriptionNextOperationSpec, callback);
        };
        Apps.prototype.listByResourceGroupNext = function (nextPageLink$$1, options, callback) {
            return this.client.sendOperationRequest({
                nextPageLink: nextPageLink$$1,
                options: options
            }, listByResourceGroupNextOperationSpec, callback);
        };
        return Apps;
    }());
    // Operation Specifications
    var serializer = new msRest.Serializer(Mappers);
    var getOperationSpec = {
        httpMethod: "GET",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName}",
        urlParameters: [
            subscriptionId,
            resourceGroupName,
            resourceName
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: App
            },
            default: {
                bodyMapper: ErrorDetails
            }
        },
        serializer: serializer
    };
    var listBySubscriptionOperationSpec = {
        httpMethod: "GET",
        path: "subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/IoTApps",
        urlParameters: [
            subscriptionId
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: AppListResult
            },
            default: {
                bodyMapper: ErrorDetails
            }
        },
        serializer: serializer
    };
    var listByResourceGroupOperationSpec = {
        httpMethod: "GET",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps",
        urlParameters: [
            subscriptionId,
            resourceGroupName
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: AppListResult
            },
            default: {
                bodyMapper: ErrorDetails
            }
        },
        serializer: serializer
    };
    var checkNameAvailabilityOperationSpec = {
        httpMethod: "POST",
        path: "subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/checkNameAvailability",
        urlParameters: [
            subscriptionId
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        requestBody: {
            parameterPath: {
                name: "name"
            },
            mapper: __assign({}, OperationInputs, { required: true })
        },
        responses: {
            200: {
                bodyMapper: AppNameAvailabilityInfo
            },
            default: {
                bodyMapper: ErrorDetails
            }
        },
        serializer: serializer
    };
    var beginCreateOrUpdateOperationSpec = {
        httpMethod: "PUT",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName}",
        urlParameters: [
            subscriptionId,
            resourceGroupName,
            resourceName
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        requestBody: {
            parameterPath: "app",
            mapper: __assign({}, App, { required: true })
        },
        responses: {
            200: {
                bodyMapper: App
            },
            201: {
                bodyMapper: App
            },
            202: {},
            default: {
                bodyMapper: ErrorDetails
            }
        },
        serializer: serializer
    };
    var beginUpdateOperationSpec = {
        httpMethod: "PATCH",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName}",
        urlParameters: [
            subscriptionId,
            resourceGroupName,
            resourceName
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        requestBody: {
            parameterPath: "appPatch",
            mapper: __assign({}, AppPatch, { required: true })
        },
        responses: {
            200: {
                bodyMapper: App
            },
            202: {},
            default: {
                bodyMapper: ErrorDetails
            }
        },
        serializer: serializer
    };
    var beginDeleteMethodOperationSpec = {
        httpMethod: "DELETE",
        path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName}",
        urlParameters: [
            subscriptionId,
            resourceGroupName,
            resourceName
        ],
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {},
            202: {},
            204: {},
            default: {
                bodyMapper: ErrorDetails
            }
        },
        serializer: serializer
    };
    var listBySubscriptionNextOperationSpec = {
        httpMethod: "GET",
        baseUrl: "https://management.azure.com",
        path: "{nextLink}",
        urlParameters: [
            nextPageLink
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: AppListResult
            },
            default: {
                bodyMapper: ErrorDetails
            }
        },
        serializer: serializer
    };
    var listByResourceGroupNextOperationSpec = {
        httpMethod: "GET",
        baseUrl: "https://management.azure.com",
        path: "{nextLink}",
        urlParameters: [
            nextPageLink
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: AppListResult
            },
            default: {
                bodyMapper: ErrorDetails
            }
        },
        serializer: serializer
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */

    var Mappers$1 = /*#__PURE__*/Object.freeze({
        OperationListResult: OperationListResult,
        Operation: Operation,
        OperationDisplay: OperationDisplay,
        ErrorDetails: ErrorDetails
    });

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    /** Class representing a Operations. */
    var Operations = /** @class */ (function () {
        /**
         * Create a Operations.
         * @param {IotCentralClientContext} client Reference to the service client.
         */
        function Operations(client) {
            this.client = client;
        }
        Operations.prototype.list = function (options, callback) {
            return this.client.sendOperationRequest({
                options: options
            }, listOperationSpec, callback);
        };
        Operations.prototype.listNext = function (nextPageLink$$1, options, callback) {
            return this.client.sendOperationRequest({
                nextPageLink: nextPageLink$$1,
                options: options
            }, listNextOperationSpec, callback);
        };
        return Operations;
    }());
    // Operation Specifications
    var serializer$1 = new msRest.Serializer(Mappers$1);
    var listOperationSpec = {
        httpMethod: "GET",
        path: "providers/Microsoft.IoTCentral/operations",
        queryParameters: [
            apiVersion
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: OperationListResult
            },
            default: {
                bodyMapper: ErrorDetails
            }
        },
        serializer: serializer$1
    };
    var listNextOperationSpec = {
        httpMethod: "GET",
        baseUrl: "https://management.azure.com",
        path: "{nextLink}",
        urlParameters: [
            nextPageLink
        ],
        headerParameters: [
            acceptLanguage
        ],
        responses: {
            200: {
                bodyMapper: OperationListResult
            },
            default: {
                bodyMapper: ErrorDetails
            }
        },
        serializer: serializer$1
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var packageName = "@azure/arm-iotcentral";
    var packageVersion = "1.0.0";
    var IotCentralClientContext = /** @class */ (function (_super) {
        __extends(IotCentralClientContext, _super);
        /**
         * Initializes a new instance of the IotCentralClient class.
         * @param credentials Credentials needed for the client to connect to Azure.
         * @param subscriptionId The subscription identifier.
         * @param [options] The parameter options
         */
        function IotCentralClientContext(credentials, subscriptionId, options) {
            var _this = this;
            if (credentials == undefined) {
                throw new Error('\'credentials\' cannot be null.');
            }
            if (subscriptionId == undefined) {
                throw new Error('\'subscriptionId\' cannot be null.');
            }
            if (!options) {
                options = {};
            }
            _this = _super.call(this, credentials, options) || this;
            _this.apiVersion = '2018-09-01';
            _this.acceptLanguage = 'en-US';
            _this.longRunningOperationRetryTimeout = 30;
            _this.baseUri = options.baseUri || _this.baseUri || "https://management.azure.com";
            _this.requestContentType = "application/json; charset=utf-8";
            _this.credentials = credentials;
            _this.subscriptionId = subscriptionId;
            _this.addUserAgentInfo(packageName + "/" + packageVersion);
            if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
                _this.acceptLanguage = options.acceptLanguage;
            }
            if (options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
                _this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
            }
            return _this;
        }
        return IotCentralClientContext;
    }(msRestAzure.AzureServiceClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for
     * license information.
     *
     * Code generated by Microsoft (R) AutoRest Code Generator.
     * Changes may cause incorrect behavior and will be lost if the code is
     * regenerated.
     */
    var IotCentralClient = /** @class */ (function (_super) {
        __extends(IotCentralClient, _super);
        /**
         * Initializes a new instance of the IotCentralClient class.
         * @param credentials Credentials needed for the client to connect to Azure.
         * @param subscriptionId The subscription identifier.
         * @param [options] The parameter options
         */
        function IotCentralClient(credentials, subscriptionId, options) {
            var _this = _super.call(this, credentials, subscriptionId, options) || this;
            _this.apps = new Apps(_this);
            _this.operations = new Operations(_this);
            return _this;
        }
        return IotCentralClient;
    }(IotCentralClientContext));

    exports.IotCentralClient = IotCentralClient;
    exports.IotCentralClientContext = IotCentralClientContext;
    exports.IotCentralModels = index;
    exports.IotCentralMappers = mappers;
    exports.Apps = Apps;
    exports.Operations = Operations;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=arm-iotcentral.js.map
