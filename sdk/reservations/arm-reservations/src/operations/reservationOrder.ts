/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/reservationOrderMappers";
import * as Parameters from "../models/parameters";
import { AzureReservationAPIContext } from "../azureReservationAPIContext";

/** Class representing a ReservationOrder. */
export class ReservationOrder {
  private readonly client: AzureReservationAPIContext;

  /**
   * Create a ReservationOrder.
   * @param {AzureReservationAPIContext} client Reference to the service client.
   */
  constructor(client: AzureReservationAPIContext) {
    this.client = client;
  }

  /**
   * Calculate price for placing a `ReservationOrder`.
   * @summary Calculate price for a `ReservationOrder`.
   * @param body Information needed for calculate or purchase reservation
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationOrderCalculateResponse>
   */
  calculate(body: Models.PurchaseRequest, options?: msRest.RequestOptionsBase): Promise<Models.ReservationOrderCalculateResponse>;
  /**
   * @param body Information needed for calculate or purchase reservation
   * @param callback The callback
   */
  calculate(body: Models.PurchaseRequest, callback: msRest.ServiceCallback<Models.CalculatePriceResponse>): void;
  /**
   * @param body Information needed for calculate or purchase reservation
   * @param options The optional parameters
   * @param callback The callback
   */
  calculate(body: Models.PurchaseRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CalculatePriceResponse>): void;
  calculate(body: Models.PurchaseRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CalculatePriceResponse>, callback?: msRest.ServiceCallback<Models.CalculatePriceResponse>): Promise<Models.ReservationOrderCalculateResponse> {
    return this.client.sendOperationRequest(
      {
        body,
        options
      },
      calculateOperationSpec,
      callback) as Promise<Models.ReservationOrderCalculateResponse>;
  }

  /**
   * List of all the `ReservationOrder`s that the user has access to in the current tenant.
   * @summary Get all `ReservationOrder`s.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationOrderListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ReservationOrderListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ReservationOrderList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReservationOrderList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ReservationOrderList>, callback?: msRest.ServiceCallback<Models.ReservationOrderList>): Promise<Models.ReservationOrderListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ReservationOrderListResponse>;
  }

  /**
   * Purchase `ReservationOrder` and create resource under the specified URI.
   * @summary Purchase `ReservationOrder`
   * @param reservationOrderId Order Id of the reservation
   * @param body Information needed for calculate or purchase reservation
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationOrderPurchaseResponse>
   */
  purchase(reservationOrderId: string, body: Models.PurchaseRequest, options?: msRest.RequestOptionsBase): Promise<Models.ReservationOrderPurchaseResponse> {
    return this.beginPurchase(reservationOrderId,body,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReservationOrderPurchaseResponse>;
  }

  /**
   * Get the details of the `ReservationOrder`.
   * @summary Get a specific `ReservationOrder`.
   * @param reservationOrderId Order Id of the reservation
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationOrderGetResponse>
   */
  get(reservationOrderId: string, options?: Models.ReservationOrderGetOptionalParams): Promise<Models.ReservationOrderGetResponse>;
  /**
   * @param reservationOrderId Order Id of the reservation
   * @param callback The callback
   */
  get(reservationOrderId: string, callback: msRest.ServiceCallback<Models.ReservationOrderResponse>): void;
  /**
   * @param reservationOrderId Order Id of the reservation
   * @param options The optional parameters
   * @param callback The callback
   */
  get(reservationOrderId: string, options: Models.ReservationOrderGetOptionalParams, callback: msRest.ServiceCallback<Models.ReservationOrderResponse>): void;
  get(reservationOrderId: string, options?: Models.ReservationOrderGetOptionalParams | msRest.ServiceCallback<Models.ReservationOrderResponse>, callback?: msRest.ServiceCallback<Models.ReservationOrderResponse>): Promise<Models.ReservationOrderGetResponse> {
    return this.client.sendOperationRequest(
      {
        reservationOrderId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ReservationOrderGetResponse>;
  }

  /**
   * Purchase `ReservationOrder` and create resource under the specified URI.
   * @summary Purchase `ReservationOrder`
   * @param reservationOrderId Order Id of the reservation
   * @param body Information needed for calculate or purchase reservation
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPurchase(reservationOrderId: string, body: Models.PurchaseRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        reservationOrderId,
        body,
        options
      },
      beginPurchaseOperationSpec,
      options);
  }

  /**
   * List of all the `ReservationOrder`s that the user has access to in the current tenant.
   * @summary Get all `ReservationOrder`s.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationOrderListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReservationOrderListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ReservationOrderList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReservationOrderList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ReservationOrderList>, callback?: msRest.ServiceCallback<Models.ReservationOrderList>): Promise<Models.ReservationOrderListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ReservationOrderListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const calculateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Capacity/calculatePrice",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.PurchaseRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CalculatePriceResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Capacity/reservationOrders",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReservationOrderList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}",
  urlParameters: [
    Parameters.reservationOrderId
  ],
  queryParameters: [
    Parameters.apiVersion1,
    Parameters.expand1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReservationOrderResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginPurchaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}",
  urlParameters: [
    Parameters.reservationOrderId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.PurchaseRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ReservationOrderResponse
    },
    202: {
      bodyMapper: Mappers.ReservationOrderResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReservationOrderList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
