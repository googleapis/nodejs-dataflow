// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as templatesserviceModule from '../src';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(require('../protos/protos.json')).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
    let type = root.lookupType(typeName) as protobuf.Type;
    for (const field of fields.slice(0, -1)) {
        type = type.fields[field]?.resolvedType as protobuf.Type;
    }
    return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

describe('v1beta3.TemplatesServiceClient', () => {
    describe('Common methods', () => {
        it('has servicePath', () => {
            const servicePath = templatesserviceModule.v1beta3.TemplatesServiceClient.servicePath;
            assert(servicePath);
        });

        it('has apiEndpoint', () => {
            const apiEndpoint = templatesserviceModule.v1beta3.TemplatesServiceClient.apiEndpoint;
            assert(apiEndpoint);
        });

        it('has port', () => {
            const port = templatesserviceModule.v1beta3.TemplatesServiceClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.templatesServiceStub, undefined);
            await client.initialize();
            assert(client.templatesServiceStub);
        });

        it('has close method for the initialized client', done => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            assert(client.templatesServiceStub);
            client.close().then(() => {
                done();
            });
        });

        it('has close method for the non-initialized client', done => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.templatesServiceStub, undefined);
            client.close().then(() => {
                done();
            });
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
            const result = await client.getProjectId();
            assert.strictEqual(result, fakeProjectId);
            assert((client.auth.getProjectId as SinonStub).calledWithExactly());
        });

        it('has getProjectId method with callback', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
            const promise = new Promise((resolve, reject) => {
                client.getProjectId((err?: Error|null, projectId?: string|null) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(projectId);
                    }
                });
            });
            const result = await promise;
            assert.strictEqual(result, fakeProjectId);
        });
    });

    describe('createJobFromTemplate', () => {
        it('invokes createJobFromTemplate without error', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.dataflow.v1beta3.CreateJobFromTemplateRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.dataflow.v1beta3.CreateJobFromTemplateRequest', ['projectId']);
            request.projectId = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.dataflow.v1beta3.CreateJobFromTemplateRequest', ['location']);
            request.location = defaultValue2;
            const expectedHeaderRequestParams = `project_id=${defaultValue1}&location=${defaultValue2}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.dataflow.v1beta3.Job()
            );
            client.innerApiCalls.createJobFromTemplate = stubSimpleCall(expectedResponse);
            const [response] = await client.createJobFromTemplate(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.createJobFromTemplate as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.createJobFromTemplate as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes createJobFromTemplate without error using callback', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.dataflow.v1beta3.CreateJobFromTemplateRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.dataflow.v1beta3.CreateJobFromTemplateRequest', ['projectId']);
            request.projectId = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.dataflow.v1beta3.CreateJobFromTemplateRequest', ['location']);
            request.location = defaultValue2;
            const expectedHeaderRequestParams = `project_id=${defaultValue1}&location=${defaultValue2}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.dataflow.v1beta3.Job()
            );
            client.innerApiCalls.createJobFromTemplate = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.createJobFromTemplate(
                    request,
                    (err?: Error|null, result?: protos.google.dataflow.v1beta3.IJob|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.createJobFromTemplate as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.createJobFromTemplate as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes createJobFromTemplate with error', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.dataflow.v1beta3.CreateJobFromTemplateRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.dataflow.v1beta3.CreateJobFromTemplateRequest', ['projectId']);
            request.projectId = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.dataflow.v1beta3.CreateJobFromTemplateRequest', ['location']);
            request.location = defaultValue2;
            const expectedHeaderRequestParams = `project_id=${defaultValue1}&location=${defaultValue2}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.createJobFromTemplate = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.createJobFromTemplate(request), expectedError);
            const actualRequest = (client.innerApiCalls.createJobFromTemplate as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.createJobFromTemplate as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes createJobFromTemplate with closed client', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.dataflow.v1beta3.CreateJobFromTemplateRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.dataflow.v1beta3.CreateJobFromTemplateRequest', ['projectId']);
            request.projectId = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.dataflow.v1beta3.CreateJobFromTemplateRequest', ['location']);
            request.location = defaultValue2;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.createJobFromTemplate(request), expectedError);
        });
    });

    describe('launchTemplate', () => {
        it('invokes launchTemplate without error', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.dataflow.v1beta3.LaunchTemplateRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.dataflow.v1beta3.LaunchTemplateRequest', ['projectId']);
            request.projectId = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.dataflow.v1beta3.LaunchTemplateRequest', ['location']);
            request.location = defaultValue2;
            const expectedHeaderRequestParams = `project_id=${defaultValue1}&location=${defaultValue2}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.dataflow.v1beta3.LaunchTemplateResponse()
            );
            client.innerApiCalls.launchTemplate = stubSimpleCall(expectedResponse);
            const [response] = await client.launchTemplate(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.launchTemplate as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.launchTemplate as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes launchTemplate without error using callback', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.dataflow.v1beta3.LaunchTemplateRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.dataflow.v1beta3.LaunchTemplateRequest', ['projectId']);
            request.projectId = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.dataflow.v1beta3.LaunchTemplateRequest', ['location']);
            request.location = defaultValue2;
            const expectedHeaderRequestParams = `project_id=${defaultValue1}&location=${defaultValue2}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.dataflow.v1beta3.LaunchTemplateResponse()
            );
            client.innerApiCalls.launchTemplate = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.launchTemplate(
                    request,
                    (err?: Error|null, result?: protos.google.dataflow.v1beta3.ILaunchTemplateResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.launchTemplate as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.launchTemplate as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes launchTemplate with error', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.dataflow.v1beta3.LaunchTemplateRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.dataflow.v1beta3.LaunchTemplateRequest', ['projectId']);
            request.projectId = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.dataflow.v1beta3.LaunchTemplateRequest', ['location']);
            request.location = defaultValue2;
            const expectedHeaderRequestParams = `project_id=${defaultValue1}&location=${defaultValue2}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.launchTemplate = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.launchTemplate(request), expectedError);
            const actualRequest = (client.innerApiCalls.launchTemplate as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.launchTemplate as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes launchTemplate with closed client', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.dataflow.v1beta3.LaunchTemplateRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.dataflow.v1beta3.LaunchTemplateRequest', ['projectId']);
            request.projectId = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.dataflow.v1beta3.LaunchTemplateRequest', ['location']);
            request.location = defaultValue2;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.launchTemplate(request), expectedError);
        });
    });

    describe('getTemplate', () => {
        it('invokes getTemplate without error', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.dataflow.v1beta3.GetTemplateRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.dataflow.v1beta3.GetTemplateRequest', ['projectId']);
            request.projectId = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.dataflow.v1beta3.GetTemplateRequest', ['location']);
            request.location = defaultValue2;
            const expectedHeaderRequestParams = `project_id=${defaultValue1}&location=${defaultValue2}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.dataflow.v1beta3.GetTemplateResponse()
            );
            client.innerApiCalls.getTemplate = stubSimpleCall(expectedResponse);
            const [response] = await client.getTemplate(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.getTemplate as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getTemplate as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getTemplate without error using callback', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.dataflow.v1beta3.GetTemplateRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.dataflow.v1beta3.GetTemplateRequest', ['projectId']);
            request.projectId = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.dataflow.v1beta3.GetTemplateRequest', ['location']);
            request.location = defaultValue2;
            const expectedHeaderRequestParams = `project_id=${defaultValue1}&location=${defaultValue2}`;
            const expectedResponse = generateSampleMessage(
              new protos.google.dataflow.v1beta3.GetTemplateResponse()
            );
            client.innerApiCalls.getTemplate = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getTemplate(
                    request,
                    (err?: Error|null, result?: protos.google.dataflow.v1beta3.IGetTemplateResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.getTemplate as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getTemplate as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getTemplate with error', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.dataflow.v1beta3.GetTemplateRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.dataflow.v1beta3.GetTemplateRequest', ['projectId']);
            request.projectId = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.dataflow.v1beta3.GetTemplateRequest', ['location']);
            request.location = defaultValue2;
            const expectedHeaderRequestParams = `project_id=${defaultValue1}&location=${defaultValue2}`;
            const expectedError = new Error('expected');
            client.innerApiCalls.getTemplate = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getTemplate(request), expectedError);
            const actualRequest = (client.innerApiCalls.getTemplate as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.getTemplate as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes getTemplate with closed client', async () => {
            const client = new templatesserviceModule.v1beta3.TemplatesServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(
              new protos.google.dataflow.v1beta3.GetTemplateRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.dataflow.v1beta3.GetTemplateRequest', ['projectId']);
            request.projectId = defaultValue1;
            const defaultValue2 =
              getTypeDefaultValue('.google.dataflow.v1beta3.GetTemplateRequest', ['location']);
            request.location = defaultValue2;
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.getTemplate(request), expectedError);
        });
    });
});
