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
import { describe, it } from 'mocha';
import * as messagesv1beta3Module from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

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

function stubPageStreamingCall<ResponseType>(responses?: ResponseType[], error?: Error) {
    const pagingStub = sinon.stub();
    if (responses) {
        for (let i = 0; i < responses.length; ++i) {
            pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
        }
    }
    const transformStub = error ? sinon.stub().callsArgWith(2, error) : pagingStub;
    const mockStream = new PassThrough({
        objectMode: true,
        transform: transformStub,
    });
    // trigger as many responses as needed
    if (responses) {
        for (let i = 0; i < responses.length; ++i) {
            setImmediate(() => { mockStream.write({}); });
        }
        setImmediate(() => { mockStream.end(); });
    } else {
        setImmediate(() => { mockStream.write({}); });
        setImmediate(() => { mockStream.end(); });
    }
    return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(responses?: ResponseType[], error?: Error) {
    let counter = 0;
    const asyncIterable = {
        [Symbol.asyncIterator]() {
            return {
                async next() {
                    if (error) {
                        return Promise.reject(error);
                    }
                    if (counter >= responses!.length) {
                        return Promise.resolve({done: true, value: undefined});
                    }
                    return Promise.resolve({done: false, value: responses![counter++]});
                }
            };
        }
    };
    return sinon.stub().returns(asyncIterable);
}

describe('v1beta3.MessagesV1Beta3Client', () => {
    it('has servicePath', () => {
        const servicePath = messagesv1beta3Module.v1beta3.MessagesV1Beta3Client.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = messagesv1beta3Module.v1beta3.MessagesV1Beta3Client.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = messagesv1beta3Module.v1beta3.MessagesV1Beta3Client.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.messagesV1Beta3Stub, undefined);
        await client.initialize();
        assert(client.messagesV1Beta3Stub);
    });

    it('has close method for the initialized client', done => {
        const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.initialize();
        assert(client.messagesV1Beta3Stub);
        client.close().then(() => {
            done();
        });
    });

    it('has close method for the non-initialized client', done => {
        const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.messagesV1Beta3Stub, undefined);
        client.close().then(() => {
            done();
        });
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
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
        const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
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

    describe('listJobMessages', () => {
        it('invokes listJobMessages without error', async () => {
            const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.ListJobMessagesRequest());
            request.projectId = '';
            request.location = '';
            request.jobId = '';
            const expectedHeaderRequestParams = "project_id=&location=&job_id=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = [
              generateSampleMessage(new protos.google.dataflow.v1beta3.JobMessage()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.JobMessage()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.JobMessage()),
            ];
            client.innerApiCalls.listJobMessages = stubSimpleCall(expectedResponse);
            const [response] = await client.listJobMessages(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listJobMessages as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listJobMessages without error using callback', async () => {
            const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.ListJobMessagesRequest());
            request.projectId = '';
            request.location = '';
            request.jobId = '';
            const expectedHeaderRequestParams = "project_id=&location=&job_id=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = [
              generateSampleMessage(new protos.google.dataflow.v1beta3.JobMessage()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.JobMessage()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.JobMessage()),
            ];
            client.innerApiCalls.listJobMessages = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.listJobMessages(
                    request,
                    (err?: Error|null, result?: protos.google.dataflow.v1beta3.IJobMessage[]|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listJobMessages as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes listJobMessages with error', async () => {
            const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.ListJobMessagesRequest());
            request.projectId = '';
            request.location = '';
            request.jobId = '';
            const expectedHeaderRequestParams = "project_id=&location=&job_id=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.listJobMessages = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.listJobMessages(request), expectedError);
            assert((client.innerApiCalls.listJobMessages as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listJobMessagesStream without error', async () => {
            const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.ListJobMessagesRequest());
            request.projectId = '';
            request.location = '';
            request.jobId = '';
            const expectedHeaderRequestParams = "project_id=&location=&job_id=";
            const expectedResponse = [
              generateSampleMessage(new protos.google.dataflow.v1beta3.JobMessage()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.JobMessage()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.JobMessage()),
            ];
            client.descriptors.page.listJobMessages.createStream = stubPageStreamingCall(expectedResponse);
            const stream = client.listJobMessagesStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.google.dataflow.v1beta3.JobMessage[] = [];
                stream.on('data', (response: protos.google.dataflow.v1beta3.JobMessage) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            const responses = await promise;
            assert.deepStrictEqual(responses, expectedResponse);
            assert((client.descriptors.page.listJobMessages.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listJobMessages, request));
            assert.strictEqual(
                (client.descriptors.page.listJobMessages.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('invokes listJobMessagesStream with error', async () => {
            const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.ListJobMessagesRequest());
            request.projectId = '';
            request.location = '';
            request.jobId = '';
            const expectedHeaderRequestParams = "project_id=&location=&job_id=";
            const expectedError = new Error('expected');
            client.descriptors.page.listJobMessages.createStream = stubPageStreamingCall(undefined, expectedError);
            const stream = client.listJobMessagesStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.google.dataflow.v1beta3.JobMessage[] = [];
                stream.on('data', (response: protos.google.dataflow.v1beta3.JobMessage) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            await assert.rejects(promise, expectedError);
            assert((client.descriptors.page.listJobMessages.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.listJobMessages, request));
            assert.strictEqual(
                (client.descriptors.page.listJobMessages.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with listJobMessages without error', async () => {
            const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.ListJobMessagesRequest());
            request.projectId = '';
            request.location = '';
            request.jobId = '';
            const expectedHeaderRequestParams = "project_id=&location=&job_id=";
            const expectedResponse = [
              generateSampleMessage(new protos.google.dataflow.v1beta3.JobMessage()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.JobMessage()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.JobMessage()),
            ];
            client.descriptors.page.listJobMessages.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: protos.google.dataflow.v1beta3.IJobMessage[] = [];
            const iterable = client.listJobMessagesAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.descriptors.page.listJobMessages.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.listJobMessages.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with listJobMessages with error', async () => {
            const client = new messagesv1beta3Module.v1beta3.MessagesV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.ListJobMessagesRequest());
            request.projectId = '';
            request.location = '';
            request.jobId = '';
            const expectedHeaderRequestParams = "project_id=&location=&job_id=";const expectedError = new Error('expected');
            client.descriptors.page.listJobMessages.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.listJobMessagesAsync(request);
            await assert.rejects(async () => {
                const responses: protos.google.dataflow.v1beta3.IJobMessage[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.descriptors.page.listJobMessages.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.listJobMessages.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });
    });
});
